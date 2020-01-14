// In Locations:

//   function renderLocationsHTML(data) {
//      ...
//      appendChild(newLocation.addEventButton())
//   }

//     ----->

//   Location.prototype.addEventButton = function() {
//    ...
//   }





// In Events:

// function addEventsClickListeners() {
//     ...
//     ...adds event listener to ('click', renderNewEventForm)
//     ...
// }

// -------->

// function renderNewEventForm() {
//     ...
//     ... = renderEventFormFields(dogID)
// }

// -------->

// function renderEventFormFields(dogID){
//     ... 
// }










function renderEventFormFields(location_id) {
    return `<label><strong>Title: </strong></label><br/>
    <input type="text" id="experience_name"><br/>
    <input type="hidden" id="experience_location_id" value="${location_id}">
    <label><strong>Description:   </strong></label><br/>
    <input type="text" id="experience_"><br/>  
    <input type="submit" value="Submit" style="color:white;background-color:orange">
    `  
}


 // let eventsHtml = this.parentElement
 let eventForm = document.createElement('form')
 // eventForm.setAttribute("onsubmit", "addEvent(); return false;")
 eventForm.innerHTML = renderEventFormFields(this.location_id)
 // eventsHtml.appendChild(eventForm)

 experienceContainer.appendChild(eventForm)