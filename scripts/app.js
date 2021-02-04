let value = 16;  // start value of the grid size
let color;


// set the grid size
function setGridSizeValue() {
    createGrid(document.getElementById('gridvalue').innerHTML);
}

// clears the canvas of cells
function clearOldCells() {
    // get all the cells
    let divs = document.querySelectorAll(`.simplediv`)
    // remove all cells called simplediv
    divs.forEach(element => element.parentNode.removeChild(element));
}

/* 
    create the grid based on passed value
    calculate how many cells there needs to be (value * value)
    create the amount of columns (value)
*/
function createGrid(value) {
    // clear out the old cells before we add new
    clearOldCells();

    const drawingBoard = document.getElementById("grid-container")
    // calculate how many cells there are going to be in the canvas
    let totalCellAmount = value * value; 
    // create the number of colums
    drawingBoard.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    // create the "cells"
    for (let index = 1; index <= totalCellAmount; index++) {
        let div = document.createElement('div');
        div.classList.add('simplediv')
        drawingBoard.appendChild(div)
    }
    setMouseOverListener();
}


createGrid(value);

// add mouse over listener for all the cells
function setMouseOverListener() {

    // get all the cells
    let divs = document.querySelectorAll(`.simplediv`)
    // iterate over all the cells and add an eventlistener
    divs.forEach(element => element.addEventListener("mouseover", paintCellWithColor));
}

function setColor(value) {
    if (!color) {
        color = "black";
    } else {
        color = value;
    }
}

// set initial color to black
setColor("black");

var colorPicker = document.getElementById("color-picker")

// listens for changes made to the input color picker
colorPicker.addEventListener("input", function () {
    setColor(colorPicker.value);
}, false);
// grayscale 

function colorGrayScale() {
    return true;
}

function getColor() {
    return color;
}

// create a random color based on hex
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var ranColor = '#';
    for (var i = 0; i < 6; i++) {
        ranColor += letters[Math.floor(Math.random() * 16)];
    }
    return ranColor;
}

// increases the opacity from 10% to 100% incrementally
function increaseOpacity(value) {
    switch (value) {
        case "0.1":
            return 0.2;
            break;
        case "0.2":
            return 0.3;
            break;
        case "0.3":
            return 0.4;
            break;
        case "0.4":
            return 0.5;
            break;
        case "0.5":
            return 0.6;
            break;
        case "0.6":
            return 0.7;
            break;
        case "0.7":
            return 0.8;
            break;
        case "0.8":
            return 0.9;
            break;
        case "0.9":
            return 1;
            break;
        default:
            break;
    }
}

// paint the cell given a specific color
function paintCellWithColor(e) {
    if (getColor() === "grayscale") {
        e.target.style.background = `#000`
        // set the opacity to 0.1 if it hasn't been defined yet
        if (!e.target.style.opacity) {
            opacityLevel = e.target.style.opacity = "0.1"
        } else if (e.target.style.opacity) {
            e.target.style.opacity = increaseOpacity(e.target.style.opacity);
        }
    // paint the cell with a random color
    } else if (getColor() === "rainbow") {
        e.target.style.background = getRandomColor();

    } else {
        e.target.style.background = getColor();
    }
}

// reset the canvas to white
function resetCanvas() {
    let divs = document.querySelectorAll(`.simplediv`)
    divs.forEach(element => element.style.background = "white");
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
    document.getElementById("openbtn").classList.add('hide')
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("openbtn").classList.remove('hide')

}