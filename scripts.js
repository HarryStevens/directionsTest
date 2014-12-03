var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var windowWidth;

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var newYork = new google.maps.LatLng(40.6974881, -73.979681);
	var mapOptions = {
		zoom : 10,
		center : newYork,
		disableDefaultUI: true,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.TOP_RIGHT
		}
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById("directions-panel"));
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
	
	
	$(window).resize(function(){
		windowWidth = $(window).width();
		console.log("Window Width = "+windowWidth);
		if(windowWidth<810){
			$("#panel").css(
				{
					"width":"125px",
				}
			);
			$(".panel-label").css(
				{
					"display":"block",
					"margin-bottom":"4px"
				}
			);
		}else{
			$("#panel").css(
				{
					"width":"323px"
				}
			);
			$(".panel-label").css(
				{
					"display":"inline",
					"margin-bottom":"0px"
				}
			);
		}
	});
	
	$(window).load(function(){
		windowWidth = $(window).width();
		console.log("Window Width = "+windowWidth);
		if(windowWidth<810){
			$("#panel").css(
				{
					"width":"125px",
				}
			);
			$(".panel-label").css(
				{
					"display":"block",
					"margin-bottom":"4px"
				}
			);
		}else{
			$("#panel").css(
				{
					"width":"323px"
				}
			);
			$(".panel-label").css(
				{
					"display":"inline",
					"margin-bottom":"0px"
				}
			);
		}
	});
	

});
