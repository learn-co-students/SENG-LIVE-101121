class ApplicationController < ActionController::API
include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

private

    def record_not_found(error)
        render json: {error: error.messages}, status: :not_found
    end

    def invalid_record(invalid)
        render json: {error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def current_user # memoization
       @current_user ||= User.find_by(id: session[:user_id])
    end
end
