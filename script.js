var cssOutput = document.querySelector("h1");
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var h3 = document.querySelector("h3");
var body = document.querySelector("body");

function changeBackground() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
