function createGrid() {
    grid = document.querySelector(".grid");
for (let i = 0; i <= 16; i++) {
    gridRow = document.createElement('div');
    gridRow.classList.add('row');
    gridRow.style.cssText = "flex: auto; display: flex;";
    for (let i = 0; i <= 16; i++) {
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
    gridSquare.classList.add('activated'))
}

function main() {
    createGrid();
}

main();