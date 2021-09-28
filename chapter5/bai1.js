var a = new Date();
var h1 = (a.getHours()-a.getHours()%10)/10;
var h2 = a.getHours()%10;
console.log(h1);
switch(h1){
    case 0:{
        document.getElementsByClassName("h4")[0].style.display = "none";
        break;
    }
    case 2:{
        document.getElementsByClassName("h1")[0].style.display = "none";
        document.getElementsByClassName("h7")[0].style.display = "none";
        break;
    }
    case 1:{
        document.getElementsByClassName("h1")[0].style.display = "none";
        document.getElementsByClassName("h2")[0].style.display = "none";
        document.getElementsByClassName("h4")[0].style.display = "none";
        document.getElementsByClassName("h5")[0].style.display = "none";
        document.getElementsByClassName("h6")[0].style.display = "none";
        break;
    }
}
switch(h2){
    case 0:{
        document.getElementsByClassName("h44")[0].style.display = "none";
        break;
    }
    case 1:{
        document.getElementsByClassName("h11")[0].style.display = "none";
        document.getElementsByClassName("h22")[0].style.display = "none";
        document.getElementsByClassName("h44")[0].style.display = "none";
        document.getElementsByClassName("h55")[0].style.display = "none";
        document.getElementsByClassName("h66")[0].style.display = "none";
        break;
    }
    case 2:{
        document.getElementsByClassName("h11")[0].style.display = "none";
        document.getElementsByClassName("h77")[0].style.display = "none";
        break;
    }
    case 3:{
        document.getElementsByClassName("h11")[0].style.display = "none";
        document.getElementsByClassName("h55")[0].style.display = "none";
        break;
    }
    case 4:{
        document.getElementsByClassName("h22")[0].style.display = "none";
        document.getElementsByClassName("h55")[0].style.display = "none";
        document.getElementsByClassName("h66")[0].style.display = "none";
        break;
    }
    case 5:{
        document.getElementsByClassName("h33")[0].style.display = "none";
        document.getElementsByClassName("h55")[0].style.display = "none";
        break;
    }
    case 6:{
        document.getElementsByClassName("h33")[0].style.display = "none";
        break;
    }
    case 7:{
        document.getElementsByClassName("h11")[0].style.display = "none";
        document.getElementsByClassName("h44")[0].style.display = "none";
        document.getElementsByClassName("h55")[0].style.display = "none";
        document.getElementsByClassName("h66")[0].style.display = "none";
        break;
    }
    case 9:{
        document.getElementsByClassName("h55")[0].style.display = "none";
    }
}


var m1 = (a.getMinutes()-a.getMinutes()%10)/10;
var m2 = a.getMinutes()%10;

switch(m1){
    case 0:{
        document.getElementsByClassName("m4")[0].style.display = "none";
        break;
    }
    case 1:{
        document.getElementsByClassName("m1")[0].style.display = "none";
        document.getElementsByClassName("m2")[0].style.display = "none";
        document.getElementsByClassName("m4")[0].style.display = "none";
        document.getElementsByClassName("m5")[0].style.display = "none";
        document.getElementsByClassName("m6")[0].style.display = "none";
        break;
    }
    case 2:{
        document.getElementsByClassName("m1")[0].style.display = "none";
        document.getElementsByClassName("m7")[0].style.display = "none";
        break;
    }
    case 3:{
        document.getElementsByClassName("m1")[0].style.display = "none";
        document.getElementsByClassName("m5")[0].style.display = "none";
        break;
    }
    case 4:{
        document.getElementsByClassName("m2")[0].style.display = "none";
        document.getElementsByClassName("m5")[0].style.display = "none";
        document.getElementsByClassName("m6")[0].style.display = "none";
        break;
    }
    case 5:{
        document.getElementsByClassName("m3")[0].style.display = "none";
        document.getElementsByClassName("m5")[0].style.display = "none";
        break;
    }
    case 6:{
        document.getElementsByClassName("m3")[0].style.display = "none";
        break;
    }
    case 7:{
        document.getElementsByClassName("m1")[0].style.display = "none";
        document.getElementsByClassName("m4")[0].style.display = "none";
        document.getElementsByClassName("m5")[0].style.display = "none";
        document.getElementsByClassName("m6")[0].style.display = "none";
        break;
    }
    case 9:{
        document.getElementsByClassName("m5")[0].style.display = "none";
    }
}
switch(m2){
    case 0:{
        document.getElementsByClassName("m44")[0].style.display = "none";
        break;
    }
    case 1:{
        document.getElementsByClassName("m11")[0].style.display = "none";
        document.getElementsByClassName("m22")[0].style.display = "none";
        document.getElementsByClassName("m44")[0].style.display = "none";
        document.getElementsByClassName("m55")[0].style.display = "none";
        document.getElementsByClassName("m66")[0].style.display = "none";
        break;
    }
    case 2:{
        document.getElementsByClassName("m11")[0].style.display = "none";
        document.getElementsByClassName("m77")[0].style.display = "none";
        break;
    }
    case 3:{
        document.getElementsByClassName("m11")[0].style.display = "none";
        document.getElementsByClassName("m55")[0].style.display = "none";
        break;
    }
    case 4:{
        document.getElementsByClassName("m22")[0].style.display = "none";
        document.getElementsByClassName("m55")[0].style.display = "none";
        document.getElementsByClassName("m66")[0].style.display = "none";
        break;
    }
    case 5:{
        document.getElementsByClassName("m33")[0].style.display = "none";
        document.getElementsByClassName("m55")[0].style.display = "none";
        break;
    }
    case 6:{
        document.getElementsByClassName("m33")[0].style.display = "none";
        break;
    }
    case 7:{
        document.getElementsByClassName("m11")[0].style.display = "none";
        document.getElementsByClassName("m44")[0].style.display = "none";
        document.getElementsByClassName("m55")[0].style.display = "none";
        document.getElementsByClassName("m66")[0].style.display = "none";
        break;
    }
    case 9:{
        document.getElementsByClassName("m55")[0].style.display = "none";
    }
}

var s1 = (a.getSeconds()-a.getSeconds()%10)/10;
var s2 = a.getSeconds()%10;

switch(s1){
    case 0:{
        document.getElementsByClassName("s4")[0].style.display = "none";
        break;
    }
    case 1:{
        document.getElementsByClassName("s1")[0].style.display = "none";
        document.getElementsByClassName("s2")[0].style.display = "none";
        document.getElementsByClassName("s4")[0].style.display = "none";
        document.getElementsByClassName("s5")[0].style.display = "none";
        document.getElementsByClassName("s6")[0].style.display = "none";
        break;
    }
    case 2:{
        document.getElementsByClassName("s1")[0].style.display = "none";
        document.getElementsByClassName("s7")[0].style.display = "none";
        break;
    }
    case 3:{
        document.getElementsByClassName("s1")[0].style.display = "none";
        document.getElementsByClassName("s5")[0].style.display = "none";
        break;
    }
    case 4:{
        document.getElementsByClassName("s2")[0].style.display = "none";
        document.getElementsByClassName("s5")[0].style.display = "none";
        document.getElementsByClassName("s6")[0].style.display = "none";
        break;
    }
    case 5:{
        document.getElementsByClassName("s3")[0].style.display = "none";
        document.getElementsByClassName("s5")[0].style.display = "none";
        break;
    }
    case 6:{
        document.getElementsByClassName("s3")[0].style.display = "none";
        break;
    }
    case 7:{
        document.getElementsByClassName("s1")[0].style.display = "none";
        document.getElementsByClassName("s4")[0].style.display = "none";
        document.getElementsByClassName("s5")[0].style.display = "none";
        document.getElementsByClassName("s6")[0].style.display = "none";
        break;
    }
    case 9:{
        document.getElementsByClassName("s5")[0].style.display = "none";
    }
}
switch(s2){
    case 0:{
        document.getElementsByClassName("s44")[0].style.display = "none";
        break;
    }
    case 1:{
        document.getElementsByClassName("s11")[0].style.display = "none";
        document.getElementsByClassName("s22")[0].style.display = "none";
        document.getElementsByClassName("s44")[0].style.display = "none";
        document.getElementsByClassName("s55")[0].style.display = "none";
        document.getElementsByClassName("s66")[0].style.display = "none";
        break;
    }
    case 2:{
        document.getElementsByClassName("s11")[0].style.display = "none";
        document.getElementsByClassName("s77")[0].style.display = "none";
        break;
    }
    case 3:{
        document.getElementsByClassName("s11")[0].style.display = "none";
        document.getElementsByClassName("s55")[0].style.display = "none";
        break;
    }
    case 4:{
        document.getElementsByClassName("s22")[0].style.display = "none";
        document.getElementsByClassName("s55")[0].style.display = "none";
        document.getElementsByClassName("s66")[0].style.display = "none";
        break;
    }
    case 5:{
        document.getElementsByClassName("s33")[0].style.display = "none";
        document.getElementsByClassName("s55")[0].style.display = "none";
        break;
    }
    case 6:{
        document.getElementsByClassName("s33")[0].style.display = "none";
        break;
    }
    case 7:{
        document.getElementsByClassName("s11")[0].style.display = "none";
        document.getElementsByClassName("s44")[0].style.display = "none";
        document.getElementsByClassName("s55")[0].style.display = "none";
        document.getElementsByClassName("s66")[0].style.display = "none";
        break;
    }
    case 9:{
        document.getElementsByClassName("s55")[0].style.display = "none";
    }
}
(function (){
        setInterval( function() {
                        window.location.reload();
                    },1000);
}());