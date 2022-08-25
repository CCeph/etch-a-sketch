function createGrid(sizeSlider) {
    grid = document.querySelector(".grid");
    grid.innerHTML = "";
    for (let i = 0; i < sizeSlider; i++) {
        gridRow = document.createElement('div');
        gridRow.classList.add('row');
        gridRow.style.cssText = "flex: auto; display: flex;";
        for (let i = 0; i < sizeSlider; i++) {
            gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            enableHoverBlack(gridSquare)
            gridSquare.style.cssText = "flex: auto; border-style: solid; border-color: black; border-width: thin;"
            gridRow.appendChild(gridSquare);
        }
        grid.appendChild(gridRow);
    }
}


function enableHoverBlack(gridSquare) {
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
    slider = document.getElementById("gridSlider");
    sizeSlider = slider.value

    grid = document.querySelector(".grid");
    grid.innerHTML = "";

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
    gridSquare.addEventListener('mouseenter', function() {
        const random_hex_color_code = () => {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            return '#' + n.slice(0, 6);
          };
        
        gridSquare.style.cssText += `background-color: ${random_hex_color_code()};`
    });
}

function enableDefaultMode() {
    let button = document.querySelector(".defaultMode");
    button.addEventListener("click", function () {
        let sizeSlider = document.getElementById("gridSlider");
        getGridSize(sizeSlider);
        createGrid(sizeSlider.value);
    });
}

function main() {
    let sizeSlider = document.getElementById("gridSlider");
    getGridSize(sizeSlider);
    createGrid(sizeSlider.value);
    enableColorMode();
    enableDefaultMode();
}

main();