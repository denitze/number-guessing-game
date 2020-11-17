
// HTML 
// CSS 
//Declare the variables
let result = document.getElementById("result");
let guessUser = document.getElementById("guessField")
const submitBtn = document.getElementById("guessSubmit")
let maxRounds = document.getElementsByName("count-rounds");
let custom = document.getElementById("custom")
const roundTotal = document.getElementById("roundTotal");
const roundNow = document.getElementById("roundNow")
const roundsDiv = document.getElementById("radio-div")
const roundCount = document.getElementById("round-count")
let customInput =document.getElementById("customInput")
const winOrLose = document.getElementById("winOrLose")
let currentRound = 1;
let maxTries = 4;

// Generate a random number and store it in a variable for later
let randomNumber = Math.floor(Math.random()*100)+1;


//Function to check what the maximum tries are and if there is a custom input.

const getRounds = function (e) {
    if (e.target.id =="custom" || e.target.id=="customInput") {
        maxTries=0;
        customInput.style.display = "block";
        customInput.addEventListener("keyup", () => {
            maxTries = customInput.value
        })
    } else {
            maxTries = e.target.value;
            customInput.style.display = "none";
        }
    }
  
for (const singleRound of maxRounds) {
    singleRound.addEventListener("click", getRounds);
  }

//Repeat this until the user is correct OR used up all his attempts 
// Check in which round we are 
// Check to see, if the User number is correct
// If number is incorrect, check if the number is too low or too high and tell user to try again with a lower/higer number

function main() {

    submitBtn.addEventListener("click", () => {
        event.preventDefault()
        roundNow.innerHTML = currentRound;
        roundTotal.innerHTML = maxTries;
        roundsDiv.style.display = "none"
        roundCount.style.display ="block"
        console.log(maxTries);

        if (currentRound < maxTries) {
            if (guessUser.value != randomNumber) {
                console.log(guessUser.value);
                console.log(randomNumber);
                if (guessUser.value < randomNumber){
                    result.innerHTML +=`${currentRound} - You need to guess higher than ${guessUser.value}, try again!<br>`
                    console.log("Zu klein");
                } else if (guessUser.value > randomNumber){
                    result.innerHTML +=`${currentRound} - You need to guess lower than ${guessUser.value}, try again!<br>`
                    console.log("Zu groß");
                }
            } else {
                console.log("Richtig");
                winOrLose.innerHTML =`YOU WIN! You got me in ${currentRound} rounds! I am number ${randomNumber}! <a href="">PLAY AGAIN!</a>`
                submitBtn.removeEventListener()
                console.log(guessUser.value);
                console.log(randomNumber);
            }
            currentRound++;
        } else if (currentRound = maxTries) {
            winOrLose.innerHTML =`Oh No! You have lost!! It was number ${randomNumber}! <a href="">TRY AGAIN?</a>`
            submitBtn.removeEventListener()
        } 
        }
        )}

main();
