var cssOutput = document.querySelector("h1");
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];

color1.addEventListener("input", function() {
  console.log(color1.value);
});
color2.addEventListener("input", function() {
  console.log(color2.value);
});
