// GetCap function is trigerred on click of Submit button in the DOM
function GetCap() {

    // Assign DOM elements to variables
    var stateName = document.getElementById("stateName").value;
    var cityName = document.getElementById("cityName");

    // Initializing http request object
    var http = new XMLHttpRequest();

    // Specifying the request 
    http.open('GET', 'https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json', true);

    // Sending the request 
    http.send();

    // Tracking changes in readyState property to know status of request and response
    http.onreadystatechange = function() {

        // If request is succesfully send and response is received
        if(http.readyState==4 && http.status==200) {

            //Fetch  response text, parse it using JSON and store resulting array of objects in "data" variable
            var data = JSON.parse(http.responseText);

            // For each object in  array check whether the state name is equal to the name typed in input 
            // text-box and add them to cities string
            var cities="";
            for(var i=0; i<data.length; i++) {
                if(data[i].state==stateName) {
                    cities+=data[i].name+' ';
                }
            }
            
            // Display cities in cityName
            cityName.innerHTML=cities;
        }
    }
}
