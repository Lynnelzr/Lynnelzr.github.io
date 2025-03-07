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

//toggle cell state on click
function toggleCell(i, j) {
    grid[i][j] = grid[i][j] ? 0 : 1;
    renderGrid();
}

//render the grid 
function renderGrid() {
    const table = document.getElementById("gameTable");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            //if grid[i][j] is 1, the cell should be marked as "alive" 
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

//update the grid according to the rules
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

//next step
window.nextStep = function nextStep(){
    updateGrid();
};

//initialize the game on page load
document.addEventListener("DOMContentLoaded", () => {
    createTable();
});
