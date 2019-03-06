var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = { 'country': 'uk' };
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');


//  countries available for selection

 var countries = {
  'all': {
   center: { lat: 15, lng: 0 },
   zoom: 2,
  },
  'us': {
   center: { lat: 37.0902, lng: -95.7129 },
   zoom: 5
  },
  'nl': {
   center: { lat: 52.1326, lng: 5.2913 },
   zoom: 7
  },
  'uk': {
   center: { lat: 54.237933, lng: -2.36967 },
   zoom: 5
  },
  'fr': {
   center: { lat: 46.2276, lng: 2.2137 },
   zoom: 7
  }

 };

// Initialise Map

 function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
   zoom: countries['all'].zoom,
   center: countries['all'].center,
   
   zoomControl: false,
  });

  infoWindow = new google.maps.InfoWindow({
   content: document.getElementById('info-window')
  });

  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country

  autocomplete = new google.maps.places.Autocomplete(
   /** @type {!HTMLInputElement} */
   (
    document.getElementById('autocomplete')), {
    componentRestrictions: countryRestrict
   });
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);

  // Add a DOM event listener to react when the user selects a country.
  document.getElementById('country').addEventListener(
   'change', setAutocompleteCountry);
 }

 // When the user selects a city, get the place details for the city and
 // zoom the map in on the city.

 
 function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
   map.panTo(place.geometry.location);
   map.setZoom(15);
   search();
  }
  else {
   document.getElementById('autocomplete').placeholder = 'Enter a destination';
  }
 }

 // Function searches for chosen amenities within the selected location

 function search() {

  var amenity = 'lodging'; 
  clearMarkers();
  markers = [];

  if (document.getElementById("restaurant").checked) 
   amenity = 'restaurant'; 

  clearMarkers();
  markers = [];
  
  if (document.getElementById("bar").checked) 
   amenity = 'bar';

  clearMarkers();
  markers = [];
  
  if (document.getElementById("art_gallery").checked) 
   amenity = 'art_gallery';
  
  clearMarkers();
  markers = [];
  
  if (document.getElementById("shopping_mall").checked) 
   amenity = 'shopping_mall';
  
  clearMarkers();
  markers = [];

  var search = {

   bounds: map.getBounds(),
   types: [amenity]
  };

  places.nearbySearch(search, function(results, status) {
   if (status === google.maps.places.PlacesServiceStatus.OK) {
    clearResults();
    clearMarkers();

    // Create a marker for each place found, and
    // assign a letter of the alphabetic to each marker icon.

    for (var i = 0; i < results.length; i++) {
     var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
     var markerIcon = MARKER_PATH + markerLetter + '.png';
     // Use marker animation to drop the icons incrementally on the map.
     markers[i] = new google.maps.Marker({
      position: results[i].geometry.location,
      animation: google.maps.Animation.DROP,
      icon: markerIcon
     });

     // If the user clicks a place marker, show the details of that place
     // in an info window.

     markers[i].placeResult = results[i];
     google.maps.event.addListener(markers[i], 'click', showInfoWindow);
     setTimeout(dropMarker(i), i * 100);
     addResult(results[i], i);
    }
   }
  });
 }
 
// Clear out the old markers.
 function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
   if (markers[i]) {
    markers[i].setMap(null);
   }
  }
  markers = [];
 }

 // Set the country restriction based on user input.
 // Also center and zoom the map on the given country.

 function setAutocompleteCountry() {
  var country = document.getElementById('country').value;
  if (country === 'all') {
   autocomplete.setComponentRestrictions({ 'country': [] });
   map.setCenter({ lat: 15, lng: 0 });
   map.setZoom(4);
  }
  else {
   autocomplete.setComponentRestrictions({ 'country': country });
   map.setCenter(countries[country].center);
   map.setZoom(countries[country].zoom);
  }
 }

 function dropMarker(i) {
  return function() {
   markers[i].setMap(map);
  };
 }

 function addResult(result, i) {
  var results = document.getElementById('results');
  var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + markerLetter + '.png';

  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function() {
   google.maps.event.trigger(markers[i], 'click');
  };

  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
 }

 function clearResults() {
  var results = document.getElementById('results');
  while (results.childNodes[0]) {
   results.removeChild(results.childNodes[0]);
  }
 }

 // Get the place details for a place. Show the information in an info window,
 // anchored on the marker for the hotel that the user selected.

 function showInfoWindow() {
  var marker = this;
  places.getDetails({ placeId: marker.placeResult.place_id },
   function(place, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
     return;
    }
    infoWindow.open(map, marker);
    buildIWContent(place);
   });
 }

 // Load the place information into the HTML elements used by the info window.

 function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
   'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
   '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
   document.getElementById('iw-phone-row').style.display = '';
   document.getElementById('iw-phone').textContent =
    place.formatted_phone_number;
  }
  else {
   document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the place, using a black star ('&#10029;')
  // to indicate the rating the place has earned, and a white star ('&#10025;')
  // for the rating points not achieved.

  if (place.rating) {
   var ratingHtml = '';
   for (var i = 0; i < 5; i++) {
    if (place.rating < (i + 0.5)) {
     ratingHtml += '&#10025;';
    }
    else {
     ratingHtml += '&#10029;';
    }
    document.getElementById('iw-rating-row').style.display = '';
    document.getElementById('iw-rating').innerHTML = ratingHtml;
   }
  }
  else {
   document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.

  if (place.website) {
   var fullUrl = place.website;
   var website = hostnameRegexp.exec(place.website);
   if (website === null) {
    website = 'http://' + place.website + '/';
    fullUrl = website;
   }
   document.getElementById('iw-website-row').style.display = '';
   document.getElementById('iw-website').textContent = website;
  }
  else {
   document.getElementById('iw-website-row').style.display = 'none';
  }
 }

$(document).ready(function() {
    
    // Function for emptying location field when a new country is selected
    
    var autoComplete = document.querySelector("#autocomplete");
    var country = document.querySelector('#country');
    country.addEventListener('change', function(e) {
        autoComplete.value = '';
    });
        
    // Function for removing markers when another country is selected
    
    $('select[id="country"]').on('click', function(e) {
        clearMarkers();
        markers= [];
    });

    // Function for disbaling use of radio buttons when the location field is empty.
    // If length of input field > 0 enable radio buttons , if field is empty then disable
    
    $('input[type="text"]').on('input propertychange paste', function() {
        if ($('#autocomplete').val().length > 0) {
             $('input[type="radio"]').prop('disabled', false);
        }
        else {
           $('input[type="radio"]').prop('disabled', true);
        }
    });
}); 



