class TelevisionShowsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize

    def index
        television_show = TelevisionShow.all

        render json: television_show
    end

    def create 
        user = User.find(session[:user_id])
        television_show = TelevisionShow.create(tv_show_params)
        television_show.user_id = user.id
        if television_show.valid?
            render json: television_show, status: :created
        else
            render json: {errors: television_show.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
      user = User.find(session[:user_id])
      television_show = TelevisionShow.find_by(slug: params[:slug])
      render json: television_show
    end

    def update
        television_show = TelevisionShow.find_by(slug: params[:slug])

        if television_show.update(tv_show_params)
            render json: television_show
        else
            render json: {errors: television_show.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        television_show = TelevisionShow.find_by(slug: params[:slug])
      if television_show.destroy
        head :no_content
      else
        render json: {errors: television_show.errors.full_messages}, status: :unprocessable_entity
      end
    end

  
    private
  
    def render_not_found_response
      render json: { error: "TV show not found" }, status: :not_found
    end

    def tv_show_params
        params.permit(:title, :season, :episode, :description, :picture_url)
    end
end
