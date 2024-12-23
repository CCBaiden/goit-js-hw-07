function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor.padStart(6, "0");
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", function () {
  const inputValue = document.querySelector("#controls input").value;
  const numberOfBoxes = Number(inputValue);

  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    destroyBoxes();
    createBoxes(numberOfBoxes);
    document.querySelector("#controls input").value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);
