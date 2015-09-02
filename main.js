var returnSpot;

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
  console.log("data = " + data);
  ev.target.appendChild(document.getElementById(data));
}