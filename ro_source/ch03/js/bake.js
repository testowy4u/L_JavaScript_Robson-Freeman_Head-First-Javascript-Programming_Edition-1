//

var oven;
var temperature;

function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    }
    else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    }
    else {
        message = "That's a very comfortable temperature for me.";
        setMode("bake");
        setTemp(degrees);
    }

    return message;
}


function setMode(mode) {
    if (mode == "off" || mode == "bake" || mode == "broil") {
        oven = mode;
    }
}


function setTemp(degrees) {
    temperature = degrees;
}

var status;
status = bake(350);
document.write(status + "<br />");
status = bake(50);
document.write(status + "<br />");
status = bake(1000);
document.write(status + "<br />");