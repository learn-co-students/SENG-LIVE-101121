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

    def create 
        byebug
        # item = Item.create(item_params, seller_id: current_user.id)
        item = current_user.sold_items.create!(item_params)

        if item.valid? 
            render json: item, status_code: :created
        else  
            render json: item.errors.full_messages, status: :unprocessable_entity
        end
    end


    private 

    def item_params 
        params.permit(:name, :price, :desc)
    end
end
