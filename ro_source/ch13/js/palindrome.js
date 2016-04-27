//

String.prototype.palindrome = function() {
    for (var i = 0; i <= this.length - 1; i++) {
        if (this.charAt(i) !== this.charAt(len - i)) {
            return false;
        }
        if (i === (len - i)) {
            return true;
        }
    }
    return true;
};

String.prototype.palindromeAdv = function() {
    var r = this.split("").reverse().join("");
    return (r === this.valueOf());
};

var phrases =  ["eve",
                "kayak",
                "mom",
                "wow",
                "noon",
                "Not a palindrome"];

for (var i = 0; i < phrases.length; i++) {
    var phrase = phrases[i];
    if (phrase.palindrome()) {
        console.log("'" + phrase + "' is a palindrome");
    }
    else {
        console.log("'" + phrase + "' is NOT a palindrome");
    }
}
