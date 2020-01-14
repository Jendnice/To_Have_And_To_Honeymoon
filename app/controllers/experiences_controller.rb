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

    private

    def experience_params
        params.require(:experience).permit(:name, :description, :region, :image_url, :location_id)
    end


end


# def climb_params
#     params.require(:climb).permit(:name, :grade, :description, :location_id, location_attributes: [:name])
# end
# 
# climb has_many reviews, climb belongs_to location (that's what's shown above. You'll need that for experiences.)


