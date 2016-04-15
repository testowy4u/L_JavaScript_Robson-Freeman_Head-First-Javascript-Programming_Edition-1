//

function administer(name, vaccine, time) {
    var dosage = 10;
    console.log("Time to give " + name + " a vaccine: " + time);
    vaccine(dosage);
}

function inject(dosage) {
    console.log("Injecting " + dosage + "ml");
}

var patient = "Fido";
var time = "5 minutes";

function vaccine(dosage) {
    if (dosage > 0) {
        inject(dosage);
    }
}

administer(patient, vaccine, time);