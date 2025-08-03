//Objetos literais - melhorias

let nome = 'Notebook';
let preco = 1200;

const produto = { // {} -> define que e um objeto
    /*
        Quando o nome da variavel for o mesmo podemos omitir ela na hora de criar um objeto literal
    */
    nome,
    preco,

    exibirProduto(){
        console.log(`Nome do produto: ${this.nome}, Preco do produto: ${this.preco}, Categoria do produto: ${this.categoria}`)
    }
};

const pro = produto;
const pro2 = produto;
pro.preco = 26000
pro.exibirProduto();
pro2.exibirProduto();
/*
    console.log(produto.nome);
    console.log(produto.preco);

    Podemos definir outro atributo para um objeto ja definido
    produto.categoria = 'Eletronicos';

    produto.exibirProduto();

    produto.exibirPreco = function(){
        console.log(`${this.preco}`)
    };

    produto.exibirPreco();
*/
