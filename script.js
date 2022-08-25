function createGrid(sizeSlider) {
    grid = document.querySelector(".grid");
    for (let i = 0; i < sizeSlider; i++) {
        gridRow = document.createElement('div');
        gridRow.classList.add('row');
        gridRow.style.cssText = "flex: auto; display: flex;";
        for (let i = 0; i < sizeSlider; i++) {
            gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            enableHoverColor(gridSquare)
            gridSquare.style.cssText = "flex: auto; border-style: solid; border-color: black; border-width: thin;"
            gridRow.appendChild(gridSquare);
        }
        grid.appendChild(gridRow);
    }
}


function enableHoverColor(gridSquare) {
    gridSquare.addEventListener('mouseenter', () =>
    gridSquare.classList.add('activated'));
}

function getGridSize(sizeSlider) {
    let gridSize = document.getElementById("gridSize")
    gridSize.textContent = `${sizeSlider.value}x${sizeSlider.value}` //displays the default grid size.

    sizeSlider.oninput = function() {
        grid = document.querySelector(".grid");
        grid.innerHTML = "";
        createGrid(sizeSlider.value);
        gridSize.textContent = `${sizeSlider.value}x${sizeSlider.value}`
    }
}

function enableColorMode() {
    let button = document.querySelector(".colorMode");
    button.addEventListener("click", createColorGrid);
}

function createColorGrid() {
    console.log("This exists");
}

function main() {
    let sizeSlider = document.getElementById("gridSlider");
    getGridSize(sizeSlider);
    createGrid(sizeSlider.value);
    enableColorMode();
}

main();