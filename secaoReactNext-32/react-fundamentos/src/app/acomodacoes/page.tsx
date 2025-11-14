/*
    Componentes no react:
    Para criar componentes no react basta criar uma function que retorna algo. Ex:
    function Home(){
        return(
            <div>
                <h1>Ola</h1>
            </div>
        )
    }
    Para executar na nossa pagina basta chamar esse componete na funcao principal. Ex:
    export default function Page(){
        return(
            Home() -> Sao usadas para exibir o elemento na nossa pagina
        )
    }

    Se quisermos utilizar esse componente em outros arquivos devemos colocar export default no antes do nome do componente. Ex
    export  Home(){}

    Porem o ideal e ter uma pasta apenas para componentes.
    Essa pasta fica dentro da pasta src e seu nome e components

*/
//Importa componentes
import {
  Acomodacao,
  Menu,
  Cabecalho,
  Conteudo,
  Rodape,
} from "@/components/interface";
export default function Page() {
  return (
    <div>
      <Cabecalho titulo="AirBnb" subtitulo="Minhas acomodacoes" clasName="" />
      <Menu/>

      <Conteudo>

      </Conteudo>

      <Rodape />
    </div>
  );
}
