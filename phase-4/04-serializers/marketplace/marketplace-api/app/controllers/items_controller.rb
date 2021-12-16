class ItemsController < ApplicationController
    before_action :find_item, only: [:show, :update, :destroy, :sold]

    def index 
        item = Item.where(sold: false)
        render json: item, status: :ok 
    end

    def show 
        render json: @item, except: [:created_at, :updated_at], status: :ok 
    end 

    def create 
        item = current_user.sold_items.create!(item_params)
        render json: item, status_code: :created
    end

    def update 
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
        render json: current_user.purchased_items, status: :ok
    end

    private 

    def item_params 
        params.permit(:name, :price, :desc)
    end

    def find_item
        @item = Item.find(params[:id])
    end
end
