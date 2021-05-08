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
let x = null
let buttonClick = document.getElementsByClassName("btn")
console.log(buttonClick);
for (let i = 0; i < buttonClick.length; i++){
    buttonClick[i].addEventListener("click", function(){
        if (x !== null){
            x.style.backgroundColor = ""
        }
        buttonClick[i].style.backgroundColor = "red"
        x = buttonClick[i]
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

//skip function 
let skip = document.querySelectorAll(".skip")
console.log(skip);

let currQ = 0
let  q = document.querySelectorAll("main")
console.log(q);
skip.forEach(e =>  
    e.addEventListener("click", function(){
        q[currQ].classList.add("invis")
        currQ += 1
        if(q.length === currQ){
            window.location.href = "football.html"
        }
        q[currQ].classList.remove("invis")
    }))






