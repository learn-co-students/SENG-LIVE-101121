class SessionsController < ApplicationController

    def create 
        # find our user: email or username
        # if our user exists, then we want to authenticate their password 
        # else we're going to provide error msg 
        user = User.find_by!(username: params[:username])
        if user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: "invalid credentials", status: :unauthorized
        end 
    end

    def destroy 
        session.delete :user_id
    end
end
