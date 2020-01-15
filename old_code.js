//      FROM location.js


const locationFormFields = `
    <label><strong>Name: </strong></label><br/>
    <input type="text" id="name"><br/>
    <input type="hidden" id="locationId">
    <label>Description:   </label><br/>
    <input type="text" id="description"><br/>  
    <label>Travel Season:   </label><br/>
    <input type="text" id="travel_season"><br/>` 
    





function getLocations() {
    fetch('http://[::1]:3000/locations')
    .then(resp => resp.json())
    .then(json => {
        eachLocation(json)
    })
}


    //     .then(locationsData => {
    //         renderLocationsHtml(locationsData)
    //         addLocationsClickListeners()
    //         addEventsClickListeners()
    //     })


function eachLocation(json) {
    let locationsData = json["data"] 

        locationsData.forEach( location => {
                    const { id, name, description, travel_season } = location.attributes
                    new Location(id, name, description, travel_season)
                })
    }




// function addLocation(element) {
//     // const locationID = parseInt(element.getAttribute('data-location-id'), 10)

//     // debugger 

//     const configObj = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//         body: JSON.stringify({ id: locationID })
//         }
//         fetch('http://[::1]:3000/location', configObj)
//         .then(resp => resp.json())
//         .then(json => renderNewLocation(json, element))
//         .catch(error => alert(error.message))
// }
    
      
// function renderNewLocation(json, element) {

//     const formattedLocation = formatLocationData(json)
//         // const locationListItem = createLocationListItem(formattedLocation)
//         // element.nextSibling.appendChild(locationListItem)
//     element.appendChild(formattedLocation)
// }
      
      
// function formatLocationData(json) {
      
//     const data = json["data"]
//     const newLocation = {
//     id: data["id"],
//     name: data["attributes"]["name"],
//     description: data["attributes"]["description"],
//     travel_season: data["attributes"]["travel_season"]
//     }
      
//     return newLocation
// }
    



function addLocation() {
    const location = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        travel_season: document.getElementById('travel_season').value,
    }


    fetch("http://[::1]:3000/location", {
        method: 'POST',
        body: JSON.stringify(location),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json() )
    .then(location => {
         clearLocationsHtml()
         getLocations()
         newLocationForm()
      });

    
}


function clearLocationsHtml() {
    let locationsIndex = document.getElementById("locations-list")
    locationsIndex.innerHTML = ''
}
    
    
      
    
    
    
      




class Location {
    constructor(id, name, description, travel_season){
        this.id = id
        this.name = name
        this.description = description
        this.travel_season = travel_season 
        this.renderLocation()
    }
  
    delete(e){
        const id = e.target.dataset.id
        fetch(`http://[::1]:3000/locations/${id}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            e.target.parentElement.remove()
        })
    }
  
    renderLocation(){
      const locationContainer = document.getElementById('location-container')
      const locationCard = document.createElement('div')
  
      locationCard.classList.add('location-card')
      locationCard.id = this.id
      locationCard.innerHTML = `
          <h2>${this.name}</h2>
          <p>Description: ${this.description}</p>
          <p>Travel Season: ${this.travel_season}</p>
          <button data-id="${this.id}" class="delete">Delete</button>
      `
      locationContainer.appendChild(locationCard)
      locationCard.addEventListener('click', e => {
          if (e.target.className === 'delete') this.delete(e)
      })
  
    }



    static newLocationForm() {
        let newLocationFormDiv = document.getElementById('location-form')
        newLocationFormDiv.innerHTML = `
        <form onsubmit="addLocation(); return false;">` + 
        locationFormFields + 
        `<input type="submit" value="Add New Location" style="color:white;background-color:green">
        </form>
        <br/>`
    }




  }









//   function addLocation(element) {
//     const locationID = parseInt(element.getAttribute('data-location-id'), 10)
  
//     const configObj = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({ id: locationID })
//     }
//     fetch('http://[::1]:3000/location', configObj)
//     .then(resp => resp.json())
//     .then(json => renderNewLocation(json, element))
//     .catch(error => alert(error.message))
//   }

  
//   function renderNewLocation(json, element) {
//     const formattedLocation = formatLocationData(json)
//     // const locationListItem = createLocationListItem(formattedLocation)
//     // element.nextSibling.appendChild(locationListItem)
//     element.appendChild(formattedLocation)
//   }
  
  
//   function formatLocationData(json) {
  
//     const data = json["data"]
//     const newLocation = {
//       id: data["id"],
//       name: data["attributes"]["name"],
//       description: data["attributes"]["description"],
//       travel_season: data["attributes"]["travel_season"]
//     }
  
//     return newLocation
//   }









// static newLocationForm() {
//     let newLocationFormDiv = document.getElementById('location-form')
//     newLocationFormDiv.innerHTML = `
//     <form onsubmit="addLocation(); return false;">` + 
//     locationFormFields + 
//     `<input type="submit" value="Add New Location" style="color:white;background-color:green">
//     </form>
//     <br/>`
// }



// function addLocation() {
//     const location = {
//         name: document.getElementById('name').value,
//         description: document.getElementById('description').value,
//         travel_season: document.getElementById('travel_season').value,
//     }


//     fetch("http://[::1]:3000/location", {
//         method: 'POST',
//         body: JSON.stringify(location),
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//     })
//     .then(resp => resp.json() )
//     .then(location => {
//          clearLocationsHtml()
//          getLocations()
//          newLocationForm()
//       });
    
// }


// function clearLocationsHtml() {
//     let locationsIndex = document.getElementById("locations-list")
//     locationsIndex.innerHTML = ''
// }







// -------------------------------------------------------------------------------







//            FROM index.js:


console.log("test now")

// const BACKEND_URL = 'http://[::1]:3000/';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

document.addEventListener("DOMContentLoaded", () => {
    getLocations()
    Location.newLocationForm()
    // Location.newLocationForm()

    document.getElementById('location-form').addEventListener('click', function(event) {
        if (event.target.type == "submit") {
            debugger 
            console.log(event.target)
            // addLocation(event.target)
        }
    })

})









// From console:

        event.target.parentElement.name.value
        "test"
        event.target.parentElement.description.value
        "test"
        event.target.parentElement.travel_season.value
        "test"
        event.target.parentElement.id
        "location-form"




// addLocation(event.target.parentElement)


function addLocation(element) {
    // const locationID = parseInt(element.getAttribute('data-location-id'), 10)

    // debugger 

    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        body: JSON.stringify({ id: locationID })
        }
        fetch('http://[::1]:3000/location', configObj)
        .then(resp => resp.json())
        .then(json => renderNewLocation(json, element))
        .catch(error => alert(error.message))
}
    
      
function renderNewLocation(json, element) {

    const formattedLocation = formatLocationData(json)
        // const locationListItem = createLocationListItem(formattedLocation)
        // element.nextSibling.appendChild(locationListItem)
    element.appendChild(formattedLocation)
}
      
      
function formatLocationData(json) {
      
    const data = json["data"]
    const newLocation = {
    id: data["id"],
    name: data["attributes"]["name"],
    description: data["attributes"]["description"],
    travel_season: data["attributes"]["travel_season"]
    }
      
    return newLocation
}














<div id="form">
          <h3>New Experience</h3>
          <form id="experience-form-${this.id}" class="add-experience-form">
            <input type="text" name="name" placeholder="name"/>
            <br/>
            <input type="text" name="description" placeholder="description"/>
            <br/>
            <input type="text" name="region" placeholder="region"/>
            <br/>
            <input type="text" name="image_url" placeholder="image url"/>
            <br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
    



    locationContainer.addEventListener('submit', event => {
        if (event.target.className === 'add-experience-form')

          console.log(this)
         debugger 

        Experience.newExperienceForm() 
    })










    const id = e.target.dataset.id
    // let locationId = id 

    const newExperienceForm = document.querySelector('.add-experience-form');
    

// locationCard.addEventListener('click', e => {
//   if (e.target.className === 'delete') {
//   this.delete(e)
//   } else {
//     //   maybe render function for below here to help break it up
//      if (e.target.className === 'add-experience-btn') {


    newExperienceForm.addEventListener("submit", function(event){
    event.preventDefault()


    let nameInput = this.experience_name.value 
    let descriptionInput = this.experience_description.value 
    let regionInput = this.experience_region.value
    let imageUrlInput = this.experience_image_url.value
    let experienceLocationId = this.experience_locationId.value
   
    fetch("http://[::1]:3000/experiences", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${nameInput}`,
        description: `${descriptionInput}`,
        region: `${regionInput}`,
        image_url: `${imageUrlInput}`,
        location_id: `${experienceLocationId}`
      })
    }).then(resp => resp.json())
      .then(data => {

        console.log(data)
        // clearLocationsHtml()
        // getLocations()
        // Location.newLocationForm()
     });
  })

  newExperienceForm.addEventListener('click', e => {
    if (e.target.className === 'back') {
    console.log('this is back')
    }
  })

  }

 }
}
)

}









            
const id = e.target.dataset.id
// let locationId = id 

const newExperienceForm = document.querySelector('.add-experience-form');


// locationCard.addEventListener('click', e => {
//   if (e.target.className === 'delete') {
//   this.delete(e)
//   } else {
//     //   maybe render function for below here to help break it up
//      if (e.target.className === 'add-experience-btn') {


newExperienceForm.addEventListener("click", event => {

  if (event.target.className === 'submit')  {

     event.preventDefault()

     debugger 

let nameInput = this.experience_name.value 
let descriptionInput = this.experience_description.value 
let regionInput = this.experience_region.value
let imageUrlInput = this.experience_image_url.value
let experienceLocationId = this.experience_locationId.value

fetch("http://[::1]:3000/experiences", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: `${nameInput}`,
    description: `${descriptionInput}`,
    region: `${regionInput}`,
    image_url: `${imageUrlInput}`,
    location_id: `${experienceLocationId}`
  })
}).then(resp => resp.json())
  .then(data => {

    console.log(data)
    // clearLocationsHtml()
    // getLocations()
    // Location.newLocationForm()
 });
//   } else {
//     if (event.targetClassName === 'back') {
//       console.log('this is back')
//     }
}
})


}

}
}
)

}

