const container = document.querySelector(".container")

for (let i = 1; i <= 256; i++) {
    let button = document.createElement("div")
    button.classList.toggle("box")
    container.appendChild(button)
}