class ExperiencesController < ApplicationController

    def index 
        experiences = Experience.all
        render json: ExperienceSerializer.new(experiences)
    end 

end
