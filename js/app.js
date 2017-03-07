/*Author: Unnar Thor Bachmann */
/* Global variables*/

var locationArmuli =  {lat: 64.13772190862436, lng: -21.883628365877712};
var map;

/* Global variables*/
  
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    center: locationArmuli,
    zoom: 	18
  });
	var nordurCoords = [
        {lat: 64.137908, lng: -21.883843},
        {lat: 64.1380935, lng: -21.8833555},
        {lat: 64.13801255, lng: -21.883196184},
        {lat: 64.1378260, lng: -21.8836622},
        {lat: 64.1378260, lng: -21.8836622},
    ];

        var norduralma = new google.maps.Polygon({
          paths: nordurCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        norduralma.setMap(map);
}
  
 
  
  
  