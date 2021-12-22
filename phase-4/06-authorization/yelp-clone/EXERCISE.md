# Lecture 2 exercise

Refer to this doc for validations: [Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html)


1. [ ] Add the following validations to the models:

- A business must be created with a unique name.
- A user must be created with a unique username and email.
- A review must be created with content.

2. [ ] Before moving on, configure application with the following steps:

```rb
inside config/initializers/wrap_parameters.rb

ActiveSupport.on_load(:action_controller) do
  wrap_parameters format: []
end
```

This will ensure that parameters do not get returned nested under the resource key.

```rb
inside ApplicationController

private

def current_user
  User.last
end
```
3. [ ] Define a route and controller method that will create a new business. Reminder to handle valid or invalid data. 

example on how to handle valid or invalid data:

```rb
  if obj.save
    render json: obj, status: :created
  else
    render json: { error: obj.errors.full_messages }, status: :unprocessable_entity
  end
```
4. [ ] Define a route and controller method that will create a new user. Reminder to handle valid or invalid data.

5. [ ] Define a route and controller method that will create a new review. 
    - When a new review is created, the foreign key for a user and business must be present due to the requirements enforced on a `belongs_to` association. 
    - For this we can use the currently logged in user by invoking on the `current_user` method: `current_user.reviews.create(...)` Think about how a `business_id` could be provided. Get creative, there are a few ways to handle this. 
    - Reminder to handle valid or invalid data.

6. [ ] Run `rails s` and test the following data in Postman:

Make a POST request to `localhost:3000/users`
```rb 
User.create(username: "bobiscool", email: "test@123.com")
```

- What is the result? 
- Add a `byebug` to create action in UsersController
```rb
def create
    user = User.create(...)
    byebug
    ...
end
```
- Make Postman request again, test errors in byebug console: `user.errors.full_messages`
- What does the error say? How can this be fixed? 
- Make the required updates in Postman and send another request that will create a successful response.
