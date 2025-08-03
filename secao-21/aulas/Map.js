// const pessoas = [
//     'Guilherme',
//     'Ana',
//     'Jamilton'
// ]

// let func = (item, indice, arr) =>{
//     return {nome: item};
// }

// const novoArray = pessoas.map(func)
// console.log(novoArray)

// 

const produtosDolar = [
    {produto: 'Notebook', preco: 1200, moeda: '$'},
    {produto: 'Celular', preco: 800, moeda: '$'}
]



// const convertido = produtosDolar.map(function(item){
//     let preco = item.preco * 3 
//     return {produto: 'NoteBook', preco: preco, moeda: 'R$'}

// })
// console.log(convertido);

const MetodoArrow = produtosDolar.map(item => {
    let preco = item.preco * 3 
    return {produto: 'NoteBook', preco: preco, moeda: 'R$'}
})
console.log(MetodoArrow)