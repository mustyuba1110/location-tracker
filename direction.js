function InitMap() {
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom: 7,
    center: chicago,
    streetViewControl: true,
    disableDefaultUI: true
  }
  var map = new google.maps.Map(document.getElementById('body'), mapOptions);
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
}
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
function calcRoute() {
  var e = document.getElementById("combo2").value;
  if (e == "IP ADDRESS") {
    var requestOptions = {
      method: 'GET',
    };
    document.getElementById("information").innerHTML = "";
    document.getElementById("input2").placeholder = "Enter IP Address here"
    var ltlng;
    address = document.getElementById('input2').value;
    fetch("https://api.geoapify.com/v1/ipinfo?ip=" + address.toString() + "&apiKey=2aaa6125d80a4f738d79ea1c89518469", requestOptions)
      .then(response => response.json())
      .then(result => {
        ltlng = result.city.name;
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        var start = ltlng;
        var end = document.getElementById("input3").value;
        const selectedTravelmode = document.getElementById("TravelMode").value;
        var request = {
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode[selectedTravelmode]
        };
        var mapOptions = {
          zoom: 7,
          streetViewControl: true,
          disableDefaultUI: true
        }
        directionsService.route(request, function (response, status) {
          if (status == 'OK') {
            directionsRenderer.setDirections(response);
            map = new google.maps.Map(document.getElementById('body'), mapOptions);
            directionsRenderer.setMap(map);
            directionsRenderer.setPanel(document.getElementById('information'));
          }
        });
        document.getElementById("TravelMode").addEventListener("change", () => {
          var requestOptions = {
            method: 'GET',
          };
          if (document.getElementById("TravelMode").value == "DRIVING") {
            document.getElementById("TransitMode").style.display = "none";
            document.getElementById("FELE").style.display = "inline";
          } else if (document.getElementById("TravelMode").value == "WALKING") {
            document.getElementById("TransitMode").style.display = "none";
            document.getElementById("FELE").style.display = "none";
          } else if (document.getElementById("TravelMode").value == "TRANSIT") {
            document.getElementById("TransitMode").style.display = "inline";
            document.getElementById("FELE").style.display = "inline";
          }
          document.getElementById("information").innerHTML = "";
          document.getElementById("input2").placeholder = "Enter IP Address here"
          var ltlng;
          address = document.getElementById('input2').value;
          fetch("https://api.geoapify.com/v1/ipinfo?ip=" + address.toString() + "&apiKey=2aaa6125d80a4f738d79ea1c89518469", requestOptions)
            .then(response => response.json())
            .then(result => {
              ltlng = result.city.name;
              var directionsService = new google.maps.DirectionsService();
              var directionsRenderer = new google.maps.DirectionsRenderer();
              var start = ltlng;
              var end = document.getElementById("input3").value;
              const selectedTravelmode = document.getElementById("TravelMode").value;
              const selectedTransmode = document.getElementById("TransitMode").value;
              const selectedTraffmodel = document.getElementById("OP").value;
              const selectedTransPreference = document.getElementById("FELE").value;
              var request = {
                origin: start,
                destination: end,
                travelMode: selectedTravelmode,
                transitOptions: {
                  modes: selectedTransmode,
                  routingPreference: selectedTransPreference
                },
                drivingOptions: {
                  trafficModel: selectedTraffmodel
                }
              };
              var mapOptions = {
                zoom: 7,
                streetViewControl: true,
                disableDefaultUI: true
              }
              directionsService.route(request, function (response, status) {
                if (status == 'OK') {
                  directionsRenderer.setDirections(response);
                  map = new google.maps.Map(document.getElementById('body'), mapOptions);
                  directionsRenderer.setMap(map);
                  directionsRenderer.setPanel(document.getElementById('information'));
                }
              });
            });
        });
      }
      ).catch(error => console.log('error', error));
  } else {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var start = document.getElementById("input2").value;
    var end = document.getElementById("input3").value;
    const selectedTravelmode = document.getElementById("TravelMode").value;
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode[selectedTravelmode]
    };
    var mapOptions = {
      zoom: 7,
      streetViewControl: true,
      disableDefaultUI: true
    }
    directionsService.route(request, function (response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
        map = new google.maps.Map(document.getElementById('body'), mapOptions);
        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(document.getElementById('information'));
      }
    });
    document.getElementById("TravelMode").addEventListener("change", () => {
      var requestOptions = {
        method: 'GET',
      };
      if (document.getElementById("TravelMode").value == "DRIVING") {
        document.getElementById("TransitMode").style.display = "none";
        document.getElementById("FELE").style.display = "inline";
      } else if (document.getElementById("TravelMode").value == "WALKING") {
        document.getElementById("TransitMode").style.display = "none";
        document.getElementById("FELE").style.display = "none";
      } else if (document.getElementById("TravelMode").value == "TRANSIT") {
        document.getElementById("TransitMode").style.display = "inline";
        document.getElementById("FELE").style.display = "inline";
      }
      document.getElementById("information").innerHTML = "";
      document.getElementById("input2").placeholder = "Enter IP Address here"
      var ltlng;
      address = document.getElementById('input2').value;
      var directionsService = new google.maps.DirectionsService();
      var directionsRenderer = new google.maps.DirectionsRenderer();
      var start = ltlng;
      var end = document.getElementById("input3").value;
      const selectedTravelmode = document.getElementById("TravelMode").value;
      const selectedTransmode = document.getElementById("TransitMode").value;
      const selectedTraffmodel = document.getElementById("OP").value;
      const selectedTransPreference = document.getElementById("FELE").value;
      var request = {
        origin: start,
        destination: end,
        travelMode: selectedTravelmode,
        transitOptions: {
          modes: selectedTransmode,
          routingPreference: selectedTransPreference
        },
        drivingOptions: {
          trafficModel: selectedTraffmodel
        }
      };
      var mapOptions = {
        zoom: 7,
        streetViewControl: true,
        disableDefaultUI: true
      }
      directionsService.route(request, function (response, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(response);
          map = new google.maps.Map(document.getElementById('body'), mapOptions);
          directionsRenderer.setMap(map);
          directionsRenderer.setPanel(document.getElementById('information'));
        }
      });
    });
  }
}
var watchId;
function Dirme() {
  function DirectMe(mLatLng) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var end = document.getElementById("input2").value;
    var mlat = mLatLng.coords.latitude;
    var mlong = mLatLng.coords.longitude;
    var request = {
      origin: new google.maps.LatLng(mLatLng.coords.latitude, mLatLng.coords.longitude),
      destination: end,
      travelMode: 'DRIVING'
    };
    var mapOptions = {
      zoom: 7,
      streetViewControl: true,
      disableDefaultUI: true
    }
    directionsService.route(request, function (response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
        map = new google.maps.Map(document.getElementById('body'), mapOptions);
        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(document.getElementById('information'));
      }
      clearMyWatch();
    });
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
    watchId = navigator.geolocation.watchPosition(DirectMe, error, options);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function clearMyWatch() {
  navigator.geolocation.clearWatch(watchId);
}







