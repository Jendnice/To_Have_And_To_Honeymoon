class LocationSerializer

  include FastJsonapi::ObjectSerializer

  # has_many :experiences

  attributes :name, :description, :travel_season

  # Or could put :experiences in attributes list. Not sure if that works the same or not.

end

