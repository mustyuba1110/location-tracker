function initialize() {
    //initialize is a function responsible for initializing map with a default location with Lattitude and Longitude (-34.397, 150.644) respectively
    // as well as zoom level at level 8
    //google.maps is the object of the google map
    geocoder = new google.maps.Geocoder();// Geocoder is a method in google map object that is used to convert location input from a form into another form
    var latlng = new google.maps.LatLng(-34.397, 150.644); //LatLng is a method in google map object that return a location on a map based on Latitude and Longitude provided as a parameter
    var mapOptions = {// map Options is the map settings
        zoom: 8, //zoom setting
        center: latlng,// map initial location, set to provided Lattitude and Longitude
        mapTypeId: maptype,// map type setting, set by the user, can be SATELLITE,ROADMAP,TERRAIN OR HYBRID
        disableDefaultUI: true,//This setting prevent the map from displaying default google map User Interfaces
        streetViewControl: true,// This enable the map to use street View Control which allows user to view street in the map


        zoomControl: true //this allow zoom Control UI to display on the map to enable user zoom in and out from the map.
    }

    map = new google.maps.Map(document.getElementById('body'), mapOptions);//
}
var maptype;
var geocoder;
var map;
function mSatellite() {
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
}
function mTerrain() {
    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
}
function mHybrid() {
    map.setMapTypeId(google.maps.MapTypeId.HYBRID);
}
function mRoadMap() {
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
}

var address
function codeAddress() {
    var e = document.getElementById("combo").value;
    if (e == "IP ADDRESS") {
        var requestOptions = {
            method: 'GET',
        };
        var ltlng;

        var countrynames, countrynamespt, countrynamesru, countrynamescn, countrynameses, countrynamesfr, countrynamesjp, countrynamesde, countrynamesar, countryname, cityname, continent, continames, countrycapital, currency, iplat, iplng, statename, mobilecode, countryol, continentol, iso_code;
        address = document.getElementById('input').value;

        fetch("https://api.geoapify.com/v1/ipinfo?ip=" + address.toString() + "&apiKey=2aaa6125d80a4f738d79ea1c89518469", requestOptions)
            .then(response => response.json())
            .then(result => {
                ltlng = result.city["name"],
                    countrynamesar = result.country.names["fa"],
                    countrynamesde = result.country.names["de"],
                    countrynameses = result.country.names["es"],
                    countrynamesfr = result.country.names["fr"],
                    countrynamesjp = result.country.names["ja"],
                    countrynamespt = result.country.names["pt-BR"],
                    countrynamesru = result.country.names["ru"],
                    countrynamescn = result.country.names["zh-CN"],
                    countryname = result.country["name"],
                    continent = result.continent["name"],
                    countrycapital = result.country["capital"],
                    currency = result.country["currency"],
                    iso_code = result.country["iso_code"],

                    mobilecode = result.country.phone_code,
                    iplat = result.location["latitude"],
                    iplng = result.location["longitude"],
                    statename = result.state["name"]
                console.log(ltlng)
                console.log(countryname)
                console.log(iso_code)

                console.log(currency)
                console.log(continent)
                console.log(countrycapital)
                console.log(mobilecode)
                console.log(statename)
                console.log(iplat)
                console.log(iplng)
                var atype = "<label>Input Type : <b>" + e + "</b></label>";
                var countrynamel = "<label>Country : " + countryname + "</b></label>";
                var citynamel = "<label>City : <b>" + ltlng + "</b></label>";
                var continentl = "<label>Continent : <b>" + continent + "</b></label>";
                var countrycapitalL = "<label>Capital : <b>" + countrycapital + "</b></label>";
                var currencyl = "<label>Currency : <b>" + currency + "</b></label>";
                var iso_codel = "<label>Country ISO Code : " + iso_code + "</b></label>";
                var countrynamessde = "<label>Country Name in Deutch : " + countrynamesde + "</b></label>";
                var countrynamesses = "<label>Country Name in Spanish : " + countrynameses + "</b></label>";
                var countrynamessfa = "<label>Country Name in Arabic : " + countrynamesar + "</b></label>";
                var countrynamessfr = "<label>Country Name in French : " + countrynamesfr + "</b></label>";
                var countrynamessja = "<label>Country Name in Japanese : " + countrynamesjp + "</b></label>";
                var countrynamesspt = "<label>Country Name in Portuguese (Brazil) : " + countrynamespt + "</b></label>";
                var countrynamessru = "<label>Country Name in Russian : " + countrynamesru + "</b></label>";
                var countrynamesscn = "<label>Country Name in Chinese : " + countrynamescn + "</b></label>";
                var countrynames = "<label>Country Names : " + countrynames + "</b></label>";
                var ipLt = "<label>IP Latitude : " + iplat + "</b></label>";
                var ipln = "<label>IP Longitude : " + iplng + "</b></label>";
                var statel = "<label>STATE : " + statename + "</b></label>";
                var mcode = "<label>Mobile Code : " + mobilecode + "</b></label>";
                var line_break = "<br/>";

                var infoWind = "<h1 id='infowind'> LOCATION INFORMATION OF " + address + "</h1>" + line_break + atype + line_break + continentl + line_break + countrynamel + line_break + countrynamessde + line_break + countrynamesses + line_break + countrynamessfa + line_break + countrynamessfr + line_break + countrynamessja + line_break + countrynamesspt + line_break + countrynamessru + line_break + countrynamesscn + line_break + citynamel + line_break + statel + line_break + countrycapitalL + line_break + currencyl + line_break + iso_codel + line_break + ipLt + line_break + ipln + line_break + mcode;
                document.getElementById('information').innerHTML = infoWind;
                function initMap() {
                    const myLatLng = new google.maps.LatLng(iplat, iplng);
                    alert(myLatLng)
                    map = new google.maps.Map(document.getElementById("body"), {
                        zoom: 7,
                        center: myLatLng,
                        streetViewControl: true,
                        disableDefaultUI: true
                    });


                    new google.maps.Marker({
                        position: myLatLng,
                        map,
                        title: "Hello World!",
                    });
                }

                initMap();
            }
            ).catch(error => console.log('error', error));












    } else if (e == "PHYSICAL LOCATION") {

        var requestOptions = {
            method: 'GET',
        };
        address = document.getElementById('input').value;


        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                var line_break = "<br/>";
                var formated_Address = "<label>Location Address : " + results[0].formatted_address;
                var atype = "<label>Input Type : <b>" + e + "</b></label>";
                var infoWind = "<h1 id='infowind'> LOCATION INFORMATION OF " + address + "</h1>" + line_break + atype + line_break + formated_Address;
                document.getElementById("information").innerHTML = infoWind;
                map.setCenter(results[0].geometry.location);

                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location

                });
            } else {
                alert('Geocode was not successful for the following reason: ', error);
            }
        });
    } else {
        alert("Please Select your input type")
    }
}

///LOCATION FINDER END
var watchId;
function fMyLocation() {



    function LocMe(mLatLng) {



        var latlng = new google.maps.LatLng(mLatLng.coords.latitude, mLatLng.coords.longitude);
        var mapOptions = {
            zoom: 17,
            center: latlng,
            mapTypeId: maptype,
            disableDefaultUI: true,
            streetViewControl: true
        }

        map = new google.maps.Map(document.getElementById('body'), mapOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: latlng

        });
        navigator.geolocation.clearWatch(watchId);
    }




    if (navigator.geolocation) {
        function error(err) {
            console.error(`ERROR(${err.code}): ${err.message}`);
        }


        options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        };

        watchId = navigator.geolocation.watchPosition(LocMe, error, options);


    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}





