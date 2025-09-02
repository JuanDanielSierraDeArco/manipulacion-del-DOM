// Agregando elementos con innerHTML
// 1. Selecciona el elemento con id="contentArea"
const contentArea = document.getElementById("contentArea");

// 2. Inserta un párrafo dentro de contentArea usando innerHTML
// ⚠️ innerHTML reemplaza todo el contenido anterior por el nuevo
contentArea.innerHTML = "<p>Este es un nuevo párrafo</p>";


// Agregando elementos con insertAdjacentHTML
// Este método añade contenido HTML sin eliminar lo que ya existía.
// Puedes decidir dónde insertarlo:
// - "afterbegin": al inicio del elemento
// - "beforeend": al final del elemento
// - "beforebegin": justo antes del elemento
// - "afterend": justo después del elemento

// Aquí se añade un párrafo al final de contentArea
contentArea.insertAdjacentHTML("beforeend", "<p>Hola, este es otro párrafo creado</p>");


// Ahora trabajando con una lista

// Selecciona el elemento con id="listArea"
const listArea = document.getElementById("listArea");

// Agrega un nuevo ítem a la lista usando innerHTML
// El operador += permite añadir sin borrar lo que ya existía
listArea.innerHTML += "<li>item 5</li>";

// Agrega un nuevo ítem a la lista usando insertAdjacentHTML
// "beforeend" → al final de la lista
listArea.insertAdjacentHTML("beforeend", "<li>item 6</li>");
