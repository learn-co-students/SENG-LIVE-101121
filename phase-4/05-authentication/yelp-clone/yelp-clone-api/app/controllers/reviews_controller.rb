class ReviewsController < ApplicationController


    def create 
        review = Review.create(review_params)
    end
end



# 1. serialize a business to include the id 
# 2. define a nested route: `/businesses/:business_id/reviews`
# 3. Upon a review submission, we would post to the ^ 


# or 
# pass in the id with the body on the front end 