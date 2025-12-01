/*
    Type Tuple
    As tuplas sao semelhantes aos arrays porem elas tem um tamanho e tipo especifico ou seja, quando criamos uma tupla temos que definir um limite de valores maximos e definir o tipo de cada posicao.

    A sintaxe para definir uma tupla em TS e a seguinte:
    let filmTuple: [number, string, boolean] -> Dentro do colchete e que definimos seu tamanho e o tipo de cada posicao, 0-> number, 1->string, 2->boolean

    A grande vantagem de usar tuple e que o destructuring (Quando estraimos valores de uma variavel) fica facilitado. Ex:

    const [idArr, titleArr, avalibleArr] = filmArray
    -> Neste casso as variaveis que estao recebendo os valores de filmArray podem receber qualquer tipo, por exemplo o titleArr pode receber um boolean.

    const [id, title, avalible] = filmTuple
    -> Isso ja nao ocorre na tupla pois cada posicao tem seu tipo especifico 

    Em tuplas tambem podemos deixar um valor opcional coloando interogacao depois do seu tipo. Ex:
    let filmTupleOpcionalPosition: [number, string, boolean?] = [2, 'Sexta feira 13']
*/

let filmArray: (number | string | boolean)[] = [1, "Guerra Civil", true];

let filmTuple: [number, string, boolean] = [2, "Stalingrado", false];

let filmTupleOpcionalPosition: [number, string, boolean?] = [2, 'Sexta feira 13']

const [idArr, titleArr, avalibleArr] = filmArray
const [id, title, avalible] = filmTuple

console.log(id)