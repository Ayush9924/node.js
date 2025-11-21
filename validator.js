// a*
// a+
import validator from "validator";
import chalk from "chalk"
// const validator = require("validator")

const res = validator.isEmail("abc@a@gmail.com")
console.log(res)

console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res))


