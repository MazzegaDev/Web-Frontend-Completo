import Image from "next/image";

export default function Page() {
  const usuario = {
    nome: "DayZ",
    urlPerfil:
      "https://www.unoeste.br/Content/Imagens/logoUnoesteResponsiva.png",
  };

  return (
    <div>
      <h1>Imagens</h1>
      {/* <img src={usuario.urlPerfil} style={{ width: 90, height: 90 }} alt={"Nome: " + usuario.nome} /> */}
      {/* <img src="/221100_3.jpg" alt={"Nome: " + usuario.nome} style={{width: 655, height: 655}} /> */}

      <Image 
        src="/221100_3.jpg"
        alt={"Nome: " + usuario.nome}
        width={880}
        height={880}
      />
    </div>
  );
}
