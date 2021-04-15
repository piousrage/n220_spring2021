var txtGame = document.getElementById("txtGame");
var response = document.getElementById("response");

function checkHours() {
  var hoursPlayed = txtGame.value;

  if (isNaN(hoursPlayed)) {
    response.innerHTML = "Please Input Number";
    response.style.color = "teal";
    response.style.fontSize = "30px";

    return;
  }

  if (hoursPlayed < 10) {
    response.innerHTML = "You dont play much do you?";
    response.style.color = "red";
    response.style.fontSize = "30px";
  }
  if (hoursPlayed > 20) {
    response.innerHTML = "Nice to see you enjoy them";
    response.style.color = "green";
    response.style.fontSize = "60px";
  }
  if (hoursPlayed > 50) {
    response.innerHTML = "You may need to find another hobby";
    response.style.color = "blue";
    response.style.fontSize = "90px";
  }

  txtGame.value = "";
}
