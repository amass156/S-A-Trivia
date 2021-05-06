let score = 0


//click on the correct answer, and the score goes up by one.
let button = document.getElementsByClassName("correct")
console.log(button);
for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click",function() {
        document.getElementById("score").innerHTML = score++;
    })
}

// Allow each button box highlights a certain color when clicked









