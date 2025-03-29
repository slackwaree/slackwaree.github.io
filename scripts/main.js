const dropdownMenu = document.getElementById("dropdown");
const blurFilter = document.getElementById("blur-filter")
function transitionMenu() {
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open")
  }
  else {
    dropdown.classList.add("open")
  }
}

const slack = document.getElementById("slackimg");
var audio = new Audio("https://cdn.discordapp.com/soundboard-sounds/1");
slack.addEventListener("click", function() {
  audio.play();
})
function slackClicked() {
  audio.play();
}
