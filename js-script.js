INITIAL_SQUARES = 16;
CONTAINER_SIDE = 960;

let numSquares = INITIAL_SQUARES;

getGridSize = () => {
    let userInput = 101;
    
    while (true) {
        userInput = window.prompt("Enter Grid Size");
        if (userInput === null || userInput === "") return;
        else if (Number(userInput) > 1 & Number(userInput) < 101) {
            generateGrid(Number(userInput));
            break;
        }
    }
}


function changeColor(event, color) {
    event.target.style.background = color
}


generateGrid = (numSquares) => {
    const container = document.querySelector("#container");
    container.textContent = ""

    const squareSide = CONTAINER_SIDE / numSquares + "px"
    console.log(squareSide)

    for (let i = 0; i < numSquares ** 2; i++) {
        // container.textContent = ""
        const square = document.createElement("div")
        square.classList.add("square");
        square.addEventListener("mouseover", (e) => changeColor(e, "red"));
        square.addEventListener("mouseout", (e) => changeColor(e, "white"));
        square.style.height = squareSide
        square.style.width = squareSide
        container.appendChild(square);
    }
}

generateGrid(INITIAL_SQUARES)

btn = document.querySelector("#btn")
btn.addEventListener("click", () => getGridSize())
