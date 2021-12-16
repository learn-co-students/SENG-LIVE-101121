class CategoriesController < ApplicationController

    def index 
        render json: Category.all, include: ["items", "items.seller"]
    end

    def show 
        category = Category.find(params[:id])
        render json: category, include: ["items", "items.seller"]
    end
end
