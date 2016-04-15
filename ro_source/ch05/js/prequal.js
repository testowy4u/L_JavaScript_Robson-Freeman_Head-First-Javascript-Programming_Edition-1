//

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};
var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};
var taxi = {
    make: "WebVille Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertible: false,
    mileage: 281341
};


function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    }
    else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(taxi);


if (worthALook) {
    console.log("You gotta check our this " + taxi.make + " " + taxi.model);
}
else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}


function isWorthALook(didQualify, car) {
    if (didQualify) {
        console.log("You gotta check out this " + car.make + " " + car.model);
    }
    else {
        console.log("You should really pass on the " + car.make + " " + car.model);
    }
}


isWorthALook(prequal(taxi), taxi);
isWorthALook(prequal(cadi), cadi);
isWorthALook(prequal(chevy), chevy);
isWorthALook(prequal(fiat), fiat);