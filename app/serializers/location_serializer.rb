class LocationSerializer

  include FastJsonapi::ObjectSerializer

  has_many :experiences

  attributes :name, :description, :travel_season

end

