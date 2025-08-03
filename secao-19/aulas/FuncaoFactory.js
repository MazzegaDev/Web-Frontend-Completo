const factoryFunc = function(nome, preco){

    return{
        nome,
        preco,
        recuperarAvaliacoes(){
            console.log(`Avaliacao para ${this.nome}`)
        }
    }
}

const produto = factoryFunc('Notebook', 1200);
produto.recuperarAvaliacoes()

const produto2 = factoryFunc('celular', 3000);
produto2.recuperarAvaliacoes();