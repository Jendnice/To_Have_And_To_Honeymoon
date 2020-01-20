
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




Current CRUD actions:

  Location - create, read, delete
  Experience - create, read, delete




Image addresses:

Falconry:
"https://images.unsplash.com/photo-1471959578693-a65e3d896a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

Castle:
"https://images.unsplash.com/photo-1563996588193-435bc2b7f24f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

Wine tour:
"https://images.unsplash.com/photo-1464036388609-747537735eab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

Northern lights:
"https://images.unsplash.com/photo-1542586096-69051a9526a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"




Slideshow image addresses:

     Original image addresses:

https://cdn.wallpapersafari.com/72/53/kDQegb.jpg

http://4.bp.blogspot.com/-gjLlC6VkDdI/UUhvK0P16sI/AAAAAAAAjYU/lvQxbRjwsmM/s1600/Travel++HD+wallpapers+(13).jpg

https://b.kisscc0.com/20180517/vhe/kisscc0-ultra-high-definition-television-4k-resolution-des-travel-5afd944adf4c84.6317828715265680109147.jpg

(one from Momentum background)

http://2.bp.blogspot.com/-D0W02d8rpwU/UUhvMJ8AriI/AAAAAAAAjYc/s-zQHKhlrtQ/s1600/Travel++HD+wallpapers+(10).jpg


      (Old) Addresses once input into pastepic:

"https://www.pastepic.xyz/images/2020/01/16/TravelHDwallpapers130700d7a5c9a5154e.jpg"

"https://www.pastepic.xyz/images/2020/01/16/kisscc0-ultra-high-definition-television-4k-resolution-des-travel-5afd944adf4c84.63178287152656801091471f2ce3efd2742bbd.jpg" 

"https://www.pastepic.xyz/images/2020/01/16/kDQegb79211a663b33ad4c.jpg" 

"https://farm4.staticflickr.com/3927/33620928972_4f03e1f608_k.jpg"

"https://www.pastepic.xyz/images/2020/01/16/TravelHDwallpapers10e035eda46eb87650.jpg"



FINAL ADDRESSES ONCE INPUT TO PASTEPIC:

ireland castle:  "https://www.pastepic.xyz/images/2020/01/20/kDQegbb9e3a01400a4e5b7.jpg"

hammock:   "https://www.pastepic.xyz/images/2020/01/20/TravelHDwallpapers13d279ff24cb5d875e.jpg"

lighthouse:  "https://www.pastepic.xyz/images/2020/01/20/kisscc0-ultra-high-definition-television-4k-resolution-des-travel-5afd944adf4c84.631782871526568010914700b8a9793294bd6b.jpg"

(One from Momentum background - safari)

Asian village on water:  "https://www.pastepic.xyz/images/2020/01/20/TravelHDwallpapers10357a5dfae35973c7.jpg"









Future features:

** --Bonus-- Add remaining CRUD actions to both resources. (Update for both.)

** --Bonus-- Add DOM color change for when button/submit/delete/add experience are pointed at by mouse. (Not clicked, but mouse scroll. See prev. lab for examples.)

** --Bonus-- Maybe add alphabetize/sort to locations. Could maybe do this through serializer when Location.all is called?

** --Bonus-- Maybe add footer at bottom and update info to hold copyright, title, etc. (Look at previous project.)

** --Bonus-- Try and debug the adding new location. When you first add in a new one, it adds three. But after that it seems fine. ? (Maybe move clear HTML to opening function and remove elsewhere?)





CURRENT TO DO'S:

Blog: https://jendnice.github.io/my_new_vertical_world

Video: https://youtu.be/D-TKmUnU8ss


** Update notes file and move elsewhere. (Slack, Wordpad, etc.)

** Submit project

** Schedule PR review. (And crush it!) :)

  1. Additional blog due asap, as well.


Once project submitted and review scheduled:

** Prepare for project review.
    1. Review everything on project page list.
    2. Review everything Corinna told you (in mini notebook).
    3. Know every line of code - what it does and how it works. (HTML and CSS, too! Make sure you understand your slideshow pieces.) Delete notes/comments that are in CSS file afterwards if appropriate.
    4. Read article Corinna sent you (in your Slack.)
    5. If you didn't add Update to Location and/or Experience, or Delete to Experience, make sure you know how to do these!
    5. Watch ES6 video by Cernan.
    6. Watch video on post fetching. (Know what's happening here and try to figure out why "data" doesn't need to be read explicitly at end of both post fetch requests. Try Toy Tale video, Rails API, or any others.)
    6. Watch Rails API, debugging, and any others.
    7. Watch at least the 3.5 hours Udemy video. (Maybe the whole course?)
    8. Update and finalize seed data that's in there.
    9. Maybe look more into what functions should be under classes and what shouldn't.
    10. Make sure slideshow pics all set! (Check images and make sure they're still working! (Images might expire after a week, so Thursday 01/23.) If so, grab the links in this file and re-do them.)
    11. Re-review project specs and check everything. (JSON ES6 for fetch, etc.) Look at learning goals at bottom, too!
