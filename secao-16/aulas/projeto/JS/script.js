function calcularPreco() {
  let precoAlcool = document.getElementById("alcool").value;
  let precoGasolina = document.getElementById("gasolina").value;
  let result = document.getElementById("result");

  if (precoAlcool != "") {
    if (precoGasolina != "") {
      if (precoAlcool / precoGasolina >= 0.7) {
        result.innerHTML = "Abasteca com gasolina";
      } else {
        result.innerHTML = "Abasteca com alcool";
      }
    } else {
      result.innerHTML = "Informe o preco da gasolina";
    }
  } else {
    result.innerHTML = "Informe o preco do alcool";
  }
}
