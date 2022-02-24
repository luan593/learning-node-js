const inquirer = require('inquirer');
const chalk = require('chalk');

const green = chalk.hex('343a40').bgGreenBright;

const questions = [
  {
    type: 'list',
    name: 'main-menu-option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        name: `${green('1.')} Crear tarea`,
        value: '1',
      },
      {
        name: `${green('2.')} Listar tareas`,
        value: '2',
      },
      {
        name: `${green('3.')} Listar tareas completadas`,
        value: '3',
      },
      {
        name: `${green('4.')} Listar tareas pendientes`,
        value: '4',
      },
      {
        name: `${green('5.')} Completar tarea(s)`,
        value: '5',
      },
      {
        name: `${green('6.')} Borrar tarea`,
        value: '6',
      },
      {
        name: `${green('0.')} Salir`,
        value: '0',
      }
    ],
  }
];

async function inquirerMenu() {
  console.clear();
  console.log(green('======================'));
  console.log(green('        Todos         '));
  console.log(green('======================'));
  try {
    const option = await inquirer.prompt(questions);
    return option['main-menu-option'];
  }
  catch (error) {
    throw error.message;
  }
}

async function pause() {
  try {
    await inquirer.prompt(
      [
        {
          type: 'input',
          name: 'pause',
          message: `presione ${green('ENTER')} para continuar`,
        }
      ]
    )
  }
  catch (error) {
    throw error.message;
  }
}

async function readInput(message) {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length > 0) return true;
        else {
          return 'Por favor ingresa la descripcion de la tarea';
        }
      }
    }
  ];
  try {
    const input = await inquirer.prompt(question);
    return input['description']
  }
  catch(error) {
    throw(error.message);
  }
}

module.exports = {
  inquirerMenu,
  pause,
  readInput
}