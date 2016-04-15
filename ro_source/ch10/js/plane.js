//

var passengers = [  {name: "JaneDoloop", paid: true, ticket: "coach"},
                    {name: "Dr. Evel", paid: true, ticket: "firstclass"},
                    {name: "Sue Property", paid: false, ticket: "firstclass"},
                    {name: "John Funcall", paid: true, ticket: "premium"}];

function processPassengers(passengers, test) {
    for (var i = 0; i < passengers.length; i++) {
        if (test(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    var message = passenger.name; 
    if (passenger.paid) {
        message += " has paid";
    }
    else {
        message += " has not paid";
    }
    console.log(message);

    return false;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

//

processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            console.log("Would you like a cocktail or wine?");
        }
    }
    else if (passenger.ticket === "premium") {
        orderFunction = function() {
            console.log("Would you like wine, cola, or water?");
        }
    }
    else {
        orderFunction = function() {
            console.log("Your choice is cola or water.");
        }
    }
    return orderFunction;

}


function createDinnerOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            console.log("Would you like chicken or pasta?");
        }
    }
    else if (passenger.ticket === "premium") {
        orderFunction = function() {
            console.log("Would you like a snack box or cheese plate?");
        }
    }
    else {
        orderFunction = function() {
            console.log("Would you like peanuts of pretzels?");
        }
    }
    return orderFunction;
}


function pickUpTrash() {
    console.log("Can I have your trash, please?");
}


function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    
    getDrinkOrderFunction();
    
    // dinner
    getDinnerOrderFunction();
    
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    
    // movie
    getDrinkOrderFunction();
    
    // clean up
    pickUpTrash();
}


function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);
