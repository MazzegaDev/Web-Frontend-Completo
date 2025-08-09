/*
    Type Object
    Os objetos em TS e JS possuem a mesma logica, A diferenca e que o TS reconhece o tipo de cada atributo do objeto pela inferencia de tipo, outra diferenca e que em TS nao podemos criar novos atributos. Ex:
    programmer.skills = 'JS | TS'.

    O modo de declarar um objeto literal em TS e o mesmo em JS:
    let programmer = {
        name: 'Guilherme',
        age: 30
    }
    Podemos ainda declarar utilizando a notacao de tipo, porem nao ha necessidade 
    let programmer: {name: string, age: number} = {
        name: 'Guilherme',
        age: 30
    }

    Quando trabalhamos funcoes com objetos como parametros precisamos fazer a tipagem literal.
    Ela e feita da seguinte maneira:
    Depois do parametro colocamos os dois pontos e entre chaves seus atributos e seu respectivo tipo
    export function showProgrammer(dev: {name: string, age: number} ){

    }
*/

// let programmer: {name: string, age: number, skills: string[]} = {
let programmer = {
  name: "Guilherme",
  age: 20,
  skills: ['JavaScript', 'TypeScript']
};

programmer.name = "Joao";
programmer.age = 22;

export function showProgrammer(dev: { name: string; age: number, skills?: string[] }) {
  console.log(dev);
}

showProgrammer(programmer);
showProgrammer({ name: "Roberto", age: 40, skills: ['PHP'] });
