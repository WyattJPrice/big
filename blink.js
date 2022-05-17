function start() {
    var thebody = document.getElementById("thebody");
    var theoutput = document.getElementById("output");
    var thetext = prompt("Text");
    document.getElementById("output").innerHTML = thetext; 
    setInterval(blink, 500);
}

function blink() {
    var thebody = document.getElementById("thebody");
    var theoutput = document.getElementById("output");
    thebody.style.backgroundColor = 'black';
    theoutput.style.color = 'white'; 
}

