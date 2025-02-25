function moveRed()
{   
    var redSquare = document.getElementById("redSq"); //get red square by ID
    var redPos = 0; //initialize position 
    var speed = document.getElementById("redSpeed").value; // get selected speed
    var stepRedId = setInterval(stepRed, speed); // use speed for interval timing

    function stepRed() {
        if (redPos == 350) { //check if red square has moved 350 pixels diagonally
            clearInterval(stepRedId); //stop the interval when the movement reaches 350 pixels
        } else {
            redPos++; //increment the position variable
            redSquare.style.top = redPos + 'px'; //move down
            redSquare.style.left = redPos + 'px'; //move right
        }
    }
}
function moveBlue() {   
    var blueSquare = document.getElementById("blueSq"); //get blue square by ID
    var bluePos = 350; //initialize position
    var speed = document.getElementById("blueSpeed").value; //get selected speed
    var stepBlueId = setInterval(stepBlue, speed); // use speed for interval timing

    function stepBlue() {
        if (bluePos == 0) { //check if blue square has moved back to the top-left corner
            clearInterval(stepBlueId); // stop the interval when the movement reaches 0 pixels
        } else {
            bluePos--; // Decrement the position variable
            blueSquare.style.top = bluePos + 'px'; // Move up
            blueSquare.style.left = bluePos + 'px'; // Move left
        }
    }
}

// Attach moveRed function to the button click event
document.getElementById("moveRedBtn").addEventListener("click", moveRed);

// Attach moveBlue function to the button click event
document.getElementById("moveBlueBtn").addEventListener("click", moveBlue);
