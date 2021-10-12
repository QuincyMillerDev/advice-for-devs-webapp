var adviceAPIurl = "https://api.adviceslip.com/advice";
var DisplayText = document.getElementById("DisplayText");
var sound = document.getElementById('sound');


async function getAdvice(){
    // Connecting to Advice API and getting a response
    let response = await fetch(adviceAPIurl)
    let data = await response.json();
    DisplayText.innerText = data.slip.advice;
    sound.play()
}