class ExperienceSerializer

  include FastJsonapi::ObjectSerializer

  belongs_to :location

  attributes :name, :description, :region, :image_url 

end





