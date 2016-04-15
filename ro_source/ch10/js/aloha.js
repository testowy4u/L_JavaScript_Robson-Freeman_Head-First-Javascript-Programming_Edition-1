//

function sayIt(translator) {
    var phrase = translator("Hello");
    console.log(phrase);
}


function hawaiianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Aloha";
}

sayIt(hawaiianTranslator);