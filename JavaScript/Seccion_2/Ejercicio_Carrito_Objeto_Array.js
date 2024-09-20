/* 
    Elabora un carrito de compras que permita:

    - Agregar productos a un array solicitando el nombre, precio y cantidad.
    - Ver el carrito, mostrando el nombre, precio y cantidad de cada producto.
    - Editar cantidad de cada producto.
    - Eliminar un producto del carrito (del array).
    - Calcular el total de la compra.
    - Pagar y salir.


    Es necesario usar: prompt, alert, metodos de strings, arrays, metodos de array, objetos y metodos de objetos, 
    funciones y funciones constructoras.
*/

// Function constructora que sirve de plantilla para crear objetos de tipo Producto.
function Producto(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
};

// Array que almacena los productos del carrito.
const productosCarrito = [];

// Funcion que agrega un producto al carrito.
function agregar(nombre){
    // Se verifica si ya existe un producto con el mismo nombre en el carrito.
    let productoExistente = productosCarrito.filter(
        function(producto){
            return producto.nombre === nombre;
        }
    );
    
    // Si el producto ya existe, se añaade la cantidad ingresada a la cantidad existente.
    if(productoExistente.length === 1){
        let cantidad = +prompt(`Ingrese la cantidad de ${nombre} que desea agregar`);
        productoExistente[0].cantidad += cantidad;
        alert(`Se agrego ${cantidad} unidades del producto ${nombre} al carrito`);
    }else if(productoExistente.length === 0){
        nuevoProducto = new Producto(
            nombre,
            +prompt("Ingrese el precio del producto").trim(),
            +prompt("Ingrese la cantidad del producto").trim()
        );
        productosCarrito.push(nuevoProducto);
    }else{
        alert("Error al agregar el producto al carrito. Intente de nuevo.");
    }
};

// Funcion que muestra los productos del carrito.
function verCarrito(){
    alert(`Los productos del carrito son:\n - ${productosCarrito.map(
        function(producto){
            return `Nombre: ${producto.nombre} | Precio: ${producto.precio} | Cantidad: ${producto.cantidad}`;
        }
    ).join("\n- ")}`);
};

// Funcion que edita la cantidad de un producto del carrito.
function editarCantidad(producto){
    // Se usa filter para obtener el objeto del producto que se quiere editar.
    let productoEditar = productosCarrito.filter(
        function(elemento){
        return elemento.nombre === producto
    });

    if(productoEditar.length === 1){
        productoEditar[0].cantidad = +prompt(`Ingrese la nueva cantidad para el producto ${producto}`);
        alert(`La cantidad del producto ${producto} se actualizo a ${productoEditar[0].cantidad}`);
    }else if(productoEditar.length === 0){
        alert(`El producto ${producto} no existe en el carrito`);
    }else{
        alert("Error al editar la cantidad del producto. Intente de nuevo.");
    }
};

// Funcion que elimina un producto del carrito.
function eliminar(producto){
    // Se usa filter para obtener el objeto del producto que se quiere eliminar.
    let productoEliminar = productosCarrito.filter(
        function(elemento){
            return elemento.nombre === producto
        }
    );

    if(productoEliminar.length === 0){
        alert(`El producto ${producto} no existe en el carrito`);
    }else if(productoEliminar.length === 1){
        productosCarrito.splice(productosCarrito.indexOf(productoEliminar[0]), 1);
        alert(`Se elimino el producto ${producto} del carrito`);
    }else{
        alert("Error al eliminar el producto del carrito. Intente de nuevo.");
    };
};

// Funcion que calcula el total de la compra.
function calcularTotal(){
    let total = productosCarrito.reduce(
        function(acumulador, producto){
            return acumulador + producto.precio * producto.cantidad;
        }, 0
    );
    alert(`El total de la compra es: ${total}`);
};


// Funcion que muestra el menu y ejecuta las acciones correspondientes.
function menu(opcion){
    switch(opcion){
        case "1":
            agregar(prompt("Ingrese el nombre del producto que desea agregar").toLowerCase().trim());
            let agregarMas = prompt("¿Desea agregar otro producto? (si / no)").toLowerCase().trim();
            while(agregarMas === "si"){
                agregar(prompt("Ingrese el nombre del producto que desea agregar").toLowerCase().trim());
                agregarMas = prompt("¿Desea agregar otro producto? (si / no)").toLowerCase().trim();
            };
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Editar cantidad\n4. Eliminar producto\n5. Calcular total\n6. Pagar").trim());
            break;
        case "2":
            verCarrito();
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Editar cantidad\n4. Eliminar producto\n5. Calcular total\n6. Pagar").trim());
            break;
        case "3":
            verCarrito();
            editarCantidad(prompt("Ingrese el nombre del producto que desea editar").toLowerCase().trim());
            let editarMAS = prompt("¿Desea editar otro producto? (si / no)").toLowerCase().trim();
            while(editarMAS === "si"){
                verCarrito();
                editarCantidad(prompt("Ingrese el nombre del producto que desea editar").toLowerCase().trim());
                editarMAS = prompt("¿Desea editar otro producto? (si / no)").toLowerCase().trim();
            };
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Editar cantidad\n4. Eliminar producto\n5. Calcular total\n6. Pagar").trim());
            break;
        case "4":
            verCarrito();
            eliminar(prompt("Ingrese el nombre del producto que desea eliminar").toLowerCase().trim());
            let eliminarMAS = prompt("¿Desea eliminar otro producto? (si / no)").toLowerCase().trim();
            while(eliminarMAS === "si"){
                verCarrito();
                eliminar(prompt("Ingrese el nombre del producto que desea eliminar").toLowerCase().trim());
                eliminarMAS = prompt("¿Desea eliminar otro producto? (si / no)").toLowerCase().trim();
            };
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Editar cantidad\n4. Eliminar producto\n5. Calcular total\n6. Pagar").trim());
            break;
        case "5":
            calcularTotal();
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Editar cantidad\n4. Eliminar producto\n5. Calcular total\n6. Pagar").trim());
            break;
        case "6":
            alert("Gracias por su compra");
            break;
        default:
            alert("Opcion no valida");
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Editar cantidad\n4. Eliminar producto\n5. Pagar").trim());
            break;
    };
};

do{
    menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Editar cantidad\n4. Eliminar producto\n5. Pagar y salir").trim());
}while(prompt("¿Desea realizar otra accion? (si / no)").toLowerCase().trim() === "si");

alert("Fin del programa...");