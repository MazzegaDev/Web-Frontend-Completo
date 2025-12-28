export default function Tipografia() {
   return (
      <div>
         <h1 className="font-sans">titulo 1</h1>
         <h1 className="font-serif">titulo 2</h1>
         <h1 className="font-mono">titulo 3</h1>
         <h1 className="text-sm">titulo 4</h1>
         <h1 className="text-2xl">titulo 5</h1>
         <h1 className="text-sm/6">titulo 7</h1>
         <h1 className="text-[40px]">titulo 8</h1>
         <h1 className="text-[2rem]">titulo 9</h1>
         <h1
            className="
            text-[1rem] md:text-[2rem] lg:text-[3rem]"
         >
            titulo responsivo
         </h1>
         <h1 className="italic">titulo 10</h1>
         <h1 className="font-bold">titulo 11</h1>
         <h1 className="font-thin">titulo 12</h1>
         <h1 className="font-thin tracking-wider">titulo 13</h1>
         <h1 className="text-left">Esquerda</h1>
         <h1 className="text-center">Centro</h1>
         <h1 className="text-right">Direita</h1>
      </div>
   );
}
