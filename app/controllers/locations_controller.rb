class LocationsController < ApplicationController

    def index 
        locations = Location.all
        render json: LocationSerializer.new(locations)
    end 

    # def show
    #     location = Location.find(params[:id])
    #     render json: LocationSerializer.new(location)
    # end

    def create 
        # if new_location
        #     render json: LocationSerializer.new(location)
        # else 
        #     render json: { message: "Sorry! Could not create new location. Please try again." }
        # end 
        location = Location.create(location_params)

        # render json: location, status: 200

        if new_location
            render json: LocationSerializer.new(location)
        else 
            render json: { message: "Sorry! Could not create new location. Please try again." }
        end 

    end 


    private

    def location_params
        params.require(:location).permit(:name, :description, :travel_season)
    end

end


# def climb_params
#     params.require(:climb).permit(:name, :grade, :description, :location_id, location_attributes: [:name])
# end
# 
# climb has_many reviews, climb belongs_to location (that's what's shown above. You'll need that for experiences.)


