// Test for jokes

var joke = "Javascript walked into a bar...";               // Quotes don't match
var toldJoke = false;                                       // If bool, should not have quotes for string
var punchline = "Better watch our for those semi-colons";   // var name should not start with '$'

// var percentage = 20;                                        // var name should not start with '%';
// var result;                                                 // declaration is missing semi-colon;

if (toldJoke == true) {
    alert(punchline);                                       // function calls are case sensitive
}
else {                                                      // missing open bracket
    alert(joke);
}
