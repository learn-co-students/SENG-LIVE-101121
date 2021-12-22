# Lecture 6 Authorization

### Deliverables

- [ ] Allow a user to access endpoints in the application only if logged in
- [ ] Allow a seller to update and delete items that belong to the seller
- [ ] Setup user for admin capabilities
- [ ] Also allow an admin to update and delete items

Authentication and authorization play a role together in the process of allowing users to access dedicated parts of the application. We could have an application that allows users to see some parts of the application if not signed up or logged in, while restricting more interactive portions of the app. This is a decision made by the designer of the application.

Example: We can view reddit threads, but cannot post to them without being logged in.

To protect certain routes, we will add a check before returning any JSON to ensure that a user is logged in.

### Is the user logged in and authorized?

1. Add a method `authenticate_user` that will check to see if a current user exists, meaning someone is logged in. If not, return an unauthorized error with a message. The goal will be to check this method before any response is generated from a request in the action for points in the application we do not want users to access if not logged in.

```rb
def authenticate_user
  return render json: { error: "Not authorized" }, status: :unauthorized unless current_user
end
```

Define which actions to invoke `authenticate_user` before executing action logic by using a controller filter: `before_action`

```rb
before_action :authenticate_user
```

<details>
  <summary>
    Where should the before action be defined if we are restricting most of the applications domain?
  </summary>
  <hr/>

```rb
class ApplicationController < ActionController::API
before_action :authenticate_user
...
end
```

  <hr/>

</details>
<br/>

<details>
  <summary>
    Thinking about what the before_action does, what problems can be anticipated in terms of accessibility? How can this issue be solved?
  </summary>
  <hr/>

No access to `/signup`, `/login` or `/me`

Solution:

```rb
skip_before_action
```

  <hr/>

</details>
<br/>

We want to add a `skip_before_action` to the `sessions_controller` and allow a logged out user to make a request to login.

```rb
class SessionsController < ApplicationController
skip_before_action :authenticate_user, only: [:create]
end
```

Let's also skip the authorization for endpoints: `/signup` and `/me`

```rb
class UsersController < ApplicationController
skip_before_action :authenticate_user, only: [:create, :show]
end
```

Testing:

1. Using Postman, make a GET request to `http://localhost:3000/items`. Expectation: Should render an unauthorized error(401)
2. Make a POST request to `http://localhost:3000/signup`. Expectation: Success.

### Adding an admin feature

While sellers can update/delete the items that belong to them self, we also want to allow admins some control over the application to do so as well. To add this feature, complete the following steps:

1. Add an `admin` column of boolean type to users table , defaulted to false:

```bash
rails g migration AddAdminToUsers admin:boolean
```

2. Inside migration, default this column to `false`

```rb
...
add_column :users, :admin, :boolean, default: false
```

3. Run the migrations and confirm via schema

```bash
rails db:migrate
```

4. For testing purposes, set the first user object in the database as an admin

```rb
User.first.update(admin: true)
```

### Before moving forward, make the following change to the ItemsController:

```rb
class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  ...
  private

  def set_item
    @item = Item.find_by(id: params[:id])
  end
end
```

This will allow us to access `@item` in the next required step.

### Authorize the owner of the item(seller) or admin to update/delete an item

1. Create a method that will check if the currently logged in user is an admin, or the seller of the item.

```rb
def is_authorized
  permitted = current_user.admin? || @item.seller == current_user
  render json: "Accessibility is not permitted", status: :forbidden unless permitted
end
```

2. Invoke the `is_authorized` method before the update or destroy actions are processed.

```rb
class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  before_action :is_authorized, only: [:update, :destroy]
  ...
  private

  def set_item
    @item = Item.find_by(id: params[:id])
  end
end
```

Testing:

- To test this logic out:
  1. Set a user as an admin, and make a PATCH or DELETE request to items to confirm that admin has permission.
  2. Login as a user with no admin permissions, attempt a PATCH or DELETE request to items. This should return a forbidden status.
  3. Login as a seller, find an item that belongs to seller and make a PATCH request to update. This should be allowed if seller is owner.
  4. Attempt to DELETE an item that does not belong to current_user. This should render an error.
