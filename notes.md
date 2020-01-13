
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
      x- build out Location controller - start with ONE controller action
      x- build out/utilize serializer as part of controller action 
      x- build out Location routes - start with ONE route that matches controller action built
      x- build out fetch call - start with ONE that matches above
      x- seed data based on above x- ensure everything works by testing it visually
      x- render and format location(s) onto page
      x- add beginning style(s) (?)
      - build out DOM update - start with ONE DOM update that matches/correlates with above
      x- ensure everything works by testing it visually (again)

      - go back to location controller and repeat for next controller action from there to end of list until Location is fully built
      - (Remember to add experiences back in to Location Serializer once that resource is up and running in all parts)


      LOCATION INFO:
      
has_many :experiences

name -- string 
description -- string
travel_season -- string


