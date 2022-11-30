module.exports = function dataExtenso(data_){
    const mes = {
        1 : 'janeiro',
        2 : 'fevereiro',
        3 : 'março',
        4 : 'abril',
        5 : 'maio',
        6 : 'junho',
        7 : 'julho',
        8 : 'agosto',
        9 : 'setembro',
        10 : 'outubro',
        11 : 'novembro',
        12 : 'dezembro'
    }
    const sem = {
        0 : 'domingo',
        1 : 'segunda-feira',
        2 : 'terca-feira',
        3 : 'quarta-feira',
        4 : 'quinta-feira',
        5 : 'sexta-feira',
        6 : 'sabado'
    }
    console.log(sem[data_.getDay()] +', '+ data_.getDate() +' de '+ mes[data_.getMonth()] + ' de ' + data_.getFullYear());
}