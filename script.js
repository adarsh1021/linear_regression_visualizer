var data = [];
var learning_rate = 0.1;
var m = 0;
var b = 0;

function setMC(m, c) {
    var elementM = document.getElementById('m');
    var elementC = document.getElementById('c');
    elementM.innerText = m.toFixed(3);
    elementC.innerText = c.toFixed(3);
}
