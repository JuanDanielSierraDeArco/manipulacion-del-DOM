// Seleccionamos el elemento con id="parent"
const parent = document.getElementById("parent");
console.log(parent)

// Obtenemos todos los hijos directos de "parent"
// Devuelve un HTMLCollection (colección viva)
const children = parent.children;
console.log(children);

// Obtenemos el primer hijo de "parent" que sea un ELEMENTO
const firstchildren = parent.firstElementChild;
console.log(firstchildren);

// Obtenemos el último hijo de "parent" que sea un ELEMENTO
const lastChild = parent.lastElementChild;
console.log(lastChild);

// Obtenemos el hermano anterior a "parent" (solo elementos)
const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

// Obtenemos el hermano siguiente a "parent" (solo elementos)
const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

const secondChild = parent.children[2];//numero de hijo
console.log("este juan",secondChild);

/* 
📌Diferencia entre propiedades y colecciones:
- children → HTMLCollection (colección viva, solo elementos)
- childNodes → NodeList (colección viva, incluye texto, comentarios y elementos)
- firstChild → primer nodo hijo (puede ser texto o elemento)
- firstElementChild → primer hijo que sea ELEMENTO (nodo único)
- lastChild → último nodo hijo (puede ser texto o elemento)
- lastElementChild → último hijo que sea ELEMENTO (nodo único)
- previousSibling → hermano anterior (puede ser texto o elemento)
- previousElementSibling → hermano anterior que sea ELEMENTO (nodo único)
- nextSibling → hermano siguiente (puede ser texto o elemento)
- nextElementSibling → hermano siguiente que sea ELEMENTO (nodo único)
*/

// Seleccionamos el primer <li> que aparezca en el documento
const children2 = document.querySelector("li")
console.log(children2)

// Obtenemos el nodo padre del <li> (puede ser cualquier nodo, no necesariamente un elemento)
const parent2 = children2.parentNode;
console.log(parent2)

// Obtenemos específicamente el elemento padre del <li>
const grandParent = children2.parentElement;
console.log(grandParent)

// Buscamos el antepasado más cercano que coincida con el selector "menu"
// Si el <li> está dentro de un <menu>, lo devuelve; si no, devuelve null
const granGrandParent = children2.closest("menu");
console.log(granGrandParent)
