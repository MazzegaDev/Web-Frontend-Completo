// Funcao literal
function somar(a, b){
    console.log(a + b);
}
somar(1,2);

// Funcao anonima
const somaAnonima = function(a,b){
    console.log(a + b);
}
somaAnonima(2,2);

// Funcao Arrow
const somaArrow = (a,b)=>{
    console.log(a + b);
}
somaArrow(5,5);

// Funcao Arrow (retorno implicito)
const somaArrowImplicita = (a,b) => console.log(a+b);
somaArrowImplicita(10,20);

const exibir = nome => console.log(`Ola: ${nome}`);
exibir('Guilherme');