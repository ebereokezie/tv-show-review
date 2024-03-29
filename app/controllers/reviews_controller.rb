class ReviewsController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index

     
        reviews = Review.all

        render json: reviews

    end 

    def create
        user = User.find(session[:user_id])
        televisionShow = TelevisionShow.find(params[:television_show_id])
        
        review = televisionShow.reviews.create(reviews_params)
        review.user_id = user.id
        if review.save
            render json: review, status: :created
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        review = Review.find_by_id(params[:id])
        if review
            if review.user_id == session[:user_id]
                if review.update(reviews_params)
                    render json: review
                else 
                    render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
                end
            else 
                render json: {error: "Incorrect user"}, status: :unauthorized
            end
        else
          render json: {error: "Review not found"}, status: :not_found
        end
      end

    def destroy
        review = Review.find(params[:id])
        if review
            if review.user_id == session[:user_id]
                review.destroy
                head :no_content
            else
                render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
             end
         else
            render json: {error: "Review not found"}, status: :not_found
         end
    end

    private

  

    def reviews_params
        params.permit(:comment, :rating, :television_show_id)
    end
end
