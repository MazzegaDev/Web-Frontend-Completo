const tittle: HTMLElement | null = document.getElementById("title");
const subtittle: HTMLElement | null = document.getElementById("subtitle");


// Leitura segura
console.log("Tittle", tittle?.innerText);
console.log("subtittle", subtittle?.innerText);


// Atribuição de valor

if(subtittle){
   subtittle.style.color = 'red'
}else{

}
