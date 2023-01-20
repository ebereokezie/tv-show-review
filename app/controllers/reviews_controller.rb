class ReviewsController < ApplicationController
    before_action :authorized

    def create
        user = User.find(session[:user_id])
        review = televisionShow.reviews.create(reviews_params)
        review.user_id = user.id
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find(params[:id])

        if review.destroy
            head :no_content
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def televisionShow
        @televisionShow ||= TelevisionShow.find(params[:television_show_id])
    end


    def reviews_params
        params.permit(:comment, :rating, :television_show_id)
    end
end
