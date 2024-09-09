function exercicio(){
    const obj=[
        {estado:'SP',faturamento:67836.43},
        {estado:'RJ',faturamento:36678.66},
        {estado:'MG',faturamento:29229.88},
        {estado:'ES',faturamento:27165.48},
        {estado:'Outros',faturamento:9849.53},
    ]
    let sum = obj.reduce((acc,curr)=>acc+=curr.faturamento,0)
    return obj.map((e)=>{
        return{estado:e.estado,porcetagem:`${((e.faturamento/sum)*100).toFixed(0)}%`}
    })
}
console.log(exercicio())

//Recebendo um objeto e não um array,
function exercicio2(){
    const obj={
        SP:67836.43,
        RJ:36678.66,
        MG:29229.88,
        ES:27165.48,
        Outros:9849.53
    }
    let sum = Object.values(obj).reduce((acc,curr)=>acc+curr,0);
    return Object.keys(obj).map((e)=>{
        return{[e]:`${((obj[e]/sum)*100).toFixed(0)}%`}
    })
}
console.log(exercicio2())