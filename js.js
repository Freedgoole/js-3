var namePeole = ["Sash", "Valya", "Nina","Kita","Mita"];
var targetElement = document.getElementById("new");
	for (i=0; i<namePeole.length; i++) {
	targetElement.innerHTML += namePeole[i]+' ';
	}


document.getElementById("ok").onclick = f1;
    function f1() {
        var index = document.getElementById("index").value;
        var value = document.getElementById("value").value;
        namePeole[index]=value;
        targetElement.innerHTML = namePeole;
    }
document.getElementById('pop').onclick = poPPe;
function poPPe() {
popped = namePeole.pop();
targetElement.innerHTML = namePeole;
}

document.getElementById('shift').onclick = Shift;
function Shift() {
Shiftt = namePeole.shift();
targetElement.innerHTML = namePeole;
}

document.getElementById('btninpt').onclick = Push;
function Push() {
console.log('test');
var inppush = document.getElementById("inppush").value;	
namePeole.push(inppush);
targetElement.innerHTML = namePeole;
}

