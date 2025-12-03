function throwError(msg: string): never {
  throw new Error(msg);
}

//throwError("Aplicação interrompida. Erro interno!");
console.log("Continuando....");
console.log("Continuando....");
console.log("Continuando....");
console.log("Continuando....");

function infiniteLoop(): never {
   let total: number = 0;
   while(true){
      const inputText = prompt('Digite um valor numerico');
      if(inputText){
         const inputNumber = parseFloat(inputText);
         if(!isNaN(inputNumber)){
            total += inputNumber;
            console.log(total)
         }
      }
   }
}

infiniteLoop();
console.log("Continuando....");
console.log("Continuando....");
console.log("Continuando....");
console.log("Continuando....");
