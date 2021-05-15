# S-A-Trivia
## About 

Andre Massiah
Project #1
Single Player game
 ##### Play this game: https://amass156.github.io/S-A-Trivia/welcome.html
---
### Welcome to the Sports and Animals Trivia Game!
This game was built using `HTML`, `CSS`, and `JavaScript`. 
When the game initially loads, a welcome page appears, allowing a user to choose which cateogry they would like to select, "Sports" or "Animals". The object of the game is to try to correctly answer as many questions as possible.

### User Stories

* As a player I would like to know the how the game is played.
* As a player I would like to be able to choose my category.
* As a player I want to know my current score.
* As a player I want to be able to read the question, and choose the answer that I think best fits.
* As a player I would like to know exactly when the game is over.

---
## How the game is played
### Step 1
You first select your desired cateogy.
<img width="540" alt="Welcome Page" src="https://user-images.githubusercontent.com/81110589/118311485-f78d8e00-b4bd-11eb-9d2b-bd8a1fa1c79d.png">

---
### Step 2
Once a cateogry is selected, the user then has the choice between 2 sports (basketball & football) and 2 different types of animals (Reptiles & Mammals). 

 <img width="540" alt="Sports Categories" src="https://user-images.githubusercontent.com/81110589/118310755-03c51b80-b4bd-11eb-8e7c-6e3f78d98b1d.png">

---
### Step 3
After the subcateogry is selected, the user will see a score at the top right of the screen, and a random set of questions pertaining to that topic. 


<img width="540" alt="Questions (Basketba)" src="https://user-images.githubusercontent.com/81110589/118310044-13903000-b4bc-11eb-8db1-3b9c0a6844d5.png">

For the Animals questions, the user must select an answer choice, and then click the "next" button in order to move onto the next question. If the answer is correct, the score will increment by 1. If the answer is incorrect the score will stay as is. 


For the sports questions, the user must be more decisive, becuase the user is allowed to select only one answer choice before moving onto the next question. If the answer that was selected is correct, the score will increment by one. If the answer is incorrect the score will stay the same. 

---

### Final Screen
The last an final page shows the user's final score and gives them the option to play again. 


<img width="540" alt="Score Page" src="https://user-images.githubusercontent.com/81110589/118332615-595af180-b4d8-11eb-9963-1181c2abaabd.png">


---

### Bugs
Early in the project, I encountered a bug that displayed multiple quesitons on the screen at once. This bug messed with both the score being incremented as well as the aesthetics of the game. In order to fix this bug, I first had to turn the NodeList I was using into an actual array, and then duplicate that array in order to avoid disrupting the original set of data. I also had to update my "random question" function, as well as the function that allows the user to move onto the next question once an action is taken. 

I also had a much smaller bug that occured when I would attempt to increment the score by 1. Instead, the score would either increment regardless of if the question is correct or not as well as increment by 4 per question. This bug was fixed by changing the place where the score is incremented from the answer choice selection, to when the next button is clicked. 

---

### What I would do differently
If i were to start this project all over again, I would refactor my code using more javaScript in order to lessen the amount of HTML being written. I found this to be especially relevant with the way that I wrote each question because each question took up over 35 lines of HTML. If I were to do it over I would most likely put the questions into a class, and add the questions using javaScript, rather than hard coding them with HTML. I would also pseudo code more frequently in order to be able to debug and scale alot easier.

---
### Stretch Goals
* Add a timer. 
* Be able to have varying levels of difficulties. 
* Add modals filled with instructions for each level. 
* Allow for the user to see the correct answer directly after they select an answer choice. 
* Allow for the user to be able to chose the amount of quesitons that display.
* Add promted hints
* Update the `score` page to show an overview of the questions answered. 
* Have a personal best section that allows the user to answer an <em>"infinite"</em> amount of questions. They can only get a specified number of questions wrong before the game ends. 
