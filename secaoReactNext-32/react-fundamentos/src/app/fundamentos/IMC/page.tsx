"use client";

import { useState } from "react";

export default function imc() {
  let [peso, setPeso] = useState("");
  let [altura, setAltura] = useState("");
  let [msg, setMsg] = useState("");


    function CalcularIMC(){
        let p = parseFloat(peso);
        let a = parseFloat(altura);

        let imc = p / (a * a);
        if(imc < 18){
            setMsg("Abaixo do peso");
        }else if(imc >18 && imc <25){
            setMsg("Peso normal");
        }else{
            setMsg("Acima do peso");
        }
    }


  return (
    <div>
      <label>
        <h1>Seu peso</h1>
        <input type="text" name="peso" id="peso" onChange={e => setPeso(e.target.value)} />
      </label>

      <label>
        <h1>Sua altura</h1>
        <input
          type="text"
          name="altura"
          id="altura"
          onChange={e => setAltura(e.target.value)}
        />
      </label>
      <button onClick={CalcularIMC}>Calcular</button>
      <h1>Resultado: {msg}</h1>
    </div>
  );
}
