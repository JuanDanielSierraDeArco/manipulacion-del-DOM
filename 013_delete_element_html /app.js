// Eliminar elementos con remove()

// Selecciona el primer elemento <li> de la página
const firstItem = document.querySelector("li");

// Lo elimina directamente del DOM
firstItem.remove();


// Eliminar elementos con removeChild()

// Selecciona la lista <ul>
const list = document.querySelector("ul");

// Elimina el primer hijo de esa lista (primer <li>)
list.removeChild(list.firstElementChild);