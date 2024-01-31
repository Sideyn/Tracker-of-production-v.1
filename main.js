// Selecting DOM elements
const btnAdd = document.querySelector("#add");
const btnDelete = document.querySelector("#delete");
const btnRestart = document.querySelector("#restart");
const table = document.querySelector("table");
const itemText = document.querySelector("#itemText");

// Variables for tracking quantity and calculations
let quantity;
let cumul = 0;
let newRow;
let cell1;
let cell2;
let cell3;
let result1;
let result2;

// Function to initialize the table with user input
function init() {
  quantity = parseFloat(prompt("How much do you need to make? "));
  newRow = table.insertRow(-1);
  cell1 = newRow.insertCell(0);
  cell1.textContent = "0";
  cell2 = newRow.insertCell(1);
  cell2.textContent = "0";
  cell3 = newRow.insertCell(2);
  cell3.textContent = quantity;
}
init();

// Event listener for the "Calculate" button
btnAdd.addEventListener("click", () => {
  let inputValue = parseFloat(itemText.value);

  if (!isNaN(inputValue) && quantity > 0) {
    newRow = table.insertRow(-1);
    cell1 = newRow.insertCell(0);
    cell1.textContent = inputValue;

    // Function call for calculation 1
    result1 = calcul1(inputValue, cumul);
    cumul = result1;

    cell2 = newRow.insertCell(1);
    cell2.textContent = result1;

    // Function call for calculation 2
    result2 = calcul2(quantity, inputValue);
    quantity = result2;

    cell3 = newRow.insertCell(2);
    cell3.textContent = result2;

    itemText.value = "";
  }

  // Display alerts based on quantity status
  if (quantity == 0) {
    alert("You are finished.");
  } else if (quantity < 0) {
    alert("You've made too many products: " + quantity);
  }
});

// Event listener for the "Delete" button
btnDelete.addEventListener("click", () => {
  const confirmation = window.confirm(
    "Are you sure you want to delete the last line?"
  );
  if (confirmation) {
    const lastRow = table.rows[table.rows.length - 1];
    const lastRowValue = parseFloat(lastRow.cells[0].textContent);
    cumul -= lastRowValue;

    const lastQuantity = parseFloat(lastRow.cells[2].textContent);
    quantity += lastQuantity;

    table.deleteRow(-1);
  }
});

// Event listener for the "Restart" button
btnRestart.addEventListener("click", () => {
  location.reload();
});

// Function for addition calculation
function calcul1(x, y) {
  return x + y;
}

// Function for subtraction calculation
function calcul2(x, y) {
  return x - y;
}
