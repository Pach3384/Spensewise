# SpendWise - Personal Budget Tracker

SpendWise is a dynamic web-based budget tracking application designed to help users manage their personal finances effectively by collecting income and expense data, performing automatic calculations, and outputting structured financial summaries.

## JavaScript Concepts Implemented

- **Variables (`const`, `let`)**: Used to store user inputs, financial metrics, and calculated outcomes safely.
- **Data Types & Type Conversion**: Handling string inputs from user prompts and converting them into floating-point numbers using `parseFloat()`.
- **User Input Handling**: Interacting directly with the user via `prompt()` dialogs.
- **Arithmetic Calculations**: Implementing mathematical operations to compute totals and remaining balances.
- **Functions & Parameters**: Writing modular, reusable functions with parameter passing and returned values.
- **Template Literals**: Utilizing ES6 backticks (``` `` ```) to format console output messages cleanly.

## How Variables Are Used

Variables store crucial state data throughout the application lifecycle:
- **`userName`**: Holds the user's name for personalized reports.
- **`monthlyBudget`**: Stores the user's starting budget cap.
- **`rentExpense` & `utilitiesExpense`**: Hold individual expense values inputted by the user.
- **`totalExpenses` & `remainingBalance`**: Store calculated totals returned by functions.

## How User Input Is Collected

User inputs are collected dynamically using standard browser `prompt()` dialogs upon loading the webpage. Because values returned by `prompt()` are primitive `String` types, `parseFloat()` is applied to cast them into numeric values suitable for calculations.

## How Calculations Are Performed

Calculations are computed using modular JavaScript arithmetic:
1. **Total Expenses Calculation**: `totalExpenses = expense1 + expense2`
2. **Remaining Balance Calculation**: `remainingBalance = monthlyBudget - totalExpenses`

Conditional logic (`if`/`else`) checks whether the remaining balance is positive, zero, or negative to display tailored feedback messages.

## How Functions Help Organize the Code

Functions keep the SpendWise codebase structured, readable, and maintainable according to the Single Responsibility Principle:
- **`calculateTotalExpenses()`**: Dedicated strictly to adding up expenses.
- **`calculateRemainingBalance()`**: Dedicated to computing net remaining funds.
- **`displayBudgetSummary()`**: Manages logging structured, visually formatted summaries into the developer console.
- **`runSpendWise()`**: Serves as the primary controller function orchestrating user prompts and app execution.