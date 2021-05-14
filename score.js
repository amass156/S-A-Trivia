let myStorage = window.localStorage
let finalScore = myStorage.getItem("score")
console.log(myStorage);

text = document.querySelector(".final-score")
finalScore = document.createTextNode(`Your Final Score is ${finalScore}!`)
text.appendChild(finalScore)

// Allow user to start from welcome page
let playAgain = document.querySelector(".replay")
playAgain.addEventListener("click", function(){
    window.location.href = "welcome.html"
})
