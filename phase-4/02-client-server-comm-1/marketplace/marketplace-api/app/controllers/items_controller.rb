class ItemsController < ApplicationController

    # action 
    # index action 
    # retreive all the resources 

    def index 
        item = Item.all
        render json: item, status: :ok 
    end


    # show action: responsible for rendering 1 item with the given id value 
    def show 
        item = Item.find_by(id: params[:id])
        if item 
            render json: item, status: :ok
        else 
            render json: "item not found", status: :not_found
        end 
    end

    # def show 
    #     item = Item.find(params[:id])
    #     render json: item, except: [:created_at, :updated_at], status: :ok 

    # rescue ActiveRecord::RecordNotFound
    #     render json: {error: "Item not found"}, status: :not_found
    # end
end
