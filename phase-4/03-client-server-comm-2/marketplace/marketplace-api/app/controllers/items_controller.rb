class ItemsController < ApplicationController
    before_action :find_item, only: [:show, :update, :destroy, :sold]

    # action 
    # index action 
    # retreive all the resources 

    def index 
        item = Item.where(sold: false)
        render json: item, status: :ok 
    end


    # show action: responsible for rendering 1 item with the given id value 
    # def show 
    #     item = Item.find_by(id: params[:id])
    #     if item 
    #         render json: item, status: :ok
    #     else 
    #         render json: "item not found", status: :not_found
    #     end 
    # end

    def show 
        render json: @item, except: [:created_at, :updated_at], status: :ok 
    end 

    def create 
        # item = Item.create(item_params, seller_id: current_user.id)
        item = current_user.sold_items.create!(item_params)

        if item.valid? 
            render json: item, status_code: :created
        else  
            render json: item.errors.full_messages, status: :unprocessable_entity
        end
    end

    #"/items/:id"
    def update 
        # find the item 
        @item.update!(item_params)

    end

    def destroy 
        @item.destroy 
        head :no_content
    end

    def sold 
        @item.update!(sold: true, buyer: current_user)
        render json: @item, status: :ok
    end

    def purchased_items 
        # purchased_items = current_user.purchased_items 
        # render json: purchased_items, status: :ok 

        render json: current_user.purchased_items, status: :ok
    end
    def purchased_items 
        # purchased_items = current_user.purchased_items 
        # render json: purchased_items, status: :ok 
        if params[:user_id]
            # find the user 
            # return the users purchased items 
        else 
            render json: current_user.purchased_items, status: :ok
        end
    end


    private 

    def item_params 
        params.permit(:name, :price, :desc)
    end

    def find_item
        @item = Item.find(params[:id])
    end
end
