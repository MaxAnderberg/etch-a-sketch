

// set the grid size
function setGridSizeValue() {
    createGrid(document.getElementById('gridSize').innerHTML);
}

function clearOldCells() {
    
    // get all the cells
    let divs = document.querySelectorAll(`.simplediv`)
    // remove all cells called simplediv
    divs.forEach(element => element.parentNode.removeChild(element));
}

function createGrid(value) {

    // clear out the old cells before we add new
    clearOldCells();

    const drawingBoard = document.getElementById("grid-container")
    let totalCellAmount = value * value;

    drawingBoard.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    for (let index = 1; index <= totalCellAmount; index++) {
        let div = document.createElement('div');
        div.classList.add('simplediv')
        drawingBoard.appendChild(div)
    }

    setMouseOverListener();
}

let value = 16;
createGrid(value);

function setMouseOverListener() {

    // get all the cells
    let divs = document.querySelectorAll(`.simplediv`)
    // iterate over all the cells and add an eventlistener
    divs.forEach(element => element.addEventListener("mouseover", setColor));
}

let color = "red"
// color the cell
function setColor(e) {
    e.target.style.background = color
}

// reset the canvas to white
function resetCanvas() {
    divs.forEach(element => element.style.background = "white");
}