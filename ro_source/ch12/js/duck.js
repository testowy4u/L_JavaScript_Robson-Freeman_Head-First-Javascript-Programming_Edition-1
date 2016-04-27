//

function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}

Bob = new Duck("redheaded", true);
Bill = new Duck("Mallard", false);

console.log("Bob" + " is a " + Bob.type + ". Can he fly: " + Bob.canFly);
console.log("Bill" + " is a " + Bill.type + ". Can he fly: " + Bill.canFly);
