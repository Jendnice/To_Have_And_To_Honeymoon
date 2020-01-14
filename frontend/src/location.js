
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

  }
