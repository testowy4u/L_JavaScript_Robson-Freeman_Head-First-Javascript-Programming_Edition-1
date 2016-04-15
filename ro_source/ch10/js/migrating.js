//

var migrating = true;
var sup = true;

var fly = function(num) {
    for (var i = 0; i < num; i++) {
        console.log("Flying!");
    }
};


function quack(num) {
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}


var superQuack = quack;
var superFly = fly;

if (migrating) {
    quack(4);
    fly(4);
}

if (sup) {
    superQuack(2);
    superFly(2);
}
