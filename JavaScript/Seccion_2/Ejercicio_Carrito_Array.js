// Ejercicio para realizar en casa:
/* 
    Elabora un carrito de compras que permita:

    - Agregar productos de un menu (a un array).
    - Ver el carrito
    - Eliminar productos del carrito (del array).


    Es necesario usar: prompt, alert o console.log, arrays, metodos de array.
*/


const productosCarrito = [];

function agregar(producto){
    productosCarrito.push(producto);
};

function eliminar(producto){
    if(productosCarrito.includes(producto)){
        productosCarrito.splice(productosCarrito.indexOf(producto), 1);
        alert(`Se elimino el producto ${producto} del carrito`);
    }else{
        alert(`El producto ${producto} no existe en el carrito`);
    };
};

function verCarrito(){
    alert(`Los productos del carrito son:\n - ${productosCarrito.join("\n- ")}`);
}

function menu(opcion){
    switch(opcion){
        case "1":
            agregar(prompt("Ingrese el producto que desea agregar").toLowerCase().trim());
            let agregarMas = prompt("¿Desea agregar otro producto? (si / no)").toLowerCase().trim();
            while(agregarMas === "si"){
                agregar(prompt("Ingrese el producto que desea agregar").toLowerCase().trim());
                agregarMas = prompt("¿Desea agregar otro producto? (si / no)").toLowerCase().trim();
            };
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Eliminar producto\n4. Pagar y salir").trim());
            break;
        case "2":
            verCarrito();
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Eliminar producto\n4. Pagar y salir").trim());
            break;
        case "3":
            alert(`Los productos en el carrito son:\n - ${productosCarrito.join("\n- ")}`);
            eliminar(prompt("Ingrese el producto que desea eliminar").toLowerCase().trim());
            let eliminarMAS = prompt("¿Desea eliminar otro producto? (si / no)").toLowerCase().trim();
            while(eliminarMAS === "si"){
                alert(`Los productos en el carrito son:\n - ${productosCarrito.join("\n- ")}`);
                eliminar(prompt("Ingrese el producto que desea eliminar").toLowerCase().trim());
                eliminarMAS = prompt("¿Desea eliminar otro producto? (si / no)").toLowerCase().trim();
            };
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Eliminar producto\n4. Pagar y salir").trim());
            break;
        case "4":
            alert("Gracias por su compra");
            break;
        default:
            alert("Opcion no valida");
            menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Eliminar producto\n4. Pagar y salir").trim());
            break;
    };
};

do{
    menu(prompt("Market\n1. Agregar producto\n2. Ver carrito\n3. Eliminar producto\n4. Pagar y salir").trim());
}while(prompt("¿Desea realizar otra accion? (si / no)").toLowerCase().trim() === "si");

alert("Fin del programa...");