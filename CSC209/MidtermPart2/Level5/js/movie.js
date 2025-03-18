// Initialize points with random positions and velocities
function initPoints() {
    points.length = 0; // Clear array
    for (let i = 0; i < NRPTS; i++) {
        let vx = (Math.random() - 0.5) * 4;
        let vy = (Math.random() - 0.5) * 4;
        let velocityMagnitude = Math.sqrt(vx * vx + vy * vy);
        
        points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: vx,
            vy: vy,
            size: 20 + velocityMagnitude * 10, // Fish size based on velocity
            angle: Math.atan2(vy, vx), // Rotation angle based on velocity direction
            color: colors[i % colors.length]
        });
    }
}

// Draw points as fish-like shapes using triangles
function drawPoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach(point => {
        ctx.save();
        ctx.translate(point.x, point.y);
        ctx.rotate(point.angle);

        let size = point.size;

        // Draw fish body (main triangle)
        ctx.beginPath();
        ctx.moveTo(0, -size / 2); // Front point
        ctx.lineTo(-size, size / 2); // Bottom back
        ctx.lineTo(-size, -size / 2); // Top back
        ctx.closePath();
        ctx.strokeStyle = point.color;
        ctx.stroke();

        // Draw tail (smaller triangle)
        ctx.beginPath();
        ctx.moveTo(-size, 0); // Attach tail to the middle of body’s back line
        ctx.lineTo(-size - size * 0.5, size / 3);
        ctx.lineTo(-size - size * 0.5, -size / 3);
        ctx.closePath();
        ctx.strokeStyle = point.color;
        ctx.stroke();

        ctx.restore();
    });
}

// Update positions
function update() {
    if (animate) {
        points.forEach(point => {
            point.x += point.vx;
            point.y += point.vy;
            
            // Bounce off canvas edges
            if (point.x <= 20 || point.x >= canvas.width - 20) point.vx *= -1;
            if (point.y <= 20 || point.y >= canvas.height - 20) point.vy *= -1;
            
            // Recalculate rotation angle
            point.angle = Math.atan2(point.vy, point.vx);
        });
        drawPoints();
        requestAnimationFrame(update);
    }
}


