// function secondsToHms(d) {
//     d = Number(d);
//     var h = Math.floor(d / 3600);
//     var m = Math.floor(d % 3600 / 60);
//     var s = Math.floor(d % 3600 % 60);

//     var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
//     var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
//     var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//     return hDisplay + mDisplay + sDisplay; 
// }

function convertToSeconds(hours, minutes){
  
    var perHour = 60;
    var perMin = 60;
    var multiplyHoursAndSec;
    var multiplyHoursAndMin;
    var multiplyMinAndSec;
    var totalSec = document.getElementById("calculate").innerHTML;
    var hours = document.getElementById("hours").value;
    var minutes = +document.getElementById("minutes").value;
  
    multiplyHourAndSec = hours * perHour * perMin;
    multiplyMinAndSec = minutes * perMin;
    totalSec = multiplyHourAndSec + multiplyMinAndSec;
    
    multiplyHoursAndMin = hours * perMin + minutes;
   
    
    document.getElementById("calculate").innerHTML = multiplyHoursAndMin + " minutes, " + totalSec + " seconds";
    
  }
  
  