//Nodos

let btnAgregar = document.getElementById("btnUno");
let btnMostrarActual = document.getElementById("btnDos");
let btnBuscar = document.getElementById("btnTres");
let btnActualizar = document.getElementById("btnCuatro");
let btnMostrarActualizada = document.getElementById("btnCinco");

// 1. Crear el array para almacenar los productos
let inventario = [];

// 2. Función para agregar productos al inventario
function agregarProducto(){
    let continuar = true;

    while(continuar){

        let nombre = prompt("Ingrese nombre del producto");
        let cantidad = parseInt(prompt("Ingrese la cantidad de " + nombre + ": "));

        inventario.push({
            nombre: nombre,
            cantidad: cantidad 
        });

        continuar = confirm("¿Desea agregar otro producto?");
    }
}

// 3. Función para mostrar el inventario actual

function mostrarInventario(){
    document.write("<h3>Inventario actual:</h3>");

    inventario.forEach( producto => {
        document.write("Producto: " + producto.nombre + ", Cantidad: " + producto.cantidad + "<br>");
    });

    document.write("<hr>");
}

// 4. Función para buscar un producto por nombre

function buscarProducto(){
    let nombreBuscar = prompt("Ingrese el nombre del producto a buscar:");
    let productoEncontrado = inventario.find(producto => producto.nombre === nombreBuscar);

    if(productoEncontrado){
        document.write("Producto encontrado: " + productoEncontrado.nombre + ", Cantidad: " + productoEncontrado.cantidad + "<br>");
    } else {
        document.write("Producto no encontrado.<br>");
    }

    document.write("<hr>");
}

// 5. Función para actualizar la cantidad de un producto

function actualizarProducto(){
    let nombreActualizar = prompt("Ingrese el nombre del producto a Actualizar:");
    let productoActualizar = inventario.find(producto => producto.nombre === nombreActualizar);

    if(productoActualizar){
        let nuevaCantidad = parseInt(prompt("Ingrese la cantidad nueva: " + nombreActualizar + "<br>"));
        productoActualizar.cantidad = nuevaCantidad;
        document.write("Producto actualizado: " + productoActualizar.nombre + ", nueva cantidad asignada: " + productoActualizar.cantidad + "<br>");
    } else {
        document.write("Producto no encontrado.<br>");
    }

    document.write("<hr>");
}

// 6. Función para listar todos los productos del inventario

function listarProductos(){
    document.write("<h3>Lista de todos los productos ingresados:</h3>");

    inventario.forEach( producto => {
        document.write("Producto: " + producto.nombre + ", Cantidad: " + producto.cantidad + "<br>");
    });

    document.write("<hr>");
}



// Ejecución de funciones
agregarProducto(); //paso 2
mostrarInventario(); //paso 3
buscarProducto(); //paso 4
actualizarProducto(); //paso 5
listarProductos(); //paso 6

