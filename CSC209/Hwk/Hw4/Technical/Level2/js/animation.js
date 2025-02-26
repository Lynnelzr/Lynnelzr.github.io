document.addEventListener("DOMContentLoaded", function () {
    // Define an array of squares with their properties
    var squares = [
        { id: "redSq", positionTop: 0, positionLeft:0, y: 1, x:1, speedId: "redSpeed", buttonId: "moveRedBtn" },
        { id: "blueSq", positionTop: 350, positionLeft:350, y: -1, x:-1, speedId: "blueSpeed", buttonId: "moveBlueBtn" },
        { id: "greenSq", positionTop: 350, positionLeft:0, y: -1, x:1, speedId: "greenSpeed", buttonId: "moveGreenBtn" },
        { id: "blackSq", positionTop: 0, positionLeft:350, y: 1, x:-1, speedId: "blackSpeed", buttonId: "moveBlackBtn" }
        
    ];

    // Function to move a specific square
    function moveSquare(squareObj) {
        let square = document.getElementById(squareObj.id);
        let speed = parseInt(document.getElementById(squareObj.speedId).value);
        let positionTop = squareObj.positionTop; // Get initial position
        let positionLeft = squareObj.positionLeft; // Get initial position
        let y = squareObj.y; // Get movement direction
        let x = squareObj.x;

        // Prevent multiple intervals for the same square
        if (square.dataset.moving === "true") return;
        square.dataset.moving = "true";

        let stepId = setInterval(() => {
            if ((y === 1 && positionTop >= 350) || (y === -1 && positionTop <= 0) || (x === -1 && positionLeft <= 0) ||  (x === 1 && positionLeft >= 350)) {
                clearInterval(stepId);
                square.dataset.moving = "false";
            } else {
                positionTop += y;
                positionLeft += x;
                square.style.top = positionTop + 'px';
                square.style.left = positionLeft + 'px';
            }
        }, speed);
        
    }

    // Attach each button to its corresponding square
    squares.forEach(squareObj => {
        document.getElementById(squareObj.buttonId).addEventListener("click", () => moveSquare(squareObj));
    });

    document.getElementById("moveAllBtn").addEventListener("click", function () {
        squares.forEach(moveSquare);
    });
});
