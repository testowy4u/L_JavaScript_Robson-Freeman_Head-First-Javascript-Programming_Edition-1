//

function justSayin(phrase) {
    var ending = "";
    if (beingFunny) {
        ending = " -- I'm just sayin!";
    }
    else if (notSoMuch) {
        ending = " -- Not so much.";
    }
    alert(phrase + ending);
}

beingFunny = true;
notSoMuch = false;

justSayin("Hey there!");
