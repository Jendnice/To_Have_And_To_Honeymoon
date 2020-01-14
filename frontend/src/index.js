console.log("test now")

// const BACKEND_URL = 'http://[::1]:3000/';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

document.addEventListener("DOMContentLoaded", () => {
    getLocations()
    // Location.newLocationForm()

    document.getElementById('location-form').addEventListener('click', function(event) {

       
        if (event.target.type == "submit") {
    
            debugger 

            // addLocation(event.target.parentElement)
        }
    })

})




