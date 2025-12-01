/*
    Union Types
    O union type e um recurso do TS que flexibiliza a tipagem das variaveis mas mesmo assim mantem um controle sobre seus tipos e os valores que podemos atribuir a elas

    Quando definimos um array com varios tipos o union type entra em acao, ele e representado pelo operador pipe ( | ).
    let shoppingCart: (string | number)[] <- Quando passamos o cursor em cima dessa variavel e isso que aparece 

    Com o union type podemos definir os tipos que uma variavel pode receber. Ex:
    let total: string | number = 500
    total = '500'
    isso indica que a variavel total pode receber tipos numericos ou strings

    E como utilizar o union type em uma funcao que sou obrigado a utilizar o type annotation?
    Basta fazer o seguinte:
    -> depois do parametro colocar os dois pontos, abrir os parentesses e dentro dele colocar os tipos do array separado pelo union type e apos isso fechar parentesse e abrir e fechar os colchetes do array

    function totalize(value: (string | number)[]){
    }

    Ou tambem da forma de interface de array

    function totalize( Array<string | number>){
    }
*/

let total: string | number = 500;
total = "500";

let shoppingCart = [200.75, 150.12, "33.90", "44", "not defined"];

// export function totalize( Array<number | string | null | object>)

export function totalize(values: (number | string)[]) {

  return values
    .map((value) => (typeof value === "number" ? value : parseFloat(value)) ) // Converter os valores

    .filter((value) => !isNaN(value)) //Filtrar os valores

    .reduce((prevVa, currVa) => prevVa + currVa, 0); //Totalizar
} //Retornar o total
console.log(totalize(shoppingCart));