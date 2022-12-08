module.exports = function menor(vet_){
    var menor = vet_[0];
    vet_.forEach(element => {
        if(element<menor) menor = element;
    });
    return menor;
}