// Crear un nuevo párrafo con createElement
const newpElement = document.createElement("p");

// Definir el texto que contendrá ese párrafo
newpElement.textContent = "Hola soy una etiqueta creada con createElement";

// Seleccionar el área de contenido con id="contentArea"
const contentArea = document.getElementById("contentArea");

// Insertar el nuevo párrafo al final del área de contenido
contentArea.append(newpElement);


/// Crear un nuevo elemento de lista <li>
const newItem = document.createElement("li");

// Definir el texto del nuevo item
newItem.textContent = "item 5";

// Seleccionar la lista con id="listArea"
const listArea = document.getElementById("listArea");

// Distintas formas de insertar el nuevo item:
// listArea.prepend(newItem); // lo pone al inicio de la lista
// listArea.before(newItem);  // lo pone justo antes de la lista

// Aquí lo estamos colocando justo después de la lista
listArea.after(newItem);
