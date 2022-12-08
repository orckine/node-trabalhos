const ret = require('./retanguloCJS.js');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Digite o primeiro lado: ', (num1) =>{
    rl.question('Digite o segundo lado: ', (num2) =>{
        ret(num1,num2);
        rl.close();
    })
})