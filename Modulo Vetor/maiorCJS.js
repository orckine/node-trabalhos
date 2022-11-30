module.exports = function menor(vet_){
    var maior = vet_[0];
    vet_.forEach(element => {
        if(element>maior) maior = element;
    });
    return maior;
}