class ApplicationController < ActionController::API
    before_action :find, only: [:show, :update, :destroy]

private

    def current_user
        User.last
    end

    def find
    if request.path.include?('reviews')
      @review = Review.find(params[:id])
    elsif request.path.include?('users')
      @user = User.find(params[:id])
    elsif request.path.include?('businesses')
      @business = Business.find(params[:id])
    end
  end
end




