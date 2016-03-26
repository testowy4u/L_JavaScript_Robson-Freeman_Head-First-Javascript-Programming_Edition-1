//

var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);

document.write(humid + "<br />");


var guess = 6;
var isValid = (guess >= 0 && guess <= 6);

document.write(isValid + "<br />");


var kB = 1287;
var tooBig = (kB > 1000);
var urgent = true;
var sendFile = (urgent == true || tooBig == false);

document.write(sendFile + "<br />");


var keyPressed = "N";
var points = 142;
var level;

if (keyPressed == "Y" || (points > 100 && points < 200)) {
    level = 2;
}
else {
    level = 1;
}

document.write(level + "<br />");