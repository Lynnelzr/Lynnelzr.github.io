//initialize points with random positions and velocities
function initPoints() {
    points.length = 0; //clear array
    for (let i = 0; i < NRPTS; i++) {
        points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            color: colors[i % colors.length]
        });
    }
}

//draw points
function drawPoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = point.color;
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.x + 30*point.vx, point.y + 30*point.vy);
        ctx.lineWidth = 5;
        ctx.stroke();
    });
}

//update positions
function update() {
    points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        //bounce off canvas edges
        if (point.x <= 20 || point.x >= canvas.width - 20) point.vx *= -1;
        if (point.y <= 20 || point.y >= canvas.height - 20) point.vy *= -1;
    });
    drawPoints();
    requestAnimationFrame(update);
}

//button to regenerate random positions
const regenerateButton = document.createElement("button");
regenerateButton.textContent = "Generate New Positions";
document.body.appendChild(regenerateButton);
regenerateButton.addEventListener("click", () => {
    initPoints();
    drawPoints();
});

//initialize and start animation
initPoints();
drawPoints();
update();
