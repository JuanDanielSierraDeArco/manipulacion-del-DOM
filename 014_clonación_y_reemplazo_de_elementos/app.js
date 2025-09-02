// --- Clonar un elemento ---

// Selecciona el área de contenido con id="contentArea"
const contentArea = document.querySelector("#contentArea");

// Busca el primer <p> dentro de contentArea
const originalP = contentArea.querySelector("p");

// Clona ese párrafo
// true → significa que se clona con todo su contenido interno
const clonedP = originalP.cloneNode(true);

// Inserta el clon al final de contentArea
contentArea.append(clonedP);


// --- Reemplazar un elemento ---

// Selecciona la lista con id="listArea"
const list = document.querySelector("#listArea");

// Selecciona el tercer hijo de la lista (índice 2 porque empieza en 0)
const itemToReplace = list.children[2];

// Reemplaza ese hijo por el párrafo clonado
itemToReplace.replaceWith(clonedP);
