/*
    Porque conseguimos alterar o valor de um atributo de um objeto constante?

    Porque estamos apenas alterando o valor dele, nao seu endereco de memoria. 
    Exemplo:
    const produto = {
        nome: 'Notebook'
    };
    produto.nome = 'Celular';
    Aqui estamos apenas alterando o valor do atributo nome do objeto produto entao e possivel. Ja se fizermos isso -> produto = {
        nome: 'Celular'
    }; Nao e possivel pois estamos atribuimos um novo espaco de memoria para esse objeto que ja esta em um espaco.

    Vale lembrar que isso so vale para objetos constantes, ja constantes normais nao e possivel alterar seu valor.

    Se quisermos impedir qualquer tipo de alteracao em um objeto basta utilizar:
    Object.freeze( nome do objeto );
*/

const produto = {
    nome: 'Notebook'
};

produto.nome = 'Celular';
console.log(produto.nome);
Object.freeze( produto );

