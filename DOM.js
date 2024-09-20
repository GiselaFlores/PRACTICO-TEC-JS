// Buscar la ruta del nodo del DOM

let btnAgregar = document.getElementsByClassName("btnUno");
let btnMostrarActual = document.getElementById("btnDos");
let btnBuscar = document.getElementsByTagName("button");
let btnActualizar = document.querySelector("#btnDos");
let btnMostrarActualizada = document.querySelectorAll(".btnUno");

console.log(btnBuscar);

btnBuscar[2].innerHTML = "Hola";

// manipulaciones
/*
Noddo.createElement("p");
Noddo.createComment("testo");
Noddo.createTextNode("texto");
Noddo.cloneNode("div");
Noddo.appendChild(btn);
*/
btnBuscar[2].style.color = "white";
btnBuscar[2].style.backgroundColor = "red";
btnBuscar[2].style.className = "cambio";

let ul = document.querySelector("ul");

let verduras = ["pera", "papa", "manzana", "lechuga"];

verduras.forEach( verdura => {
    let li = document.createElement("li"); //creamos el elemento li
    li.textContent = verdura; // le asignamos el valor que trae la posición de verdura a la li
    ul.appendChild(li); // pasamos la li generada a la ul del html
});
