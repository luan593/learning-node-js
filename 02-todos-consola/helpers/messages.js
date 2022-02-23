const chalk = require('chalk');
const { createInterface } = require('readline');

const green = chalk.hex('343a40').bgGreenBright;

function menu() {
  return new Promise(resolve => {
    console.log(green('======================'));
    console.log(green('        Todos         '));
    console.log(green('======================'));
    console.log(`${green(1.)} `);
    console.log(`${green(2.)} `);
    console.log(`${green(3.)} `);
    console.log(`${green(4.)} `);
    console.log(`${green(5.)} `);
    console.log(`${green(6.)} `);
    console.log(`0. \n`);

    const readline = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('>> Ingrese una opcion: ', (opt) => {
      readline.close();
      resolve(opt);
    }); 
  });
}

function pause() {
  return new Promise(resolve => {

    const readline = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(`>> Presione ${green('ENTER')} para continuar`, (opt) => {
      readline.close();
      resolve();
    });
  });
}

module.exports = {
  menu,
  pause
}