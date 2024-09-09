const {faturamento_diario} = require('./database.json')

function exercicio(){
    let maiorValor = -Infinity;
    let menorValor = Infinity;
    let media = 0;
    let superiores=0;
    let nulls = 0
    for(let i =0;i<faturamento_diario.length;i++){
        if(faturamento_diario[i].valor>maiorValor){
            maiorValor=faturamento_diario[i].valor;
        }if(faturamento_diario[i].valor<menorValor && faturamento_diario[i].valor !== null){
            menorValor = faturamento_diario[i].valor
        }
        if(faturamento_diario[i].valor ==null){
            nulls++
        }
        media+= faturamento_diario[i].valor;
    }
    media = +(media/(faturamento_diario.length-nulls)).toFixed(2)
    for(let i =0;i<faturamento_diario.length;i++){
        if(faturamento_diario[i].valor>media){
            superiores++
        }
    }
    return{maiorValor,media,menorValor,superiores}
}
console.log(exercicio());