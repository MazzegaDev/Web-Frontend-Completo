const body = document.querySelector("body") as HTMLBodyElement;
const video = document.querySelector("#promo") as HTMLVideoElement;
const input = document.querySelector(".inputText") as HTMLInputElement;
if(input){
   input.addEventListener("blur", (e: FocusEvent) => {
     alert("teste");
   });
}

video.volume;
