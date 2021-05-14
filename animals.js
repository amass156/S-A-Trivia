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
        button[i].style.backgroundColor = "black"
        currButton = button[i]
    })
}
// Allows for score to increment only once when correct button is clicked.
for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        if(button[i].classList[1] === "correct"){
            score += 1
            console.log(currButton);
        }
    }, {once: true})
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
                let myStorage = window.localStorage
                myStorage.setItem("score", score )
                console.log(myStorage);
                window.location.href = "score.html"
                window.location.href = "score.html"
            }            
            copyArr[currClick].classList.remove("invis")
            document.getElementById("score").innerHTML = `Score: ${score}`;
        }))  
}
nextPage()














