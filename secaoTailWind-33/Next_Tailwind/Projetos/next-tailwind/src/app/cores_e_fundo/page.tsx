export default function CoresFundo() {
   return (
      <div>
         <h1 className="text-orange-400">Cores</h1>
         <h1 className="text-orange-400/75">Cores</h1>
         <h1 className="text-[#50d71e]">Cores</h1>
         <button className="bg-orange-600 hover:bg-amber-300">Botão</button>

         <button className="bg-sky-500">Botao</button>
         {/* Imagem de fundo */}
         <h1 className="h-96  bg-[url(/img/nuvem.png)] bg-repeat-x bg-sky-300">
            Imagem de fundo
         </h1>
         <h1 className="h-96  bg-[url(/img/nuvem.png)] bg-no-repeat bg-sky-800 bg-center">
            Imagem de fundo
         </h1>
      </div>
   );
}
