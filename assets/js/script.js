//Wait for the DOM to finish loading before running the game
// Get the button elements and event listeners to them

document.addEventListener("DommContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gametype}`);
            }
        })
    }
})

/** 
 * The main game "loop", called when the script is first
 * loaded and after the user's answer has been processed
 * */
function runGame() {

    // Creates two random numbers between 1 and 25
    let num 1 = Math.floor(Math.random() * 25) + 1;
    let num 2 = Math.floor(Math.random() * 25) + 1;
}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}
