type Item = {
   id: string,
   [key: string] : string | null,
}

//Fetch em um end-point
const response: Item[] = [
   {id: "AZD#12234343", movie: 'Cinderella Man'},
   {id: "ZAD#1233423", song: "Heirs to Perdition"}
]


function showItems(item: Item[]): void {
   const body = document.querySelector('body')

   if(body instanceof HTMLBodyElement){
      item.map(item =>{
         const itemE = document.createElement('div');
         
         //Verifica se um atributo existe
         if('song' in item){
            itemE.textContent = item.song;
            itemE.style.background = 'seagreen';
         }else if('movie' in item){
            itemE.textContent = item.movie;
            itemE.style.background = "cadetblue";
         }

         body.appendChild(itemE);
      })
   }
}

showItems(response);