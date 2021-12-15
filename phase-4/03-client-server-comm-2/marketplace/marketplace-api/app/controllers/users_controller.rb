class UsersController < ApplicationController


    def create 
        # creating a new user based on users form submission data
        # we want to make sure that data meets our validations 

        # conditional statements: if/else 

        # begin/rescue 

        user = User.create!(user_params)
        render json: user, status: :created

    end

    def destroy 
        user = User.find(params[:id])
        # .find: raises an exception 
        # .find_by: return nil 
        user.destroy 
        head :no_content 

    end


    # strong params 
private 

    def user_params
        params.permit(:username, :email)
    end
end
