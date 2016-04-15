//

var winner = function() {
    console.log("WINNER!");
};
var loser = function() {
    console.log("LOSER!");
};

winner();
loser();

var a = winner;
var b = loser;
var c = loser;

a();
b();
c();

c = a;
a = b;
b = c;
c = a;
// a = c;
a = b;
b = c;

a();
