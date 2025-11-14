import { link } from "fs";
import Link from "next/link";

export function Acomodacao() {
  return (
    <div>
      <span>IMAGEM IMOVEL</span>
      <hr />
      <h1>Sao roque Brasil</h1>
      <hr />
      <p>DESC. Perto da vinicula goes</p>
      <hr />
    </div>
  );
}

export function Menu() {
  return (
    <div className="bg-gray-500">
      <MenuuItem texto="Home" url="/inicio" />
      <MenuuItem texto="Acomodacoes" url="/acomodacoes" />
    </div>
  );
}
/*
  Navegacao entre paginas
  Para navegarmos entre paginas precisamos usar a tag link. Ex
  <Link href={props.url}>
    {props.texto}
  </Link>
*/
export function MenuuItem(props: any) {
  return (
    <Link href={props.url} className="p-2">
      {props.texto}
    </Link>
  );
}

interface CabecalhoProps {
  titulo: string
  subtitulo: string
  clasName?: string

}


export function Cabecalho(props: CabecalhoProps) {
  const classe = props.clasName ?? ""
  return (
    <div className={"p-3 " + classe}>
      <p>{props.titulo}</p>
      <p>{props.subtitulo}</p>
      {/* //O componente cabecalho usa o componente menu, e quando usamos o componente Cabecalho o Menu tambem e usado */}
    </div>
  );
}

export function Rodape() {
  return (
    <div className="bg-violet-300">
      <p>Rodape</p>
    </div>
  );
}

interface ConteudoProps{
  children?: any
}

export function Conteudo(props: ConteudoProps) {
  return (
    <div className="bg-gray-400">
      {/*props.children e usado quando passamos algo como filho desse componente no arquivo principal  */}
      {props.children}
    </div>
  );
}
