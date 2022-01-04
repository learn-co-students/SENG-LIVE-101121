Let's test the database out by writing some migrations and migrating the database.

```bash
rails g model User username password_digest
rails g model Notes title content:text user:belongs_to
```

Comment back in `bcrypt` inside `gemfile` and run `bundle update`

update User model to:

```rb
class User < ApplicationRecord
    has_secure_password

    has_many :notes
end
```

Notes class should be defined as:

```rb
class Note < ApplicationRecord
  belongs_to :user
end
```

Create the controllers using namespacing

```bash
rails g controller api/users
rails g controller api/notes
rails g controller api/sessions
```

Inside config/routes:

```rb
  namespace :api do
    resources :notes, only: [:index]

    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
```

ApplicationController:

```rb
class ApplicationController < ActionController::API
include ActionController::Cookies
before_action :authenticate_user
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    private

    def current_user
        @current_user = User.find_by_id(session[:user_id])
    end

    def record_not_found(errors)
        render json: errors.message, status: :not_found
    end

    def invalid_record(invalid)
        render json: invalid.record.errors, status: :unprocessable_entity
    end

    def authenticate_user
        render json: "Not authorized", status: :unauthorized unless current_user
    end
end
```

Inside UsersController:

```rb
class UsersController < ApplicationController
    skip_before_action :authenticate_user

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "Not authenticated", status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
```

Inside NotesController:

```rb
class Api::NotesController < ApplicationController

    def index
        render json: Note.all
    end
end
```

Inside SessionsController:

```rb
class Api::SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]

    def create
        user = User.find_by_username(param[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: "Invalid Credentials. Try again!", status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
    end
end

```

Add some seeds data

```rb
u = User.create(username: "elmo", password: "elmo123")

Note.create(title: "Ruby is amazing", content: "I learned how to build an ORM and use a database with a mix of SQL and Ruby", user: u)
Note.create(title: "React is a great and dynamic front end technology", content: "Now I know how to build a full stack application using Rails for backend and React for the frontend", user: u)
Note.create(title: "Deploying today", content: "Today I am learning how to deploy an application to the web", user: u)
```

Create a fallback route and controller

```bash
rails g controller fallback
```

Add the following code to the FallbackController

```rb
class FallbackController < ActionController::Base
  def index
    render file: 'public/index.html'
  end
end
```
