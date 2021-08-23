class Convert {
    constructor() {
        console.log("i'm the new object");
    }
    fromCelcius(to, numb1) {
        if (to == "cel") {
            return numb1;
        }
        if (to == "rea") {
            return (4 / 5) * numb1;
        }
        if (to == "far") {
            return (9 / 5) * numb1 + 32;
        }
    }
    fromReamur(to, numb1) {
        if (to == "rea") {
            return numb1;
        }
        if (to == "cel") {
            return (5 / 4) * numb1;
        }
        if (to == "far") {
            return (9 / 4) * numb1 + 32;
        }
    }
    fromFarenheit(to, numb1) {
        if (to == "far") {
            return numb1;
        }
        if (to == "cel") {
            return (5 / 9) * (numb1 - 32);
        }
        if (to == "rea") {
            return (4 / 9) * (numb1 - 32);
        }
    }
}

function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
        key = event.clipboardData.getData("text/plain");
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function select() {
    document.querySelector("numb1").value = "";
    document.querySelector("result").value = "";
}
const convert = new Convert();

function conv() {
    if (document.getElementById("from").value == "cel") {
        const res = convert.fromCelcius(
            document.getElementById("to").value,
            parseInt(document.getElementById("numb1").value)
        );
        document.getElementById("result").value = res;
    }
    if (document.getElementById("from").value == "rea") {
        const res = convert.fromReamur(
            document.getElementById("to").value,
            parseInt(document.getElementById("numb1").value)
        );
        document.getElementById("result").value = res;
    }
    if (document.getElementById("from").value == "far") {
        const res = convert.fromFarenheit(
            document.getElementById("to").value,
            parseInt(document.getElementById("numb1").value)
        );
        document.getElementById("result").value = res;
    }
}

function change() {
    document.body.style.backgroundColor = document.getElementById("color").value;
}

// module.exports = Convert;