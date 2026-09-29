// ==========================================
// SpendWise - Budget & Expense Tracker
// ==========================================

// 1. Reusable Functions
function calculateTotalExpenses(expense1, expense2) {
  return expense1 + expense2;
}

function calculateRemainingBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

function displayBudgetSummary(userName, monthlyBudget, totalExpenses, remainingBalance) {
  console.log("========================================");
  console.log(`     SPENDWISE BUDGET REPORT: ${userName.toUpperCase()}`);
  console.log("========================================");
  console.log(`Initial Monthly Budget : $${monthlyBudget.toFixed(2)}`);
  console.log(`Total Expenses Inputted: $${totalExpenses.toFixed(2)}`);
  console.log("----------------------------------------");
  console.log(`Remaining Balance      : $${remainingBalance.toFixed(2)}`);

  if (remainingBalance < 0) {
    console.log("STATUS WARNING: You have exceeded your budget!");
  } else if (remainingBalance === 0) {
    console.log("STATUS NOTICE: You have spent your exact budget limit.");
  } else {
    console.log("STATUS SUCCESS: You are within your budget limit!");
  }
  console.log("========================================");
}

// 2. Application Logic & User Input
function runSpendWise() {
  console.log("Initializing SpendWise Budget Application...");

  // Collect User Input via Prompt
  const userName = prompt("Welcome to SpendWise! Please enter your name:") || "User";
  const rawBudget = prompt("Enter your total monthly budget ($):");
  const rawRent = prompt("Enter your housing/rent expense ($):");
  const rawUtilities = prompt("Enter your utilities expense ($):");

  // Convert String Inputs to Numbers
  const monthlyBudget = parseFloat(rawBudget) || 0;
  const rentExpense = parseFloat(rawRent) || 0;
  const utilitiesExpense = parseFloat(rawUtilities) || 0;

  // Perform Calculations
  const totalExpenses = calculateTotalExpenses(rentExpense, utilitiesExpense);
  const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);

  // Display Clean Output in the Console
  displayBudgetSummary(userName, monthlyBudget, totalExpenses, remainingBalance);
}

// Run application upon script loading
runSpendWise();