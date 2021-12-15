# Lecture 3: Client/Server Communication Pt 2

## Thinking about the application front end features:

- User can create an account by submitting a username, email and eventually a password
- User can delete their account
- User can submit a form to list a new item
- User can select categories upon item creation
- User can see a list of all items for sale
- User can see all items listed under a category
- User can edit an existing item if it belongs to currently logged in user
- User can delete an existing item if it belongs to currently logged in user
- User can buy an item that is listed
- User can see all items that they purchased

## Lecture Objectives

- Define a DELETE route and controller method to delete a resource
- Define an UPDATE route and controller method to update a resource
- Handle valid and invalid data response in controller
- Test request/response flow via Postman

## Lecture Deliverables

1. [ ] [Complete the User api](#pt1)
2. [ ] [Complete the Item api](#pt2)
3. [ ] [Complete the Category api](#pt3)

### Complete the User api

<div id="pt1"></div>

#### User can create an account by submitting a username, email and eventually a password

1. What HTTP verb will be used? 'POST' 
2. What will the path look like? '/users' 
3. What controller and action will handle the request? users controller, create action 
4. What validations are involved?
5. How will this response be handled in the controller action? we want to first create the resource, then we want to check and see if its valid. if it is, we'll respond with a success, if its not, response of an error 

inside `config/routes.rb`

```rb
resources :users, only: [:create]
```

inside `UsersController`

```rb
class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :email)
    end
end
```

#### User can delete their account if the account belongs to the logged in user

1. What HTTP verb will be used? delete
2. What will the path look like? '/users/:id'
3. What is the controller action? users#destroy
4. Are there any dependencies to be concerned about upon destroying this resource?

inside `config/routes.rb`

```rb
resources :users, only: [:create, :destroy]
```

inside `UsersController`

```rb
class UsersController < ApplicationController

  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      head :no_content
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

end
```

What about a users dependencies(children)?

Currently, if we try to delete a user, the following error will occur:

```rb
"#<ActiveRecord::InvalidForeignKey: SQLite3::ConstraintException: FOREIGN KEY constraint failed>"
```

This occurs because a user has dependents, and the dependents foreign key column has constraints which means the value stored cannot NULL.

When a user that is a seller is deleted, we want to retain the items they sold to be able to keep track of a buyers purchased items.

In this case, we can nullify our sellers dependents, while destroying a buyers dependents.

```rb
    has_many :purchased_items, class_name: "Item", foreign_key: 'buyer_id', dependent: :destroy
    has_many :sold_items, class_name: "Item", foreign_key: 'seller_id', dependent: :nullify
```

### Complete the Item api

<div id="pt2"></div>

#### User can see a list of all items listed for sale

When we render a list of all items, we want to make sure to return only the items available for search. Update the controller action to:

```rb
    def index
        items = Item.where(sold: false)
        render json: items
    end
```

#### User can edit an existing item if it belongs to currently logged in user

We will handle authorization in upcoming lessons

1. What HTTP verb will be used? 'PATCH' 
2. What will the path look like? 'items/:id'
3. What controller and action will handle the request? update action itemscontroller 
4. What validations are involved?
5. How will this response be handled in the controller action? find the correct item using the params[:id]. update the item with new params from request. if statements, if it updated/meet the validations, then render success response. else: render some error 

in `config/routes.rb`

```rb
  resources :items, only: [:index, :show, :create, :update]
```

in `ItemsController`

```rb
      def update
        item = Item.find_by(id: params[:id])
        if item && item.update(item_params)
            render json: item, status: :ok
        else
          render json: { error: "Item not found" }, status: :unprocessable_entity
        end
      end
```

#### User can delete an existing item if it belongs to currently logged in user

in `config/routes.rb`

```rb
  resources :items, only: [:index, :show, :create, :update, :destroy]
```

in `ItemsController`

```rb
      def destroy
        item = Item.find_by(id: params[:id])
        if item
            item.destroy
            head :no_content
        else
          render json: { error: "Item not found" }, status: :unprocessable_entity
        end
      end
```

#### User can buy an item that is listed

On the front end, a button 'purchase' will be available that will trigger an event upon click. When that button is clicked, we want to update the sold status of the item to true, and update the buyer_id.

How can this be handled?

1. Is this a create or update action?
2. What is the HTTP verb?
3. What is the path?
4. What controller will handle this request?
5. What controller action should be responsible?

in `config/routes.rb` we will create a custom route

```rb
get '/items/:id/sold', to: "items#sold"
```

in `ItemsController`

```rb
      def sold
        item = Item.find_by(id: params[:id])
        if item
          item.update(sold: true, buyer: current_user)
          render json: item, status: :ok
        else
          render json: {error: "Item not found"}, status: :unprocessable_entity
        end
      end
```

#### User can see all items that they purchased

Here we want to return all purchased items specific to a user.

Nested Resources:

in `config/routes.rb`

```rb
  get 'users/:id/purchased_items', to: 'items#purchased_items'
```

in `ItemsController`

```rb
      def purchased_items
        buyer = User.find(params[:id])
        purchased_items = buyer.purchased_items
        render json: purchased_items
      end
```
