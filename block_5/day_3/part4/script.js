var personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}
let a = document.querySelector('button')
a.addEventListener('click',complainMessage)

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}
let b = document.querySelector('.textEntry')
b.addEventListener('input',typeAndScream)

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}
let c = document.getElementsByTagName('button')[1]
c.addEventListener('click',goDark)

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}
let d = document.getElementsByTagName('button')[2]
d.addEventListener('click',finishTheStory)