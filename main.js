var returnSpot;
var moves = 0;

var lane1 = [1,2,3];
var lane2 = [];
var lane3 = [];
var lanes = { 1: lane1, 2: lane2, 3: lane3};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  returnSpot = ev.target.parentElement;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var loc = ev.target.id[1];
  if(ev.target.id[0] !== 'c') {
  	return;
  }
  if(ev.target === returnSpot) {
  	return;
  }
  if(validateMove(data, loc)){
  	var oldLoc = data;
  	if(typeof(returnSpot) !== 'undefined') {
  		var oldLoc = returnSpot.id[1];
  	}
  	if(!validateMove(data, oldLoc)) {
  		return;
  	}
  	moves++;
  	var index = lanes[oldLoc].indexOf(data);
  	lanes[loc].push(data);
  	lanes[oldLoc].splice(index, 1)
  	document.getElementById("count").textContent = "Moves: " + moves.toString();
  	ev.target.appendChild(document.getElementById(data));
  }
}

function validateMove(data, loc) {
	var arr = lanes[loc];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > data) {
			return false;
		}
	}
	return true;
}

function restart() {
	moves = 0;
	document.getElementById("count").textContent = "Moves: " + moves.toString();
	for (var i =1; i < 4; i++) {
		var el = document.getElementById(i);
		console.log(el);
		document.getElementById("c1").appendChild(el);
		lanes[1] = [1,2,3];
		lanes[2] = [];
		lanes[3] = [];
	}
}