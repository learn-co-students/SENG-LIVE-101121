class BusinessesController < ApplicationController
    # before_action :find_business, only: [:show, :update, :destroy]


    def index 
        businesses = Business.all 
        render json: businesses 
    end

    def show 
        byebug
        if @business 
            render json: @business 
        else 
            render json: "Business does not exist!"
        end
    end

    def update 
     
    end
    
    def destroy 
        
    end

    def create 
        business = Business.create!(business_params)

    rescue ActiveRecord::RecordInvalid => invalid 
        render json: invalid.record.errors 
    end


private 

    def business_params 
        params.permit(:name)
    end

    def find_business 
        @business = Business.find_by(id: params[:id])
    end
end
