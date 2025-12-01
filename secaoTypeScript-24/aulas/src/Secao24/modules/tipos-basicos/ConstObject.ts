/*
const fileName = {
  Name: "Lista_de_funcionarios.txt",
  size: 32324,
} as const;
*/
/* 
    Const Object Context
    - Os objetos constantes são objetos que não podem ser alterados após sua criação. Exemplo:
    const obj ={
        name: "João",
    }
    obj.type = "Gerente"; Isso não é permitido, pois a forma do objeto ja esta definida pela tipagem de inferencia.

    file = {} Nao podemos adicionar um novo objeto a uma variavel constante, pois isso alteraria a referencia de memoria. Porem podemos alterar os valores de seus atributos, se eles nao forem readonly.
*/

type File = {
  readonly name: string;
  size: number;
};

const file: File = {
  name: "Lista_de_funcionarios.txt",
  size: 33234,
};

// file.name = "ListaDeDpendentes.txt";

export function handleFile(file: File) {
  console.log(`Nome: ${file.name}`);
  console.log(`Tamanho: ${file.size} bytes`);
}

handleFile(file);
