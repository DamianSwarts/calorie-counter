// Accessing various elements in the HTML with their given ids dto use in the JS code.
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false; //Variable initialized for later use in the program

// Function to clean the string input by the user and ensure a number.
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
} 