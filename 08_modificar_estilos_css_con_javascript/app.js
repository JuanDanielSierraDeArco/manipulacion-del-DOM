// Primera forma: seleccionar elementos y cambiar estilos directamente con .style

// Selecciona el primer <h1> del documento
const title = document.querySelector("h1");

// Cambia el color del texto del h1 a rojo
title.style.color = "red";

// Selecciona la etiqueta <menu> del documento
const menu = document.querySelector("menu");

// Cambia el color de fondo del menú a rojo
menu.style.backgroundColor = "red";

// Cambia el tamaño de fuente del menú a 25 píxeles
menu.style.fontSize = "25px";

// Asigna una clase completa al menú
// Esto reemplaza cualquier clase anterior por "main-menu"
menu.className = "main-menu";


// Segunda forma: trabajar con classList para gestionar clases dinámicamente

// Selecciona el primer <button> del documento
const button = document.querySelector("button");

// Agrega un "escuchador de eventos" al botón
// Cada vez que se hace click, alterna la clase "invisible" en el menú
// Si el menú tiene la clase, la quita; si no la tiene, la añade.
button.addEventListener("click", () =>{
    menu.classList.toggle("invisible");
});
