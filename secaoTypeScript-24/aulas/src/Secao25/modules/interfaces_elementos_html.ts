const Input = document.querySelector(".inputText") as HTMLInputElement;

const Video = document.querySelector("#video") as HTMLVideoElement;

Input.addEventListener("click", (e: Event) => {
  console.log("Clicado!");
});
// nivel basico
console.log("Filho de: ", Input.parentNode);

// nivel intermediario
console.log("Element: ", input.id, input.className, input.tagName);

// nivel avançado
console.log("Arrastavel: ", input.draggable);

// nivel especializado
console.log("Input: ", input.value);
console.log("Volume: ", Video.volume);
