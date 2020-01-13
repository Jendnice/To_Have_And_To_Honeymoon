
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
      - build migration for Location model
      - build out model for Location
      - build out Location controller - start with ONE controller action
      - build out Location routes - start with ONE route that matches controller action built
      - build out fetch call - start with ONE that matches aboves
      - build out DOM update - start with ONE DOM update that matches/correlates with above
      - seed data based on above and ensure everything works by testing it visually

      - go back to location controller and repeat for next controller action from there to end of list until Location is fully built
