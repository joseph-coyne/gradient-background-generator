var cssOutput = document.querySelector("h1");
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var h3 = document.querySelector("h3");
var body = document.querySelector("body");

colorOutput1 = "yellow";
colorOutput2 = "red";

function setColorValue() {
  h3.innerHTML =
    "background: linear-gradient(to right, " +
    colorOutput1 +
    ", " +
    colorOutput2 +
    ")";
}

function changeBackground() {
  body.style.background =
    "linear-gradient(to right, " + colorOutput1 + ", " + colorOutput2 + ")";
}

color1.addEventListener("input", function() {
  colorOutput1 = color1.value;
  setColorValue();
  changeBackground();
});

color2.addEventListener("input", function() {
  colorOutput2 = color2.value;
  setColorValue();
  changeBackground();
});
