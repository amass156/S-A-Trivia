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

// function clicks(e){
//     let buttonClick = document.getElementsByClassName("btn")
//     console.log(buttonClick);
//     // for (let i = 0; i < buttonClick.length; i++){
//     //     buttonClick[i].addEventListener("click", clicks)
//         buttonClick[0].style.backgroundColor = "red"
//         console.log(buttonClick);
//     // }
//     // buttonClick.removeEventListener("click", clicks)
// }




// in order to get one question on the page, hide the rest here

// let unhide = document.getElementById("question2")
// unhide.classList.remove("invis")

//Next question appears when a button is clicked
let next = document.querySelectorAll(".btn")
console.log(next);
let currClick = 0

let  question = document.querySelectorAll("main")
console.log(question);
next.forEach(e => 
    e.addEventListener("click", function(){
        question[currClick].classList.add("invis")
        currClick =+ 1
        if(question.length === currClick){

        }
        question[currClick].classList.remove("invis")
    }))



//skip function 
let skip = document.querySelectorAll(".skip")

let currQ = 0
// let  question = document.querySelectorAll("main")

skip.forEach(e =>  
    e.addEventListener("click", function(){
        question[currQ].classList.add("invis")
        currQ += 1
        if(question.length === currQ){
            window.location.href = "last page goes here"
        }
        question[currQ].classList.remove("invis")
    }))






