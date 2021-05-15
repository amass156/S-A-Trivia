let  question = document.querySelectorAll("main")
let questionArray = Array.from(question)
let copyArr = questionArray.slice(0)

// Randomizes the questions
let randomArr = copyArr.sort(() => Math.random() * copyArr.length)
function removeInvis() {
        copyArr.sort(() => Math.random() - .5)
        randomArr[0].classList.remove("invis")
    }
removeInvis()

let score = 0

//click on the correct answer, and the score goes up by one.
let correctButton = document.querySelectorAll(".correct")
function scoreIncrease(){
    score += 1
    document.getElementById("score").innerHTML = `Score: ${score}`;
}

for (let i = 0; i < correctButton.length; i++){
    correctButton[i].addEventListener("click", scoreIncrease)  
}


//Next question appears when a button is clicked
let button = document.querySelectorAll(".btn")
let correct = document.querySelectorAll("correct")

let currClick = 0

function nextPage(){
    console.log(button);
    button.forEach(e => 
        e.addEventListener("click", function(){
            // this will contain answered questions
            copyArr[currClick].classList.add("invis")
            currClick += 1
            if(copyArr.length === currClick){
                let myStorage = window.localStorage
                myStorage.setItem("score", score )
                console.log(myStorage);
                window.location.href = "score.html"
            }
            copyArr[currClick].classList.remove("invis")
            console.log(copyArr)
        }))
}
nextPage()


//skip function 
let skip = document.querySelectorAll(".skip")

function skipButton(){
    skip.forEach(e =>  
        e.addEventListener("click", function(){
            copyArr[currClick].classList.add("invis")
            currClick += 1
            if(copyArr.length === currClick){
                let myStorage = window.localStorage
                myStorage.setItem("score", score )
                console.log(myStorage);
                window.location.href = "score.html"
            }
            copyArr[currClick].classList.remove("invis")
        }))
}
skipButton()








