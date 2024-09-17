const slack = document.getElementById("slackimg");
var audio = new Audio("https://nonprod-audio.dictionary.com/P05/P0566600/P0566600.mp3");
slack.addEventListener("click", function {
  audio.play();
})
