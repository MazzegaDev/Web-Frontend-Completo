// let movies = ['Duna: Parte 2', 'Divertida Mente 2'];
/* 
    Podemos usar type annotation em arrays para isso basta utilizar os dois pontos apos o nome da variavel, o tipo dos dados que sera armazenado no array e os colchetes
    let movies: string[] = ['Duna: Parte 2', 'Divertida Mente 2'];
    
    Podemos converter para a notacao de interface definindo um tipo generico. Ex:
    let movies: Array<string> = ['Duna: Parte 2', 'Divertida Mente 2'];


*/

// let movies: string[] = ['Duna: Parte 2', 'Divertida Mente 2'];
// let numbers: number[] = [10,20];

let movies: Array<string> = ['Duna: Parte 2', 'Divertida Mente 2'];
let numbers: Array<number> = [10,20];

export function toUpperString(arr: string[]){
    return arr.map(value => value.toLocaleUpperCase())
}

console.log(toUpperString(movies))