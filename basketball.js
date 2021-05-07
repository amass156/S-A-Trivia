let score = 0


//click on the correct answer, and the score goes up by one.
let correctButton = document.querySelectorAll("#correct")
// console.log(correctButton);
for (let i = 0; i < correctButton.length; i++){
    correctButton[i].addEventListener("click",function() {
        document.getElementById("score").innerHTML = score+1;
    }, {
        once: true
    })
}

// Allow each button box highlights a certain color when clicked
// let buttonClick = document.getElementsByClassName("btn")
// console.log(buttonClick);
// for (let i = 0; i < buttonClick.length; i++){
//     buttonClick[i].addEventListener("click", function(){
//         buttonClick[i].style.backgroundColor = "red"
//     })
// }

function clicks(e){
    let buttonClick = document.getElementsByClassName("btn")
    console.log(buttonClick);
    // for (let i = 0; i < buttonClick.length; i++){
    //     buttonClick[i].addEventListener("click", clicks)
        buttonClick[0].style.backgroundColor = "red"
        console.log(buttonClick);
    // }
    // buttonClick.removeEventListener("click", clicks)
}

clicks()









