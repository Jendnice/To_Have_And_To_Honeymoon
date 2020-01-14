# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


location_a = Location.create(name: "Ireland", description: "Full of greenery, history, and culture; Ireland provides opportunites to galvant through history, stay in real castles, and explore Irish culture firsthand.", travel_season: "June, July, and August are high season. April, May and September, October are shoulder seasons. November through March is low season.")
location_b = Location.create(name: "Iceland", description: "Iceland awes with glacier hikes, ice caves, puffin spotting, and more. The weather is frigid and finicky, but worth it.", travel_season: "Mid-June through August is considred high season, especially for outdoor enthusiasts. February, March, September, and October are the best months for seeing the Northern Lights. Late November through February can be very cold, dark, and icy. There are also road closures in the mountains from late September to June.")

#  Added through rails console:
#   [#<Experience id: 1, name: "Falconry", description: "birds", region: "West Ireland", image_url: "www.image.com", location_id: 1, created_at: "2020-01-14 15:52:50", updated_at: "2020-01-14 15:52:50">]
#   Belongs to Ireland location.

#   [#<Experience id: 2, name: "Skagafoss Falls", description: "Be awed by the incredible waterfalls!", region: "South", image_url: "www.icelandwaterfalls.example", location_id: 2, created_at: "2020-01-14 17:23:26", updated_at: "2020-01-14 17:23:26">]
#   Belongs to Iceland location.