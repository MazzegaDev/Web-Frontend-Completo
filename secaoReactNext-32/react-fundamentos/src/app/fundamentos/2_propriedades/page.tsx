/*
    Componentes como TAG
    Podemos na hora de reaproveitar componentes usar-los como tag. Ex
    <div>
        <Menu/>
    </div>

    Usando Props

    Para usar uma prop devemos definor o parametro props e seu tipo na funcao do componente. Ex

    export function Menu(props: any){
        <h1>{props.titulo}</h1>
        <p>{props.preco}</p>
    }

    Agora na pagina principal chamamos o componente e passamos um atributo com o valor a ser exibido.

    export default function Page() {
    return (
        <div>
            <Cabecalho titulo="Sao roque, brasil" />
            <hr />
            <Cabecalho preco="R$500" />
            <Acomodacao />
        </div>
    );

    Por baixo dos panos o react vai transformar esses atributos e valores em um objeto literal
}

*/

import { Acomodacao, Cabecalho, Menu } from "@/components/interface";

export default function Page() {
  return (
    <div>
      <h1 className="bg-blue-500">Titulo propriedades (APP)</h1>
      <Cabecalho titulo="Sao roque, brasil" />
      <hr />
      <Cabecalho preco="R$500" />
      <hr />
      <Cabecalho titulo="Sao paulo, brasil"/>
      <Acomodacao />
    </div>
  );
}
