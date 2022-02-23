const { menu, pause } = require('./helpers/messages');

async function main() {
  let opcion = '';
  while (opcion != '0') {
    opcion = await menu();
    console.log({ opcion });
    if (opcion !== '0') {
      await pause();
    }
    console.clear();
  }
}

main();