let change = document.querySelectorAll(".change");

let bgcolor = localStorage.getItem("bgcolor") ?? "rgb(0, 0, 0)";
let textcolor = localStorage.getItem("textcolor") ?? "white";
let fonts = localStorage.getItem("fontsize") ?? "10px";
let spacing = localStorage.getItem("spacing") ?? "20px";
let ffamily = localStorage.getItem("ffamily") ?? "Helvetica";

document.body.style.backgroundColor = bgcolor;
for (let i = 0; i < change.length; i++) {
  change[i].style.color = textcolor;
  change[i].style.fontSize = fonts;
  change[i].style.lineHeight = spacing;
  change[i].style.fontFamily = ffamily;
}
document
  .querySelector("#bgcolor-button")
  .addEventListener("click", function () {
    bgcolor = document.getElementById("bgcolor-input").value;
    document.body.style.backgroundColor = bgcolor;
    localStorage.setItem("bgcolor", bgcolor);
  });
document
  .querySelector("#textcolor-button")
  .addEventListener("click", function () {
    textcolor = document.getElementById("textcolor-input").value;
    for (let i = 0; i < change.length; i++) {
      change[i].style.color = textcolor;
    }
    localStorage.setItem("textcolor", textcolor);
  });
document
  .querySelector("#fontsize-button")
  .addEventListener("click", function () {
    fonts = document.getElementById("fonts-input").value + "px";
    for (let i = 0; i < change.length; i++) {
      change[i].style.fontSize = fonts;
    }
    localStorage.setItem("fontsize", fonts);
  });
document
  .querySelector("#spacing-button")
  .addEventListener("click", function () {
    spacing = document.getElementById("spacing-input").value + "px";
    for (let i = 0; i < change.length; i++) {
      change[i].style.lineHeight = spacing;
    }
    localStorage.setItem("spacing", spacing);
  });
document
  .querySelector("#ffamily-button")
  .addEventListener("click", function () {
    ffamily = document.getElementById("ffamily-input").value;
    for (let i = 0; i < change.length; i++) {
      change[i].style.fontFamily = ffamily;
    }
    localStorage.setItem("ffamily", ffamily);
  });
