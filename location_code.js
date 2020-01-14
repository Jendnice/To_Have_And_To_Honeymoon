
function getLocations() {
    fetch('http://[::1]:3000/locations')
    .then(resp => resp.json())
    .then(json => {
        eachLocation(json)
        getExperiences()
        // Experience.newExperienceForm()
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
                    const id = location.id 
                    const { name, description, travel_season } = location.attributes
                    new Location(id, name, description, travel_season)
            })
    }




function clearLocationsHtml() {
    let locationsIndex = document.getElementById("location-container")
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
         });
      })
      }


}