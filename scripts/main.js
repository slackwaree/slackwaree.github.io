const slack = document.getElementById("slackimg");
var audio = new Audio("https://cdn.discordapp.com/soundboard-sounds/1");
slack.addEventListener("click", function() {
  audio.play();
})
function slackClicked() {
  audio.play();
}
