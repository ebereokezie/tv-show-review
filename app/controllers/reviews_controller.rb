class ReviewsController < ApplicationController
    before_action :authorize

    def create
        television_show = Television_show.find(params[:id])
        user = User.find(session[:user_id])
        review = Review.create(reviews_params)
        review.television_show_id = television_show.id
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

    def reviews_params
        params.permit(:comment, :rating)
    end
end