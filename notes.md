
  NOTES:

  - When everything is set, update the config > intializers > cors.rb to have specific frontend url instead of all ('*') in origins. Instead, and based on your frontend repo address, it should say something like:
        origins 'localhost:8000'  
        or 
        origins 'localhost:/3000'
  - Do NOT include a backslash at the end of the address!
  Also update the resource '*', headers, and methods, to only reflect what you're using in your project.

  - Review project page and Github page reqs to ensure all is done. (README, 2 - 4 min demo video, blog, project repo, etc.)
  - Also review above resources and add'l videos, resources to prepare for PR




To-Do's:

  - Build the R from CRUD for just one model, vertically! That means one migration, one model, one controller action, one fetch   call, and one DOM update. Add seed data and confirm that your code works by testing it visually.

  Location:
      x- build migration for Location model
      x- build out model for Location

      xxx- build out Location controller - start with ONE controller action
      xxx- build out/utilize serializer as part of controller action 
      xxx- build out Location routes - start with ONE route that matches controller action built

      xxx- build out fetch call - start with ONE that matches above
      xxx- seed data based on above 
      xxx- ensure everything works by testing it visually
      xxx- render and format location(s) onto page
      xxx- build out DOM update - start with ONE DOM update that matches/correlates with above
      xxx- ensure everything works by testing it visually (again)
      xxx- Render and format location(s) onto page

      xx- go back to location controller and repeat for next controller action 
      xx- From there, either continue repeating for the remaining CRUD actions until Location is fully built OR
      xx- repeat the steps from the beginning for the experience resource (again, starting with index or show and building vertically)
     


      LOCATION INFO:
      
has_many :experiences

name -- string 
description -- string
travel_season -- string






  Experience:
      x- build migration for Experience model
      x- build out model for Experience

      xx- build out Experience controller - start with ONE controller action
      xx- build out/utilize serializer as part of controller action 
      xx- build out Experience routes - start with ONE route that matches controller action built
      
      xx- build out fetch call - start with ONE that matches above
      xx- seed data based on above 
      xx- ensure everything works by testing it visually
      xx- build out DOM update - start with ONE DOM update that matches/correlates with above
      xx- ensure everything works by testing it visually (again)

      xx- go back to experience controller and repeat for next controller action 
      xx- From there, either continue repeating for the remaining CRUD actions until Experience is fully built OR
      xx- repeat the steps with the remaining Location pieces 
      


      EXPERIENCE INFO:

belongs_to :location

(location_id -- integer/?)
name -- string
description -- text
region -- string
image_url -- string 




Current To Do's:

** Styling/formatting, etc. (forms, text area, spacing, colors, fonts, etc.)

** Move some of the "render new experience" pieces into experience.js. (At least some of it likely belongs there.)

** Add DOM color change for when button/submit/delete/add experience are pointed at by mouse. (Not clicked, but mouse scroll. See prev. lab for examples.)

** Update both new forms to have text areas instead of one input line (?)

** Look at project specs and check everything. (JSON ES6 for fetch, etc.)

** Back to list above and continue from there.

** Maybe add alphabetize/sort to locations. Could maybe do this through serializer when Location.all is called?

** Delete style.js file, and where it's linked into bottom of index.html, if you're not using it. 

** Check images and make sure they're still working! (Images might expire after a week, so Thursday 01/23.) If so, grab the links further down and re-do them.

** CLEAN UP unnecessary and unused code (all js files, index.html file)

** ReadMe, blog, video, etc.


Currently:

Location - create, read, delete
Expereince - create, read 




Image addresses:

Falconry:
"https://images.unsplash.com/photo-1471959578693-a65e3d896a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

Castle:
"https://images.unsplash.com/photo-1563996588193-435bc2b7f24f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

Wine tour:
"https://images.unsplash.com/photo-1464036388609-747537735eab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

Northern lights:
"https://images.unsplash.com/photo-1542586096-69051a9526a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"



Design:
1. Update location card color and maybe experience card color (maybe work in dark green of font or grey of slideshow scroll)
2. Update New Experience form
3. Update New Location form
4. Add other design pieces similar to your website (block quotes, etc.)
5. Adjust fonts (especially main text)
6. Adjust font color (especially main text contrast with button and heading color)
7. Update main heading - maybe icons, or make an image for hold here instead? Something to spice it up.
8. Add footer at bottom and update info to hold copyright, title, etc. (Look at previous project.)



Slideshow image addresses:

Original image addresses:

https://cdn.wallpapersafari.com/72/53/kDQegb.jpg

http://4.bp.blogspot.com/-gjLlC6VkDdI/UUhvK0P16sI/AAAAAAAAjYU/lvQxbRjwsmM/s1600/Travel++HD+wallpapers+(13).jpg

https://b.kisscc0.com/20180517/vhe/kisscc0-ultra-high-definition-television-4k-resolution-des-travel-5afd944adf4c84.6317828715265680109147.jpg

(one from Momentum background)

http://2.bp.blogspot.com/-D0W02d8rpwU/UUhvMJ8AriI/AAAAAAAAjYc/s-zQHKhlrtQ/s1600/Travel++HD+wallpapers+(10).jpg


Addresses once input into pastepic:

"https://www.pastepic.xyz/images/2020/01/16/TravelHDwallpapers130700d7a5c9a5154e.jpg"

"https://www.pastepic.xyz/images/2020/01/16/kisscc0-ultra-high-definition-television-4k-resolution-des-travel-5afd944adf4c84.63178287152656801091471f2ce3efd2742bbd.jpg" 

"https://www.pastepic.xyz/images/2020/01/16/kDQegb79211a663b33ad4c.jpg" 

"https://farm4.staticflickr.com/3927/33620928972_4f03e1f608_k.jpg"

"https://www.pastepic.xyz/images/2020/01/16/TravelHDwallpapers10e035eda46eb87650.jpg"


