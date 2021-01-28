

// set the grid size
function setGridSizeValue() {
    createGrid(document.getElementById('gridvalue').innerHTML);
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
    divs.forEach(element => element.addEventListener("mouseover", paintCellWithColor));
}

let color;
function setColor(value){
    if(!color){
        color = "black";
    } else {
        color = value;
    }
}

// this is the initial value
setColor("black");

var colorPicker = document.getElementById("color-picker")

// listens for changes made to the input color picker
colorPicker.addEventListener("input", function() {
    setColor(colorPicker.value);
}, false); 

function getColor(){
    console.log(color)
    return color;
}

// color the cell
function paintCellWithColor(e) {
    e.target.style.background = getColor();
}

// reset the canvas to white
function resetCanvas() {
    let divs = document.querySelectorAll(`.simplediv`)
    divs.forEach(element => element.style.background = "white");
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}