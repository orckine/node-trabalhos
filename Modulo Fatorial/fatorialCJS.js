module.exports = function fatorial(num1){
    if(num1 == 1) return num1;
    else return num1*fatorial(num1-1);
}