let tasks = [];

const toDoColumn = document.querySelector("#to-do .cards");
const inProgressColumn = document.querySelector("#in-progress .cards");
const doneColumn = document.querySelector("#done .cards");
const trash = document.getElementById("trash");

let draggedCard = null;

// const newCard = document.createElement("div"); // cria um elemento (ainda "solto", não tá na página)
// newCard.textContent = "oi"; // define o texto de dentro dele
// newCard.classList.add("card"); // adiciona uma classe a ele
// newCard.draggable = true;
// toDoColumn.appendChild(newCard); // insere o elemento dentro de outro, na página

// newCard.addEventListener("dragstart", function () {
//   draggedCard = newCard;
// });

const input = document.getElementById("new-task-input");
const button = document.getElementById("add-task-btn");

button.addEventListener("click", function () {
  tasks.push({ id: Date.now(), text: input.value, column: "to-do" });
  renderTasks();
});

function renderTasks() {
  toDoColumn.innerHTML = "";
  inProgressColumn.innerHTML = "";
  doneColumn.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.textContent = task.text;
    card.classList.add("card");
    card.draggable = true;
  });
}

toDoColumn.addEventListener("dragover", function (event) {
  event.preventDefault();
});

toDoColumn.addEventListener("drop", function (event) {
  toDoColumn.appendChild(draggedCard);
});

inProgressColumn.addEventListener("dragover", function (event) {
  event.preventDefault();
});

inProgressColumn.addEventListener("drop", function (event) {
  inProgressColumn.appendChild(draggedCard);
});

doneColumn.addEventListener("dragover", function (event) {
  event.preventDefault();
});

doneColumn.addEventListener("drop", function (event) {
  doneColumn.appendChild(draggedCard);
});

trash.addEventListener("dragover", function (event) {
  event.preventDefault();
  trash.classList.add("hover");
});

trash.addEventListener("dragleave", function () {
  trash.classList.remove("hover");
});

trash.addEventListener("drop", function (event) {
  draggedCard.remove();
  trash.classList.remove("hover");
});
