class Location < ApplicationRecord

    has_many :experiences, dependent: :destroy
   
end
