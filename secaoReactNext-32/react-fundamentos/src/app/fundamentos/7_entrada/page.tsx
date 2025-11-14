/*
    Valores de input

    
    export default function Entrada() {
    let [valor, setValor] = useState("s");
    function alterarValor(e: any) {
        setValor(e.target.value);
        //Capturamos oque o usuario digitou e setamos isso no valor
    }

    return (
        <div className="p-2">
        <h1>Entrada de dados</h1>
        <input
            value={valor}
            onChange={alterarValor}
            type="text"
            className="campo-texto"
        />

        <h4>Valor: {valor}</h4>
        </div>
    );
    }

    Quando mudamos o valor do input a funcao alterarValor e chamada, passando como parametro um evento, nesse evento atribuimos como seu valor oque tinhamos colocado no input assim a setValor vai atribuir isso no valor
*/

"use client";
import { useState } from "react";

export default function Entrada() {
  let [valor, setValor] = useState("");
  function alterarValor(e: any) {
    setValor(e.target.value);
  }

  return (
    <div className="p-2">
      <h1>Entrada de dados</h1>
      <input
        value={valor}
        onChange={alterarValor}
        type="text"
        className="campo-texto"
      />

      <h4>Valor: {valor}</h4>
    </div>
  );
}
