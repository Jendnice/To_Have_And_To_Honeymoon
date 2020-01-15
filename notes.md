
  NOTES:

  - When everything is set, update the config > intializers > cors.rb to have specific frontend url instead of all ('*') in origins. Instead, and based on your frontend repo address, it should say something like:
        origins 'localhost:8000'  
        or 
        origins 'localhost:/3000'
  - Do NOT include a backslash at the end of the address!
  Also update the resource '*', headers, and methods, to only reflect what you're using in your project.

  - Review project page and Github page reqs to ensure all is done. (README, 2 - 4 min demo video, blog, project repo, etc.)
  - Also review above resources and add'l videos, resources to prepare for PR




Current To-Do's:

  - Build the R from CRUD for just one model, vertically! That means one migration, one model, one controller action, one fetch   call, and one DOM update. Add seed data and confirm that your code works by testing it visually.

  Location:
      x- build migration for Location model
      x- build out model for Location

      xx- build out Location controller - start with ONE controller action
      xx- build out/utilize serializer as part of controller action 
      xx- build out Location routes - start with ONE route that matches controller action built

      xx- build out fetch call - start with ONE that matches above
      xx- seed data based on above 
      xx- ensure everything works by testing it visually
      xx- render and format location(s) onto page
      x- add beginning style(s) (?)
      - Update new form to have text areas instead of one input line
      x- build out DOM update - start with ONE DOM update that matches/correlates with above
      xx- ensure everything works by testing it visually (again)

      - go back to location controller and repeat for next controller action 
      - From there, either continue repeating for the remaining CRUD actions until Location is fully built OR
      - repeat the steps from the beginning for the experience resource (again, starting with index or show and building vertically)
      - (Remember to add experiences back in to Location Serializer once that resource is up and running in all parts)


      LOCATION INFO:
      
has_many :experiences

name -- string 
description -- string
travel_season -- string






  Experience:
      x- build migration for Experience model
      x- build out model for Experience

      x- build out Experience controller - start with ONE controller action
      x- build out/utilize serializer as part of controller action 
      x- build out Experience routes - start with ONE route that matches controller action built
      - (Remember to add experiences back in to Location Serializer (and everywhere else relevant= model, etc.) once that resource is up and running in all parts)

      - build out fetch call - start with ONE that matches above
      - seed data based on above 
      - ensure everything works by testing it visually
      - render and format location(s) onto page
      - add beginning style(s) (?)
      - build out DOM update - start with ONE DOM update that matches/correlates with above
      - ensure everything works by testing it visually (again)

      - go back to experience controller and repeat for next controller action 
      - From there, either continue repeating for the remaining CRUD actions until Experience is fully built OR
      - repeat the steps with the remaining Location pieces 
      


      EXPERIENCE INFO:

belongs_to :location

(location_id -- integer/?)
name -- string
description -- text
region -- string
image_url -- string 


** Figure out a way to break up renderlocation() in location.js. Huge right now. Need to break it up into pieces. 
** At least some of it belongs in experience.js.
** Update it so a Location can only be added if it has a name. (Right now, blank can be submitted.)
** CLEAN UP unnecessary and unused code (all js files, index.html file)
** Back to list above and continue from there.
** Images! Make sure urls work and update form, etc. to have it as an href(?). Should display photo.
** Styling/formatting, etc.

