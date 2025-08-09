/* 
    Readonly
    Ele e um modificador que nao permite a alteracao de valores em um array e tuplas.
    Ele deve ser antes da notacao do tipo. Ex:
    let numbers: readonly number[] = [12,20,30]. 

    Ou utilizar a interface
    let numbers: ReadonlyArray<number>  = [10,20,30,40,50]

    Porem os metodos ainda podem ser utilizado como o map, pois na pratica vamos atuar em uma 'copia' com algumas alteracoes.
*/

// let numbers: readonly number[] = [10,20,30,40,50]
// let numbers: ReadonlyArray<number>  = [10,20,30,40,50]

let numbers: readonly [number, number, number, number, number] = [
  10, 20, 30, 40, 50,
];

// numbers[0] = 30

let numbersCopy = numbers.map((value) => value * 2);

console.log(numbers);
console.log(numbersCopy);

export default () => {};
