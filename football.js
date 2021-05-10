// Allow each button box highlights a certain color when clicked
let currButton = null
// let buttonClick = document.getElementsByClassName("btn")
let button = document.querySelectorAll(".btn")

for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        if (currButton !== null){
            currButton.style.backgroundColor = ""
        }
        button[i].style.backgroundColor = "red"
        // if(button[i].classList[1] === "correct"){
        //     score += 1
        //     document.getElementById("score").innerHTML = score;
        // }        currButton = button[i]
        console.log(currButton);
    })
}
//Next question appears when a button is clicked and score goes up by one
let nextButton = document.querySelectorAll(".next")
let correctButton = document.querySelectorAll(".correct")
// console.log(correctButton);
let  question = document.querySelectorAll("main")
// console.log(question);
// console.log(next);
let currClick = 0
let score = 0


// if(correctButton === "click"){
//     score += 1
//     document.getElementById("score").innerHTML = score;
// }
// function plusOne(){
// }

function nextPage(){
    nextButton.forEach(e => 
        e.addEventListener("click", function(){
            question[currClick].classList.add("invis")
            currClick += 1
            console.log(e);
            
            question[currClick].classList.remove("invis")
        
            for(let i = 0; i < correctButton.length; i++){
                console.log(button[i].classList);
                if(correctButton[i].classList.value.includes("correct")){
                    score += 1
                    document.getElementById("score").innerHTML = score;
                }
            }
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




// let score = 0

//click on the correct answer, and the score goes up by one.
// let correctButton = document.querySelectorAll(".correct")
// console.log(button[0].classList);
// for (let i = 0; i < correctButton.length; i++){
//     correctButton[i].addEventListener("click",function() {
//         score += 1
//         document.getElementById("score").innerHTML = score;
//     })

// }



