class ExperiencesController < ApplicationController

    def index 
        experiences = Experience.all
        render json: ExperienceSerializer.new(experiences)
    end 

    
    def create 
        experience = Experience.create(experience_params)

        if experience
            render json: ExperienceSerializer.new(experience)
        else 
            render json: { message: "Sorry! Could not create new experience. Please try again." }
        end 

    end

    def destroy 
        experience = Experience.find_by(id: params[:id])

        if experience
            experience.destroy
        else
            render json: { message: "That experience could not be found. Please try again!" }
        end 
    end

    private

    def experience_params
        params.require(:experience).permit(:name, :description, :region, :image_url, :location_id)
    end


end


