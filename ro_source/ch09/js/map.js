//

window.onload = init;

function init() {
    
    var map = document.getElementById("map");
    map.onmousemove = showCoords;
}

function showCoords(eventObj) {
    
    var coords = document.getElementById("coords");
    var x = eventObj.clientX - 40;
    var y = eventObj.clientY - 40;
    coords.innerHTML = "Map coordinates: " + x + ", " + y;
}
