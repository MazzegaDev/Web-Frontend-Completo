/*
    Essa variavel e um exemplo de type annotation, isso e quando depois do nome da variavel vem dois pontos : e seu tipo.
    let product: string = 'Micro-ondas';

    Porem nesse contexto nao ha nessecidade de usar o type annotation pois o type inference atua nesse contexto de variaveis.

    Quando entao devemos usar o type annotaion?
    Quando o type inference nao e possivel, como em funcoes e metodos. Ex:
    export function display(produtct: string, price: number){
    
    }

    Isso nos beneficia em acessar atributos e metodos desse tipo de variavel
*/

let product = 'Micro-ondas';
let price = 500.21

export function display(product: string, price: number){
    console.log(product.toUpperCase(), price.toFixed(0) )
}
display(product, price)