function setGridSize() {
    let rowInput = document.getElementById("numRows").value.trim();
    let colInput = document.getElementById("numCols").value.trim();
    if (rowInput === "" || colInput === "") {
        alert("Please enter both row and column values.");
        return;
    }
    let newRows = parseInt(rowInput);
    let newCols = parseInt(colInput);
    if (newRows >= 5 && newCols >= 5 && newRows <= 50 && newCols <= 50) {
        rows = newRows;
        cols = newCols;
        resetGrid();
    }else{
        alert("Please enter values between 5 and 50.");
    }
}

//initialize the table and grids
function createTable() {
    const table = document.getElementById("gameTable");
    table.innerHTML = ""; //clear existing table
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

//put randome boxes
function randomizeGrid() {
    if (!rows || !cols) {
        alert("Please set the grid size first!");
        return;
    }
    //ensure grid is initialized
    grid = Array.from({ length: rows }, () => Array(cols).fill(0));
    //30% of cells will be alive
    let numberOfAliveCells = Math.floor((rows * cols) * 0.3); 
    for (let i = 0; i < numberOfAliveCells; i++) {
        let randomRow = Math.floor(Math.random() * rows);
        let randomCol = Math.floor(Math.random() * cols);
        grid[randomRow][randomCol] = 1; //set to alive
    }
    renderGrid(); 
}


//toggle cell state on click
function toggleCell(i, j) {
    grid[i][j] = grid[i][j] ? 0 : 1;
    renderGrid();
}

//render the grid visually
function renderGrid() {
    const table = document.getElementById("gameTable");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            table.rows[i].cells[j].classList.toggle("alive", grid[i][j] === 1);
        }
    }
}

//compute the number of live neighbors for a cell
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

//update the grid according to Game of Life rules
function updateGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let neighbors = getNeighborsCount(i, j);
            if (grid[i][j] && (neighbors === 2 || neighbors === 3) || (!grid[i][j] && neighbors === 3)){
                nextGrid[i][j] = 1;
            }else{
                nextGrid[i][j] = 0;
            }
        }
    }
    [grid, nextGrid] = [nextGrid, grid]; //swap grids
    renderGrid();
}

//game loop using requestAnimationFrame
function gameLoop() {
    if (!running) return; // Stop the loop if not running
    updateGrid();
    setTimeout(() => requestAnimationFrame(gameLoop), 300); // Run every 300ms
}

//start the simulation
function startGame() {
    if (!running) {
        running = true;
        gameLoop();
    }
}

//stop the simulation
function stopGame() {
    running = false;
}

//reset the grid
function resetGrid() {
    stopGame();
    createTable();
    renderGrid();
}
