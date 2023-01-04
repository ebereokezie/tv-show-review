class TelevisionShowsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        television_show = Television_show.all

        render json: television_show
    end

    def create 
        user = User.find(session[:user_id])
        television_show = Television_show.create(tv_show_params)
        television_show.user_id = user.id
        if television_show.valid?
            render json: television_show, status: :created
        else
            render json: {errors: television_show.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
      television_show = Television_show.find(params[:id])
      render json: television_show
    end


  
    private
  
    def render_not_found_response
      render json: { error: "TV show not found" }, status: :not_found
    end

    def tv_show_params
        params.permit(:title, :season, :episode, :description, :picture_url)
    end
end
