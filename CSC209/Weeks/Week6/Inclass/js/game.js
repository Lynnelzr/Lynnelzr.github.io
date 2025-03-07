function setGridSize() {
    let newRows = parseInt(document.getElementById("numRows").value);
    let newCols = parseInt(document.getElementById("numCols").value);
    if (newRows >= 5 && newCols >= 5 && newRows <= 50 && newCols <= 50) {
        rows = newRows;
        cols = newCols;
        resetGrid(); // Reinitialize the grid with the new size
    } else {
        alert("Please enter values between 5 and 50.");
    }
}

// Initialize the table and grids
function createTable() {
    const table = document.getElementById("gameTable");
    table.innerHTML = ""; // Clear existing table
    grid = Array.from({ length: rows }, () => Array(cols).fill(0));
    nextGrid = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("td");
            cell.onclick = () => toggleCell(i, j);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Toggle cell state on click
function toggleCell(i, j) {
    grid[i][j] = grid[i][j] ? 0 : 1;
    renderGrid();
}

// Render the grid visually
function renderGrid() {
    const table = document.getElementById("gameTable");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            table.rows[i].cells[j].classList.toggle("alive", grid[i][j] === 1);
        }
    }
}

// Compute the number of live neighbors for a cell
function getNeighborsCount(x, y) {
    let count = 0;
    const directions = [-1, 0, 1];
    for (let dx of directions) {
        for (let dy of directions) {
            if (dx === 0 && dy === 0) continue;
            let newX = x + dx, newY = y + dy;
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                count += grid[newX][newY];
            }
        }
    }
    return count;
}

// Update the grid according to Game of Life rules
function updateGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let neighbors = getNeighborsCount(i, j);
            nextGrid[i][j] = (grid[i][j] && (neighbors === 2 || neighbors === 3)) || (!grid[i][j] && neighbors === 3) ? 1 : 0;
        }
    }
    [grid, nextGrid] = [nextGrid, grid]; // Swap grids
    renderGrid();
}

// Main game loop using requestAnimationFrame
function gameLoop() {
    if (!running) return; // Stop the loop if not running
    updateGrid();
    setTimeout(() => requestAnimationFrame(gameLoop), 300); // Run every 300ms
}

// Start the simulation
function startGame() {
    if (!running) {
        running = true;
        gameLoop();
    }
}

// Stop the simulation
function stopGame() {
    running = false;
}

// Reset the grid
function resetGrid() {
    stopGame();
    createTable();
    renderGrid();
}

// Initialize the game on page load
document.addEventListener("DOMContentLoaded", () => {
    createTable();
});
