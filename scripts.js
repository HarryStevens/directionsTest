var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var newYork = new google.maps.LatLng(40.6974881, -73.979681);
	var mapOptions = {
		zoom : 10,
		center : newYork
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById("directionsPanel"));
}

function calcRoute() {
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	var request = {
		origin : start,
		destination : end,
		travelMode : google.maps.TravelMode.BICYCLING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}


$(document).ready(function() {
	initialize();
});
