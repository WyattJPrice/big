var thebody = document.getElementById("thebody");
var theoutput = document.getElementById("output");

function start() {
    var thetext = prompt("Text");
    document.getElementById("output").innerHTML = thetext; 
    var list = [1,2,3,4];

    for (var x = 0, ln = list.length; x < ln; x++) {
    setTimeout(function(y) {    
    thebody.style.backgroundColor = 'black';
    theoutput.style.color = 'white'; 
    }, x * 500, x); // we're passing x
    }
}



