// task


import chalk from "chalk";

// print error in bright red and success messages in green with different style

console.log(chalk.redBright("Error: Something went wrong!"));

// Success message - green with style
console.log(chalk.green.bold("Success: Operation completed!"));

// display "warning low disk space" with yellow background and black text.

console.log(chalk.bgYellow.black("Warning: Low disk space!"));

// display default error req bold, rest white -- nested style(chalk.red() + chalk.white())

console.log(chalk.red.bold("Error:") + chalk.white(" Request failed!"));


// dynamic data styling -- if=eslepr switch usage in differnet colors based on values
const status = "warning"; 

if (status == "success") {
  console.log(chalk.green("Task successful!"));
} else if (status == "error") {
  console.log(chalk.red("Task failed!"));
} else if (status == "warning") {
  console.log(chalk.yellow("Low disk space!"));
} else {
  console.log(chalk.white("Status unknown."));
}
