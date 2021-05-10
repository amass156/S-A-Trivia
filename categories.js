let basketballButton = document.querySelector("#basketball-category")
// console.log(basketballButton);
let footballButton = document.querySelector("#football-category")
// console.log(footballButton);
basketballButton.addEventListener("click", function(){
    window.location.href = "basketball.html"
})
footballButton.addEventListener("click", function(){
    window.location.href = "football.html"
})
