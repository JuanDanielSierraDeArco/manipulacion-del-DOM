// 1. Ubicar la etiqueta deseada en el DOM mediante su id (#app-title)
const input = document.querySelector("#app-title");

// 2. Cambiar el texto interno utilizando textContent
// textContent reemplaza todo el contenido de texto tal cual, incluso espacios y saltos de línea.
input.textContent = "soy texto del header modificado con textContent";

// 3. Cambiar el texto interno utilizando innerText
// innerText también reemplaza el texto, pero respeta estilos CSS y renderizado visual.
// Es más “consciente” del estilo, a diferencia de textContent.
input.innerText = "Soy el texto del header modificado por inner";
