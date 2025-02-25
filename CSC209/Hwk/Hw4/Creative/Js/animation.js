document.addEventListener("DOMContentLoaded", function () {
    // Define an array of images with their properties
    var images = [
        { id: "redSq", positionTop: 0, positionLeft: 0, y: 1, x: 1, speedId: "redSpeed", buttonId: "moveRedBtn" },
        { id: "blueSq", positionTop: 350, positionLeft: 350, y: -1, x: -1, speedId: "blueSpeed", buttonId: "moveBlueBtn" },
        { id: "greenSq", positionTop: 350, positionLeft: 0, y: -1, x: 1, speedId: "greenSpeed", buttonId: "moveGreenBtn" },
        { id: "blackSq", positionTop: 0, positionLeft: 350, y: 1, x: -1, speedId: "blackSpeed", buttonId: "moveBlackBtn" }
    ];

    // Function to move a specific image
    function moveImage(imgObj) {
        let img = document.getElementById(imgObj.id);
        let speed = parseInt(document.getElementById(imgObj.speedId).value);
        let positionTop = imgObj.positionTop;
        let positionLeft = imgObj.positionLeft;
        let y = imgObj.y;
        let x = imgObj.x;

        // Prevent multiple intervals for the same image
        if (img.dataset.moving === "true") return;
        img.dataset.moving = "true";

        let stepId = setInterval(() => {
            if ((y === 1 && positionTop >= 350) || (y === -1 && positionTop <= 0) || 
                (x === -1 && positionLeft <= 0) ||  (x === 1 && positionLeft >= 350)) {
                clearInterval(stepId);
                img.dataset.moving = "false";
            } else {
                positionTop += y;
                positionLeft += x;
                img.style.top = positionTop + 'px';
                img.style.left = positionLeft + 'px';
            }
        }, speed);
    }

    // Attach each button to its corresponding image
    images.forEach(imgObj => {
        document.getElementById(imgObj.buttonId).addEventListener("click", () => moveImage(imgObj));
    });

    document.getElementById("moveAllBtn").addEventListener("click", function () {
        images.forEach(moveImage);
    });
});
