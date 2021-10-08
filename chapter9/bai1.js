var positions;
var lati;
var longi;
if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(success,error)
}
function success(pos){
    console.log("success");
    console.log(pos);
    positions = pos;
}

function error(e){
    console.error("Error load position!");
}
var taixe = [
    {
        name: "Vị trí hiện tại",
        address: "myposition",
        posi: {
            lat :16.0790991,
            lng :108.178457
        }
    },
    {
        name: "A",
        address: "A",
        posi: {
            lat :16.0790991,
            lng :108.155427
        }
    },
    {
        name: "B",
        address: "B",
        posi:{
            lat :16.0790771,
            lng :108.195427
        }
    },
    {
        name: "C",
        address: "C",
        posi:{
            lat :16.0790991,
            lng :108.588457
        }
    }
];
var taixe5km = [];

$(document).ready(function(){
    console.log(lati = positions.coords.latitude);
    console.log(longi = positions.coords.longitude);

    for(let i = 0; i<taixe.length;i++){
        var distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(taixe[i].posi.lat, taixe[i].posi.lng), new google.maps.LatLng(lati, longi));
        if(distance < 5000){
            taixe5km.push(taixe[i]);
            console.log("distance: "+ distance);
        }
    }
    init(lati,longi,'map');
    init(lati,longi,'taixe5km',taixe5km);
});
function init(a,b,display, markerr) {
    const uluru = {lat: a ,lng: b };
    var map = new google.maps.Map(document.getElementById(display), {
    zoom: 14,
    center: uluru,
    });
    var marker,i;
    if(markerr){
        for(i = 0; i<markerr.length ;i++){
            var latt = (markerr[i].posi.lat);
            var long = (markerr[i].posi.lng);
            var posi1 = {lat: latt, lng: long};
            marker = new google.maps.Marker({
                position: posi1,
                map: map,
            })
        }
    }
    else{
        marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    }
}
