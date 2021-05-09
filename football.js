let score = 0

//click on the correct answer, and the score goes up by one.
let correctButton = document.querySelectorAll(".correct")
// console.log(correctButton);
for (let i = 0; i < correctButton.length; i++){
    correctButton[i].addEventListener("click",function() {
        score += 1
        document.getElementById("score").innerHTML = score;
    }, {
        once: true
    })
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
let next = document.querySelectorAll(".btn")
correct = document.querySelectorAll("correct")
let  question = document.querySelectorAll("main")
console.log(question);
// console.log(next);
let currClick = 0

function nextPage(){
    console.log(next);
    next.forEach(e => 
        e.addEventListener("click", function(){
            question[currClick].classList.add("invis")
            currClick += 1
            console.log(e);
            // if(question.length === currClick){
    
                // }
                question[currClick].classList.remove("invis")
        }))
}
nextPage()



//skip function 

let skip = document.querySelectorAll(".skip")
let currQ = 0
// let  question = document.querySelectorAll("main")

function skipButton(){
    // console.log(skip);
    skip.forEach(e =>  
        e.addEventListener("click", function(){
            question[currQ].classList.add("invis")
            currQ += 1
            if(question.length === currQ){
                window.location.href = "last page goes here"
            }
            question[currQ].classList.remove("invis")
        }))
}
skipButton()

// let test = document.querySelectorAll(".skip")
// function nextQuestion(){
//     for (let i = 0; i < test.length ; i++){
//         console.log(test);
//         next[i].addEventListener("click", function(){ 
//             question[currClick].classList.add("invis")
//                 currClick =+ 1
//                 if(question.length === currClick){
        
//                 }
//                 question[currClick].classList.remove("invis")
//         })
//     }
// }
// nextQuestion()






