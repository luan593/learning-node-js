const { inquirerMenu, pause } = require('./helpers/inquirer');
const { Todo } = require('./models/todo');
const { Todos } = require('./models/todos');

async function main() {
  let opcion = '';
  while (opcion != '0') {
    opcion = await inquirerMenu();
    if (opcion !== '0') {
      await pause();
    }
  }
}

main();