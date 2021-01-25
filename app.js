

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
color = "red"


// get all the cells
divs = document.querySelectorAll(`.simplediv`)
// iterate over all the cells and add an eventlistener
divs.forEach(element => element.addEventListener("mouseover", setColor));

    function setColor(e){
        e.target.style.background=color
}




