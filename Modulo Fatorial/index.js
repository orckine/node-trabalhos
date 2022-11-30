const fatorial = require('./fatorialCJS.js');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Digite um numero: ', (num) =>{
    console.log('Fatorial: ', fatorial(num));
    rl.close();
})