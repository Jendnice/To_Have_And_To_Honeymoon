class LocationsController < ApplicationController

    def index 
        locations = Location.all
        render json: LocationSerializer.new(locations)
    end 

    def create 
        location = Location.create(location_params)

        if location
            render json: LocationSerializer.new(location)
        else 
            render json: { message: "Sorry! Could not create new location. Please try again." }
        end 

    end  

    def destroy 
        location = Location.find_by(id: params[:id])

        if location
            location.destroy
        else
            render json: { message: "That location could not be, well...located. Please try again!" }
        end 
    end 

    private

    def location_params
        params.require(:location).permit(:name, :description, :travel_season)
    end

end



