document.getElementById("siren").addEventListener("mouseover", mouseOver);
document.getElementById("siren").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("siren").style.height = "100px";
  document.getElementById("siren").style.width = "100px";
  document.getElementById("siren").style.backgroundColor = "red";
}

function mouseOut() {
  document.getElementById("siren").style.height = "100px";
  document.getElementById("siren").style.width = "100px";
  document.getElementById("siren").style.backgroundColor = "blue";
}
