const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    let boxesHTML = "";
    for (let i = 0; i < amount; i++) {
      boxesHTML += createBox(i);
    }
    input.value = "";
    boxes.innerHTML = boxesHTML;
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBox(amount) {
  const size = 30 + amount * 10;
  return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
