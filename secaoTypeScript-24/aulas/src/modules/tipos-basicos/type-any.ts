/*
    Type any
    - O type any faz com que uma variavel possa recber qualquer tipo de valor. O type any deve ser evitado pois ele quebra o principal princípio do TypeScript, que é a tipagem estática. Alem disso ele pode causar problemas em tempo de execução, pois o TypeScript não consegue verificar se o valor atribuído é do tipo esperado. Ex:

    export function handleFile(file: any){
        console.log(`Nome: ${file.name}`)
        console.log(`Tamanho: ${file.zise} bytes`)
    }

    const fileName = {
        Name: 'Lista_de_funcionarios.txt',
        size: 32324
    };
    Repare que o TypeScript não consegue verificar se o objeto fileName possui as propriedades name e size, pois o type any não possui restrições de tipo, e nesse caso acessamos uma propriedade inexistente zise isso causaria um erro em tempo de execucao.

*/

export function handleFile(file: any) {
  console.log(`Nome: ${file.name}`);
  console.log(`Tamanho: ${file.zise} bytes`);
}

const fileName = {
  Name: "Lista_de_funcionarios.txt",
  size: 32324,
};
handleFile(fileName);
