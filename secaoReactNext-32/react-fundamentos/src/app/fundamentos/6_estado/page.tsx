"use client";

import { use, useState } from "react";

export default function Page() {
  // let n = 0;
    /*
        Utilizamos useState para controlar o estado de uma variavel. Ex
        let [numero, set] = useState(0)
        O estado inicial da variavel numero e 0, e a funcao set vai ser utilizada para alterar o seu estado.

        function incrementar(){
            set(numero + 1)
        }

        Quando a funcao incrementar  for chamada a set tambem sera executada fazendo o estado de numero ser alterado por uma soma
    */
  let [numero, setNumero] = useState(0); //Retorna um array [numero, funcao]
  function incrementar() {
    // n += 1
    setNumero(numero + 1);
  }

  function decrementar(){
    setNumero(numero - 1)
  }

  return (
    <div>
      <h1>Estados</h1>
      <button className="bg-green-200 p-2" onClick={incrementar}>
        Clique aqui
      </button>
      <button className="bg-blue-300" onClick={decrementar}>
        Clique aqui
      </button>
      <p>Numero: {numero}</p>
    </div>
  );
}
