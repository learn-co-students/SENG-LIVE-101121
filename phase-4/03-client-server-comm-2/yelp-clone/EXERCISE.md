# Lecture 3 Exercise 

Together as a group, implement the following features into the API, carefully thinking through each of the questions necessary to build out an update and delete feature for the Review model. 

1. [ ] Users can edit an existing review. Make sure that users can only edit the content attribute. 

- What HTTP verb is required? 'PATCH' 
- What will the defined path be? 'reviews/:id'
- What controller and action is responsible for handling this request? 'reviews#update'
- What should the strong params include?

To complete this exercise:
1. Create a new review associated with an existing user and business. This can be done in the seeds.rb file or in rails console.
2. Define a route in `config/routes.rb`
3. Add the controller method. 
4. Inside the controller method, make sure to first find the review that needs to be updated. Add control flow to ensure that if the review is not found, a correct response is generated, and if an update occurs, the review is serialized as a JSON response.

2. [ ] Users can delete an existing review. 

- What HTTP verb is required? 'delete'
- What will the defined path be?  'reviews/:id'
- What controller and action is responsible for handling this request?
'reviews#destroy'
- What should the strong params include?

To complete this exercise:
1. Define a route in `config/routes.rb`
2. Add the controller method. 
3. Inside the controller method, make sure to first find the review that needs to be deleted. Add control flow to ensure that if the review is not found, a correct response is generated. How should a successful delete be handled? Does this type of request require a reponse?

