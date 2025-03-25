// Prompt the user to enter the maximum limit for the loops.
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

// Input validation
if (isNaN(maxLimit) || maxLimit <= 0 || !Number.isInteger(maxLimit)) {
  console.log("Invalid input. Please enter a positive integer.");
  return;
}

// Initialize counters.
let counter1 = 0;
let counter2 = 0;

// Use nested loops to iterate and print the map of iterations.
console.log("Result:");
for (counter1 = 0; counter1 <= maxLimit; counter1++) {
  for (counter2 = 0; counter2 <= maxLimit; counter2++) {
    const addedValue = counter1 + counter2;
    console.log(`[${counter1}] [${counter2}] Added value is ${addedValue}`);
  }
}
