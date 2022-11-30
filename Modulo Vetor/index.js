const media = require('./mediaCJS.js');
const menor = require('./menorCJS.js');
const maior = require('./maiorCJS.js');

const vet = [-2, 3, 4, 24, -5, -16, 26, 16, -24];

console.log('Media: ' + media(vet));

console.log('Menor: ' + menor(vet));

console.log('Maior: ' + maior(vet));