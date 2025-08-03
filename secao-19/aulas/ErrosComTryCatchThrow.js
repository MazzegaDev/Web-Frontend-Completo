/*
    TryCatch e Throw
    O trycatch e uma forma de depurar erros. Ele e usado da seguinte maneira
    try{
        ...codigo
    }catch(erro){
        tratarErro(erro);
        ...codigo
    }finally{
        ...codigo
    }
    function tratarErro(erro){
        throw new Error('Codigo erro: 123');
    }

    Oque cada coisa faz:
    try -> Ele vai tentar executar seu codigo.

    catch -> Caso ocorra algum erro na execucao o catch pegara o erro.

    finally -> Ele e sempre executado.

    Nesse conjunto tambem pode ser utilizado o throw. Sua funcao e tratar erros.


*/

function contarQuantidadeLetras(produto){
    try{
        console.log(produto.nome.length);
        console.log('Sem erros');
    }catch(erro){
        tratarErro(erro);
        // console.log('Deu erro');
    }finally{
        console.log('Fim da execucao');
    }
};

function tratarErro(erro){
    throw new Error('Deu ruim')
}

const produto={
    nome: 'Notebook',
    preco: 1200
};

contarQuantidadeLetras(produto);