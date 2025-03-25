// Prompt the user to input their score.
const score = parseInt(prompt("Enter your score:"));

// Input validation: Check if the input is a valid number between 0 and 100.
if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid input. Please enter a number between 0 and 100.");
  return; // Exit the program if the input is invalid.
}

// Assign grades using nested ternary operators.
const grade =
  score >= 97
    ? "Your equivalent Grade is “1.00” Excellent"
    : score >= 94
    ? "Your equivalent Grade is “1.25” Excellent"
    : score >= 91
    ? "Your equivalent Grade is “1.50” Above Average"
    : score >= 88
    ? "Your equivalent Grade is “1.75” Above Average"
    : score >= 85
    ? "Your equivalent Grade is “2.00” Average"
    : score >= 82
    ? "Your equivalent Grade is “2.25” Average"
    : score >= 79
    ? "Your equivalent Grade is “2.50” Below Average"
    : score >= 76
    ? "Your equivalent Grade is “2.75” Below Average"
    : score === 75
    ? "Your equivalent Grade is “3.00” Below Average"
    : score >= 72
    ? "Your equivalent Grade is “4.00” Poor"
    : "Your equivalent Grade is “5.00” Poor";

let remarks;
if (score >= 90) {
  remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
  remarks = "AVERAGE PASS";
} else if (score >= 75) {
  remarks = "LOW PASS";
} else {
  remarks = "FAILED, Needs Improvement";
}

console.log("Result:");
console.log(grade);
console.log("Final Remarks:", remarks);
