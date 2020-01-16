
function getExperiences() {
    fetch('http://[::1]:3000/experiences')
    .then(resp => resp.json())
    .then(json => {
        eachExperience(json)
    })
}

 
    //     .then(experiencesData => {
    //         renderexperiencesHtml(experiencesData)
    //         addexperiencesClickListeners()
    //         addEventsClickListeners()
    //     })


function eachExperience(json) {

    let experiencesData = json["data"]

        experiencesData.forEach( experience => {
                    const id = experience.id 
                    const location_id = experience.relationships.location.data.id
                    const { name, description, region, image_url } = experience.attributes
                    new Experience(id, location_id, name, description, region, image_url)
            })
    }


// function clearExperiencesHtml() {

//     // debugger 

//     let experiencesIndex = document.getElementById(`${this.location_id}`)
//     experiencesIndex.innerHTML = ''
// }




function getNewExperience() {     
    const experience = {
        name: document.getElementById('experience_name').value,
        location_id: document.getElementById('experience_locationId').value,
        description: document.getElementById('experience_description').value,
        region: document.getElementById('experience_region').value,
        image_url: document.getElementById('experience_image_url').value
    }

    fetch("http://[::1]:3000/experiences", {
        method: 'POST',
        body: JSON.stringify(event),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json())
    .then(experience => {

         eachExperience(json)
         clearLocationsHtml()
         getLocations()
         Location.newLocationForm()
      });
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


    

}




// this:
//     Experience {id: "1", location_id: "1", name: "Falconry", description: "birds", region: "West Ireland", …}
//     id: "1"
//     location_id: "1"
//     name: "Falconry"
//     description: "birds"
//     region: "West Ireland"
//     image_url: "www.image.com"

// Examples:
//     this.id
//     "1"
//     this.location_id
//     "1"
//     this.name
//     "Falconry"



    // experience.attributes:
    //     name
    //     description
    //     region
    //     image_url 

    // experience.id = id
    // experience.relationships.location.data.id = location_id
