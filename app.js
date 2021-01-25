

const drawingBoard = document.getElementById("grid-container")
let value = 16; // TODO: extract value from input from website
drawingBoard.style.gridTemplateColumns = `repeat(${value}, 0fr)`;

totalCellAmount = value * value;

for (let index = 1; index <= totalCellAmount; index++) {
    let div = document.createElement('div');
    div.classList.add('simplediv')
    drawingBoard.appendChild(div)

}
let divs = document.getElementsByClassName('simplediv');


// get all the cells
divs = document.querySelectorAll(`.simplediv`)
// iterate over all the cells and add an eventlistener
divs.forEach(element => element.addEventListener("mouseover", setColor));

color = "red"
// color the cell
function setColor(e) {
    e.target.style.background = color
}

// reset the canvas to white
function resetCanvas() {
    divs.forEach(element => element.style.background = "white");
}


