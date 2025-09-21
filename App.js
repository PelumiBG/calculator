
import { subtract, multiply, divide, add } from './mymodule/calculator.js';

import chalk from 'chalk';

import path from 'path'
import { fileURLToPath } from "url";

import readline from 'readline-sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(`Current directory: ${__dirname}`);

console.log(chalk.bold.red('My Calculator App!'));
console.log(chalk.bold.greenBright("BD/2025/TC3/076"));

const num1 = readline.questionInt(chalk.redBright('Enter Number to subtract= '));
const num2 = readline.questionInt(chalk.redBright('Enter number to = '));
console.log(chalk.red(`${num1} - ${num2}: ${subtract(num1, num2)}`));

const num3 = readline.questionInt(chalk.gray('Enter Number to multiply= '));
const num4 = readline.questionInt(chalk.gray('Enter Number to = '));
console.log(chalk.yellow(`${num3} * ${num4}: ${multiply(num3, num4)}`));

const num5 = readline.questionInt(chalk.red('Enter Number to divide= '));
const num6 = readline.questionInt(chalk.red('Enter Number = '));
console.log(chalk.magenta(`${num5} / ${num6} : ${divide(num5, num6)}`));

const num7 = readline.questionInt(chalk.cyan('Enter Number to add= '));
const num8  = readline.questionInt(chalk.cyan('Enter Number = '));
console.log(chalk.grey(`${num7} + ${num8}: ${add(num7, num8)}`));