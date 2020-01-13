console.log("test now")

// const BACKEND_URL = 'http://[::1]:3000/';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));


fetch('http://localhost:3000/locations')
.then(resp => resp.json())
.then(locations => {
    locations.forEach( location => {
        console.log(location)
    })
})


// fetch('http://localhost:3000/locations')
// .then(resp => resp.json())
// .then(locations => {
//     locations.forEach( location => {
//         const { id, name, description, travel_season } = location
//         new location(id, name, description, travel_season)
//     })
// })

 