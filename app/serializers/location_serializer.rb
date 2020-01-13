class LocationSerializer

  include FastJsonapi::ObjectSerializer

  attributes :name, :description, :travel_season
  # , :experiences

end

