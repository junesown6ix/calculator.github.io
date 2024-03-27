

// Get references to the screen element and all buttons
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".calc-button");

let currentNumber = ""; // Stores the current number being entered
let previousNumber = null; // Stores the previous number for calculations
let operation = null; // Stores the selected operation (+, -, *, /)

// Function to update screen content
function updateScreen(value) {
  screen.textContent = value;
}

// Function to clear the screen and reset variables
function clearAll() {
  currentNumber = "";
  previousNumber = null;
  operation = null;
  updateScreen("0");
}

// Function to handle number button clicks
function handleNumber(number) {
  currentNumber += number;
  updateScreen(currentNumber);
}

// Function to handle operator button clicks
function handleOperator(operator) {
  previousNumber = parseFloat(currentNumber);
  currentNumber = "";
  operation = operator;
}

// Function to perform calculations based on the selected operator
function calculate() {
  if (currentNumber === "" || previousNumber === null || operation === null) return;

  let result = null;
  const currentFloat = parseFloat(currentNumber);

  switch (operation) {
    case "+":
      result = previousNumber + currentFloat;
      break;
    case "-":
      result = previousNumber - currentFloat;
      break;
    case "*":
      result = previousNumber * currentFloat;
      break;
    case "/":
      if (currentFloat === 0) {
        alert("Error: Division by zero!");
        return;
      }
      result = previousNumber / currentFloat;
      break;
  }

  previousNumber = result;
  currentNumber = result.toString(); // Convert result back to string for screen display
  operation = null;
  updateScreen(currentNumber);
}

// Function to handle the equals button click
function handleEquals() {
  calculate();
}

// Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    switch (buttonValue) {
      case "C":
        clearAll();
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        handleNumber(buttonValue);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperator(buttonValue);
        break;
      case "=":
        handleEquals();
        break;
    }
  });
});

// Update screen with initial value (0)
updateScreen("0");