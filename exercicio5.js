function exercicio(string){
    let result = '';
    for(let i =0;i<string.length;i++){
        result += string[string.length-i-1];
    }
    return result;
};
console.log(exercicio('JoaoRicardo'))