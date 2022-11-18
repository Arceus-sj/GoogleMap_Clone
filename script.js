mapboxgl.accessToken = 'pk.eyJ1IjoieGlwaGVyN2FuYSIsImEiOiJjbGEwMDN2Z3QwMHN1M3V0MTh4d2J4cnBjIn0.Z2gHs2x5hgpRfyR66lTUkg';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})


function successLocation (position) {
    // console.log(position);

    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([77.069710], [28.679079]);
}

function setupMap (center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14,
    });   
    
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        // unit: 'metric',
        // profile: 'mapbox/cycling'
    });

    map.addControl(directions, 'top-left');

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
}

