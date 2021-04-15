let txtExample = document.getElementById("txtExample");
let found = document.getElementById("found");

let fakeSocial = [
  { name: "Max", update: "today is 2 cool" },
  { name: "Sarah", update: "Getting crepes today" },
  { name: "Aaron", update: "Stressed about life" },
  { name: "Max", update: "Oh no I lied" },
];

function findInsta() {
  var element = socialNetworks.find(function (item) {
    return item == "instagram";
  });

  console.log(fakeSocial[2]);

  for (var i = 0; i < fakeSocial.length; i++) {
    let newEl = document.createElement("div");
    newEl.innerHTML = fakeSocial[i].name + ": " + fakeSocial[i].update;
    found.appendChild(newEl);
  }
}
