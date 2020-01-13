
function getLocations() {
    fetch('http://[::1]:3000/locations')
    .then(resp => resp.json())
    .then(locationsData => {
        console.log(locationsData)
    })
}
    
    
    //     .then(locationsData => {
    //         renderLocationsHtml(locationsData)
    //         addLocationsClickListeners()
    //         addEventsClickListeners()
    //     })

    
    
// fetch('http://[::1]:3000/locations')
// .then(resp => resp.json())
// .then(locations => {
//     locations.forEach( location => {
//         const { id, name, description, travel_season } = location
//         new location(id, name, description, travel_season)
//     })
// })