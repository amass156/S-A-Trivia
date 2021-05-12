let  question = document.querySelectorAll("main")
let questionArray = Array.from(question)
let copyArr = questionArray.slice(0)
let randomArr = copyArr.sort(() => Math.random() * copyArr.length)
let button = document.querySelectorAll(".btn")


function randomQuestion() {
    copyArr.sort(() => Math.random() - .5)
    randomArr[0].classList.remove("invis")
}
randomQuestion(questionArray)

// Allow each button box highlights a certain color when clicked
let currButton = null

for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        if (currButton !== null){
            currButton.style.backgroundColor = ""
        }
        button[i].style.backgroundColor = "red"
        currButton = button[i]
        if(button[i].classList[1] === "correct"){
            score += 1
            console.log(currButton);
        }
    })
}
//Next question appears when a button is clicked and score goes up by one
let nextButton = document.querySelectorAll(".next")
let correctButton = document.querySelectorAll(".correct")

let currClick = 0
let score = 0


function nextPage(){
    nextButton.forEach(e => 
        e.addEventListener("click", function(){
            copyArr[currClick].classList.add("invis")
            currClick += 1
            if(question.length === currClick){
                window.location.href = "score.html"
            }            
            copyArr[currClick].classList.remove("invis")
            document.getElementById("score").innerHTML = score;
        }))  
}
nextPage()














