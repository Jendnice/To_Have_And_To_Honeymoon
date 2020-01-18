function getExperiences() {
    fetch('http://[::1]:3000/experiences')
    .then(resp => resp.json())
    .then(json => {
        eachExperience(json)
    })
}


function eachExperience(json) {
    let experiencesData = json["data"]
    experiencesData.forEach( experience => {
        const id = experience.id 
        const location_id = experience.relationships.location.data.id
        const { name, description, region, image_url } = experience.attributes
        new Experience(id, location_id, name, description, region, image_url)
    })
}




class Experience {
  constructor(id, location_id, name, description, region, image_url){
    this.id = id
    this.location_id = location_id
    this.name = name
    this.description = description
    this.region = region 
    this.image_url = image_url 
    this.renderExperience()
  }
  
    // delete(e){
    //     const id = e.target.dataset.id

    //     fetch(`http://[::1]:3000/experiences/${id}`,{
    //         method: "DELETE",
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(()=>{
    //         e.target.parentElement.remove()
    //     })
    // }
  
  renderExperience(){
    
    const experienceContainer = document.getElementById(`${this.location_id}`)
    const experienceCard = document.createElement('div')

    experienceCard.classList.add('experience-card')
    experienceCard.classList.add("column")
    experienceCard.id = this.id
    experienceCard.innerHTML = `
        <h3>${this.name}</h2>
        <p>Description: ${this.description}</p>
        <p>Region: ${this.region}</p>
        <img src="${this.image_url}" class="image-url"/>

         `

        // Add button line below to above as the last line before back tick closure:
        // <button data-id="${this.id}" class="delete">Delete</button>

    experienceContainer.appendChild(experienceCard)
    
    //   experienceCard.addEventListener('click', e => {
    //       if (e.target.className === 'delete') this.delete(e)
    //   })

  }


    
  static renderNewExperienceForm(locationCard, current) {
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

    Experience.addListenersToNewForm()
  }

  
  static addListenersToNewForm() {
    const newExperienceForm = document.querySelector('.add-experience-form')

    newExperienceForm.addEventListener("submit", function(event){
    event.preventDefault()
      if (!this.experience_name.value) {
        Location.clearLocationsHtml()
        getLocations()
        Location.newLocationForm()
      } else {
          let newExperienceInfo = this 
          Experience.renderNewExperienceInfo(newExperienceInfo)
        } 
    })

    newExperienceForm.addEventListener('click', e => {
      if (e.target.className === 'back') {

      console.log('this is back')
      // remove above console log when done 
      }
    })
  } 


  static renderNewExperienceInfo(newExperienceInfo) {

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
          // console.log(data)

        // remove above console log when done 
      })
  }
 

}

