function exercicio(num){
    let mensagemPertence = 'Este número PERTENCE a sequência de Fibonacci'
    let prev = 0;
    let prev2= 0;
    let curr = 1;
    if(num==0 || num==1){
        return mensagemPertence;
    }
    for(let i =0;i<=num;i++){
        if(curr==num){
            return mensagemPertence;
        }
        prev = curr;
        curr = prev2+curr;
        prev2=prev;
    }
    return 'Este número NÃO PERTENCE a sequência de Fibonacci'
}
console.log(exercicio(14))