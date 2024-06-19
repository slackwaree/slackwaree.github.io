const timesClicked = document.getElementById("timesClicked");

window.onload = function() {
    timesClicked.innerHTML = localStorage.getItem("timesClicked");
}

function animateBtn() {
    const btn = document.getElementById("btnClickable");

    const btnAnimation = [
        {transform: "translate(0, 0)"},
        {transform: "translate(0, 70%)"},
        {transform: "translate(0, 0)"},
    ];
    const animationTiming = {
        duration: 200,
        easing: "ease-out",
    };
    
    btn.animate(btnAnimation, animationTiming);
    var playAudio = new Audio('mouse-click-153941.mp3');
    playAudio.play();

    timesClicked.innerHTML++;
    localStorage.setItem("timesClicked", timesClicked.textContent)
}