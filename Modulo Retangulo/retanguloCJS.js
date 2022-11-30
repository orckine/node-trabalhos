module.exports = function ret(num1, num2) {
    const area = num1*num2;
    console.log('Área:', area);
    if(num1==num2){
        console.log('É um quadrado.');
    } else {
        console.log('Não é um quadrado');
    }
}