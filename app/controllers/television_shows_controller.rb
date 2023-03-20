class TelevisionShowsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

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
      television_show = TelevisionShow.find_by(slug: params[:slug])
      
      render json: television_show
    end


  
    private

    def tv_show_params
        params.permit(:title, :season, :episode, :description, :picture_url)
    end
end
