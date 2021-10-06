let myStorage = window.localStorage
let finalScore = myStorage.getItem("score")

let scoreText = document.querySelector(".final-score")
let finalScore = document.createTextNode(`Your Final Score is ${finalScore}!`)
scoreText.appendChild(finalScore)


// Allow user to start from welcome page
let playAgain = document.querySelector(".replay")
playAgain.addEventListener("click", function(){
    window.location.href = "welcome.html"
})
