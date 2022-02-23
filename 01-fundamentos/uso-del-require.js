'use strict';

const fs = require('fs');
const path = require('path');

function tablaMultiplicar(numero) {
  return new Promise((resolve, reject) => {
    let texto = '';
    for (let i = 0; i <= 10; i++) {
      texto += `${numero} x ${i} = ${numero * i}\n`;
    }
    let fileName = path.join(__dirname, `tabla-${numero}.txt`)
    fs.writeFile(fileName, texto, (err) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(`archivo de la table del ${numero} creado!`);
      }
    });
  });
}

