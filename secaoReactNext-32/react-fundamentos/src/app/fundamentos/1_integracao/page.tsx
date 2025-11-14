/*
    Podemos exibir codigo JS no JSX para isso devemos usar as chaves {}. Ex
    export default function Page(){

    const regra = <h1>Maior de idade</h1>

    return(
        <div>
            {regra}
        </div>
    )

    tambem e possivel exibir esses valores nos atributos. Ex
    <div id={nome}>
}
*/
export default function Page() {
  const regra = <h1>Maior de idade</h1>;
  const nome = "Gui";
  const lista = [<h1>Gui</h1>, <h1>ana</h1>, <h1>Marcos</h1>];
  let salario = 1000;
  let bonus = 200;
  const usuario = {
    nome: "Gui",
    idade: "37",
  };

  function MeuBtn(){
    return(
        <button>Clique</button>
    )
  }

  return (
    <div id={nome}>
      Ola, {lista[0]}O salario e: {salario + bonus}O usuario e: {usuario.nome}{" "}
      idade: {usuario.idade}
      {MeuBtn()} {/*La ele*/}
    </div>
  );
}
