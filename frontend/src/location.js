function getLocations() {
  fetch('http://[::1]:3000/locations')
  .then(resp => resp.json())
  .then(json => {
      eachLocation(json)
      getExperiences()
  })
} 


function eachLocation(json) {

  let locationsData = json["data"] 

      locationsData.forEach( location => {
                  const id = location.id 
                  const { name, description, travel_season } = location.attributes
                  new Location(id, name, description, travel_season)
      })
}


function clearLocationsHtml() {
  let locationsIndex = document.getElementById("location-container")
  locationsIndex.innerHTML = ''
}


function renderNewExperienceForm(locationCard, current) {
  locationCard.innerHTML = `
    <h2>${current.name}</h2>
    <p>Description: ${current.description}</p>
    <p>Travel Season: ${current.travel_season}</p>
    <button data-id="${current.id}" class="delete">Delete</button>
            
      <form class="add-experience-form">
      <label>Name: </label><br/>
      <input type="text" id="experience_name"><br/>
      <input type="hidden" id="experience_locationId" value="${current.id}">
      <label>Description:   </label><br/>
      <input type="text" id="experience_description"><br/> 
      <label>Region:   </label><br/>
      <input type="text" id="experience_region"><br/>  
      <label>Image:   </label><br/>
      <input type="text" id="experience_image_url"><br/>  
      <input type="submit" class="submit" value="Submit">
      <button data-id="back" class="back" >Back</button>
      </form>`


  const newExperienceForm = document.querySelector('.add-experience-form')      
  newExperienceForm.addEventListener("submit", function(event){
  event.preventDefault()
    if (!this.experience_name.value) {
      clearLocationsHtml()
      getLocations()
      Location.newLocationForm()
    } else {
        let newExperienceInfo = this 
        renderNewExperienceInfo(newExperienceInfo)
      }
    })

  newExperienceForm.addEventListener('click', e => {
      if (e.target.className === 'back') {

      console.log('this is back')
      // remove above console log when done 
      }
    })

  }


  function renderNewExperienceInfo(newExperienceInfo) {

    let nameInput = newExperienceInfo.experience_name.value 
    let descriptionInput = newExperienceInfo.experience_description.value 
    let regionInput = newExperienceInfo.experience_region.value
    let imageUrlInput = newExperienceInfo.experience_image_url.value
    let experienceLocationId = newExperienceInfo.experience_locationId.value
           
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

        // remove above console log when done 
      })
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
      <button data-id="${this.id}" class="add-experience-btn">Add Experience</button>
      `
    locationContainer.appendChild(locationCard)
    locationCard.addEventListener('click', e => {
      if (e.target.className === 'delete') {
      this.delete(e)
      } else {
         if (e.target.className === 'add-experience-btn') {
              let current = this 
              renderNewExperienceForm(locationCard, current)
            }
        }
    }) 
  }


  static newLocationForm(){
      const newLocationForm = document.querySelector('.add-location-form');
      newLocationForm.addEventListener("submit", function(event){
      event.preventDefault()

      let nameInput = this.name.value 
      let descriptionInput = this.description.value 
      let travel_seasonInput = this.travel_season.value 
     
      fetch("http://[::1]:3000/locations", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${nameInput}`,
          description: `${descriptionInput}`,
          travel_season: `${travel_seasonInput}`
        })
      }).then(resp => resp.json())
        .then(data => {
          clearLocationsHtml()
          getLocations()
          Location.newLocationForm()
       })
    })
  }



}