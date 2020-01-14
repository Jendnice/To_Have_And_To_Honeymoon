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
        location = Location.create(location_params)

        if new_location
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

    # def destroy
    #     location = Location.find_by(id: params[:id])
    #     location.destroy
    #     render json: location
    # end


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


