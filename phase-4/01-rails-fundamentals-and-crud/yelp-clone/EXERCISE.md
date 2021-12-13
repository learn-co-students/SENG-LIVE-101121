# Phase 4 Lecture 1 Exercise

During the breakout exercises, the goal is to apply the tasks learned in the demo portion of lecture, to build out a Rails application together as a group. There should be a designated individual that will share their screen while the rest of the group will help navigate through each task. This is a great opportunity to solidify understanding of the concepts that have been covered in the lessons and lecture so participation is encouraged for everyone. 

The application that we will build together will be a Yelp clone. 

There will be 3 models: User, Review, and Business 

<p align="center">
    <img src="../public/exercise.png" width="400" height="300">
</p>


### Lesson Deliverables

1. [ ] Create a Rails application named 'yelp-clone':
```rb
rails new yelp-clone-api --api --minimal --skip-javascript -T
```

2. [ ] Configure CORS

- Navigate to `config/initializers/cors.rb` and comment out lines 8-16
- Change `origins` to `'*'`

```rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

- In gemfile, comment back in `gem 'rack-cors'` and run `bundle update`

3. [ ] Use Rails to create the migrations for User, Review, Business that reflects the domain model
4. [ ] In the models, add associations to reflect relationships between the data 
5. [ ] Add the following seed data to `db/seeds.rb`. Feel free to create any additional data.

```rb
bob = User.create(username: "bobiscool", email: "bobiscool@123.com")
sam = User.create(username: "samiam", email: "samiam@123.com")

starbucks = Business.create(name: "Starbucks", category: "cafe", city: "north pole", state: "california", zip_code: 100099)
mcdonalds = Business.create(name: "McDonalds", category: "fast-food", city: "south pole", state: "california", zip_code: 100099)
dennys = Business.create(name: "Dennys", category: "diner", city: "los angeles", state: "california", zip_code: 100099)
```

7. [ ] Create an index route and controller method for businesses.   
8. [ ] Create a show route and controller method for businesses.   


