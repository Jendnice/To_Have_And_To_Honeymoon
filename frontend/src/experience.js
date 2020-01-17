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


}

