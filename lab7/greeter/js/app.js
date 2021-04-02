var txtName = document.getElementById("txtName");
var dvOutput = document.getElementById("dvOutput");

function gatherName() {
  dvOutput.innerHTML = "Nice to meet you " + txtName.value;

  txtName.value = "";
}
