// Randomizes the questions
let  question = document.querySelectorAll("main")
// console.log(question)
let questionArray = Array.from(question)
let copyArr = questionArray.slice(0)
let answeredQuestion = []
console.log(copyArr)
for (let i = 0; i < copyArr.length; i++){
    let currNum = copyArr[i]
    // answeredQuestion.push(currNum)
    // console.log(answeredQuestion)
    // copyArr.shift()
    // console.log(copyArr)
    // answeredQuestion.splice(1,2,"may")
    // console.log(answeredQuestion)
}
// slice to copy array
// randomizing
// splice when button is clicked (index number)
let randomArr = copyArr.sort(() => Math.random() * copyArr.length)
// console.log(randomArr)
function removeInvis() {
        copyArr.sort(() => Math.random() - .5)
        randomArr[0].classList.remove("invis")
    }
    // console.log(removeInvis(questionArray))
    removeInvis()
    // console.log(questionArray)

let score = 0

//click on the correct answer, and the score goes up by one.
let correctButton = document.querySelectorAll(".correct")
// console.log(correctButton)
function scoreIncrease(){
    score += 1
    document.getElementById("score").innerHTML = score;
}

for (let i = 0; i < correctButton.length; i++){
    correctButton[i].addEventListener("click", scoreIncrease)  
}


// Allow each button box highlights a certain color when clicked
let currButton = null
let buttonClick = document.getElementsByClassName("btn")

for (let i = 0; i < buttonClick.length; i++){
    buttonClick[i].addEventListener("click", function(){
        if (currButton !== null){
            currButton.style.backgroundColor = ""
        }
        buttonClick[i].style.backgroundColor = "red"
        currButton = buttonClick[i]
    }, {
        once: true
    })
}


//Next question appears when a button is clicked
let button = document.querySelectorAll(".btn")
let correct = document.querySelectorAll("correct")
// let  question = document.querySelectorAll("main")

let currClick = 0
let answeredQuestions = []

function nextPage(){
    console.log(button);
    button.forEach(e => 
        e.addEventListener("click", function(){
            // this will contain answered questions
            copyArr[currClick].classList.add("invis")
            currClick += 1
            answeredQuestions.push(e)
            console.log(answeredQuestions)
            console.log(e);
            if(question.length === currClick){
                let myStorage = window.localStorage
                myStorage.setItem("score", score )
                console.log(myStorage);
                window.location.href = "score.html"
            }
            copyArr[currClick].classList.remove("invis")
            // copyArr.shift()
            console.log(copyArr)
        }))
}
nextPage()

// function nextQuestion(){
//     for(let i = 0; i < button.length; i++){
//         button[i].addEventListener("click", function() {
//             question[currClick].classList.add("invis")
//             currClick += 1
//             // console.log(e);
//             if(question.length === currClick){
//                 let myStorage = window.localStorage
//                 myStorage.setItem("score", score )
//                 console.log(myStorage);
//                 window.location.href = "score.html"
//                 }
//                 question[currClick].classList.remove("invis")
//         })
//     }
// }
// nextQuestion()



//skip function 
let skip = document.querySelectorAll(".skip")
// let  question = document.querySelectorAll("main")

function skipButton(){
    // console.log(skip);
    skip.forEach(e =>  
        e.addEventListener("click", function(){
            question[currClick].classList.add("invis")
            currClick += 1
            if(question.length === currClick){
                window.location.href = "score.html"
            }
            question[currClick].classList.remove("invis")
        }))
}
skipButton()








