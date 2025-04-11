
var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');

// Create IPGeolocationAPI object. Constructor takes two parameters.
// 1) API key (Optional: To authenticate your requests through "Request Origin", you can skip it.)
// 2) Async (Optional: It is used to toggle "async" mode in the requests. By default, it is true.)
var ipgeolocationApi = new IPGeolocationAPI("79d35b2e0c84475a8c53ba70da0d82ad", false); 
// Function to handle response from IP Geolocation API
function handleResponse(json) {
    console.log(json);
}

var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');

// Get complete geolocation for the calling machine's IP address
ipgeolocationApi.getGeolocation(handleResponse);

// Get complete geolocation in Russian** for IP address (1.1.1.1)
var geolocationParams = new GeolocationParams();
geolocationParams.setIPAddress('197.210.78.39');
geolocationParams.setLang('ru');

ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

// Get custom geolocation (only "geo, time_zone and currency" fields/objects) for an IP address (1.1.1.1)
var geolocationParams = new GeolocationParams();
geolocationParams.setIPAddress('197.210.78.39'); 
geolocationParams.setFields('geo,time_zone,currency');

ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

// Exclude fields/obejects from complete geolocation in Italian language
var geolocationParams = new GeolocationParams();
geolocationParams.setExcludes('continent_name,country_code3,time_zone');
geolocationParams.setLang('it');

ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);