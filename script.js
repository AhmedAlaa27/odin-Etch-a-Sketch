const container = document.querySelector(".container")

function createGrid(rows = 16) {

    // Clear existing grid
    container.innerHTML = '';

    // Calculate square dimensions
    const containerStyle = getComputedStyle(container);
    const containerWidth = parseInt(containerStyle.getPropertyValue('width'));
    const containerHeight = parseInt(containerStyle.getPropertyValue('height'));
    const squareSize = containerWidth / rows;

    // Create grid
    for (let i = 0; i < rows * rows; i++) {

        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${squareSize}px`;
        box.style.height = `${squareSize}px`;
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "black";
        });
        container.appendChild(box);

    }
}


let resizeButton = document.querySelector(".resize")

resizeButton.addEventListener("click", () => {
    let input = prompt("Enter a size (1-100)")
    if (input > 100 || input < 1) {
        alert("The number must be between (1-100)")
        return;
    }
    createGrid(input)
})

// Initial grid creation
createGrid()