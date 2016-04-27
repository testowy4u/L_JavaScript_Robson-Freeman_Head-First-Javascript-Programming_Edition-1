function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function() {
        if (this.ounces === 8) {
            return "small";
        }
        else if (this.ounces === 12) {
            return "medium";
        }
        else if (this.ounces === 16) {
            return "large";
        }
    };
    this.toString = function() {
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
    };
}

var coffee = new Coffee("House Blend", 12);
console.log(coffee.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());
