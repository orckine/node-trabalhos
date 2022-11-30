module.exports = function media(vet_){
    var soma = 0;
    vet_.forEach(element => {
        soma+=element;
    });
    return soma/vet_.length;
}