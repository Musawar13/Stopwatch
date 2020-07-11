var min = 0 ;
var sec = 0;
var milisec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milisecHeading = document.getElementById("milisec");
var interval;

function timer(){
    milisec++
    milisecHeading.innerHTML = milisec;
    if(milisec >=100){
        sec++
        secHeading.innerHTML = sec
        milisec = 0;
    }else if(sec >=60){
        min++
        minHeading.innerHTML = min
        sec = 0;
    }
}
function start(){
interval = setInterval(timer , 10)
document.getElementById('startBtn').disable = true;


}
function stop(){
    clearInterval(interval)
    document.getElementById('stopBtn').disable = false;
}
function restart(){
    min = 0;
    sec = 0;
    milisec = 0;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    milisecHeading.innerHTML = milisec
    stop();
}
// function start(){
//     interval= setInterval(timer, 10);
//     document.getElementById("startbtn").disable = true;
// }
// function stop (){
//     clearInterval(interval);
//     document.getElementById("stopbtn").disable = false;
// }
