function showDistance() {
  var x1, x2, y1, y2;
  x1 = parseFloat(document.getElementById("xOne").value);
  x2 = parseFloat(document.getElementById("xTwo").value);
  y1 = parseFloat(document.getElementById("yOne").value);
  y2 = parseFloat(document.getElementById("yTwo").value);

  var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  document.getElementById("outPut").innerHTML =
    "the distance between (" +
    x1 +
    "," +
    y1 +
    ") and (" +
    x2 +
    "," +
    y2 +
    ") is " +
    distance;
}
