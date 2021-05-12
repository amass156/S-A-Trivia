console.log("testing");


let myStorage = window.localStorage
let finalScore = myStorage.getItem("score")
console.log(myStorage);

text = document.querySelector(".final-score")
finalScore = document.createTextNode(`Your Final Score is ${finalScore}`)
text.appendChild(finalScore)