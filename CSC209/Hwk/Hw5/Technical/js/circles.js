//initialize points with random positions and velocities
function initPoints() {
    points.length = 0; //clear array
    for (let i = 0; i < NRPTS; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        points.push({
            x: x,
            y: y,
            originalX: x, //store initial position
            originalY: y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            color: colors[i % colors.length]
        });
    }
}

//reset to original position
function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach(point => {
        point.x = point.originalX;
        point.y = point.originalY;
    });
    drawPoints();
}

//draw points
function drawPoints() {
    if (checkbox.checked == false){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = point.color;
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.x + 30 * point.vx, point.y + 30 * point.vy);
        ctx.lineWidth = 5;
        ctx.stroke();
    });
}

//update positions
function update() {
    if (animate == true){
        points.forEach(point => {
            let step = -1
            while (step < NRSTEPS){
                point.x += point.vx;
                point.y += point.vy;
                if (checkbox.checked == true){
                    drawPoints();
                }
                step++;
            }
            step = -1;
        });
        if (checkbox.checked == false)drawPoints();
    }   
}


//initialize and start animation
initPoints();
drawPoints();
