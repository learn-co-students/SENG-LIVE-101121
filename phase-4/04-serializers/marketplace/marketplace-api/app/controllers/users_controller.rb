class UsersController < ApplicationController


    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content 
    end

private 

    def user_params
        params.permit(:username, :email)
    end
end
