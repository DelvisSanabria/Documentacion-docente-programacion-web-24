/*
Archivo 11

    Recursividad: la recursividad es una función que se llama a sí misma. 
    Piensa en ello como una alternativa al bucle.

    Pero no solamente eso, la recursividad tambien se puede utilizar para desencadenar
    ejecuciones de funciones en secuencia, algo semejante al efecto domino.



    Veamos un ejemplo:

    Imagina que tienes una tarjeta de bus o metro.
    Esta tarjeta se compra y viene con 10 viajes incluidos, posteriormente luego de utilizar los 10 viajes al intentar realizar
    un 11vo viaje el torniquete o la puerta de acceso emite una alarma y te notifica que no tienes saldo,
    dando varias opciones: Recargar 10 viajes mas, comprar un bono mensual o pagar 1 solo viaje.

    Aqui se acaba de utilizar la recursividad, ¿Como?:
    
    1- Se ejecuta la funcion llamada "deduccion" de viaje, esta funcion tiene una condicional que si hay saldo deduce 1 viaje
    y sino emite una alarma y muestra un menu con opciones, el cual en base a la opcion marcada llamara a otra funcion.
    
    2- la funcion llamada desde la funcion "deduccion" (cualquiera que sea la opcion tomada), va a ejecutarse y vuelve a llamar
    a la funcion "deduccion", realizando nuevamente el uso de la recursividad.
*/

//Ejemplo 1: Contador que se usa a si mismo hasta acabar la cuenta hacia atras
function countdown(number) {
    if (number < 0) {
        alert("Cuenta regresiva finalizada!");
        return;
    }     
    alert(`la cuenta regresiva va por el numero: ${number}`);
    // Llamada recursiva con un número menor
    setTimeout(() => {
        countdown(number - 1);
    }, 1000);
}
        
function startCountdown() {
    countdown(10);
}



// Ejemplo 3: Funcionalidad de un sistema de cobro de transporte publico


let viajes = 10;


function deduccion(){
    alert(`Bienvenido, su saldo actual es: ${viajes}`);
    if(viajes>0){
        viajes--;
        alert(`Viajes restantes: ${viajes}`);
        //podemos volver a llamarla en caso de querer hacer un bucle infinito
        deduccion()
    }else{
        switch(+prompt(`Sado insuficiente, ¿Que deseas hacer?\n1. Recargar 10 viajes\n2. Comprar un bono mensual\n3. Pagar 1 viaje`)){
            case 1:
                recargar10();
                break;
            case 2:
                comprarBono();
                break;
            case 3:
                pagar1Viaje();
                break;
            default:
                alert("Opción incorrecta");
        };
    };
};


function recargar10(){
    // Logica de esta funcion
    viajes = 10;

    alert("Recargaste 10 viajes");

    // Llamar de vuelta a la funcion de deduccion
    deduccion();
};


function comprarBono(){
    // Llogica de esta funcion
    viajes = 1000;

    alert("Compraste un bono mensual");

    // Llamar de vuelta a la funcion de deduccion
    deduccion();
};


function pagar1Viaje(){
    // Llogica de esta funcion
    viajes = 1;

    alert("Pagaste 1 viaje");

    // Llamar de vuelta a la funcion de deduccion
    deduccion();
};




/* 
    Realizar la logica de un cajero automatico que realice lo siguiente:
    A) Solicitar clave
        - Validar la clave y en caso de no coincidir con la clave actual mostrar un mensaje y volver a solicitarla.
        Si la clave se solicita mas de 3 veces bloquear la cuenta.

        - Si la clave coincide, mostrar un menú (B)

    B) Mostrar un menú
        1. Retirar
        2. Consultar Saldo
        3. Depositar
        4. Transferir
        5. Salir

    1-   En caso de retirar, debe solicitar el monto, realizar la deduccion y mostrar el saldo final.
        Posteriormente volver a mostrar el menú.

    2-   En caso de consultar saldo, mostrar el saldo disponible.
        Posteriormente volver a mostrar el menú.

    3-   En caso de depositar, solicitar el monto, realizar la adición y mostrar el saldo final.
        Posteriormente volver a mostrar el menú.

    4-   En caso de transferir, solicitar la cuenta destino (La cuenta destino es estatica) y el monto, realizar la deduccion y mostrar el saldo final.
        Posteriormente volver a mostrar el menú.

    5- En caso de salir, mostrar un mensaje y cerrar el programa.
*/


// Se crean las variables para las cuentas

// Cuenta ahorro
let saldo = 1000;

// Cuenta Corriente
let saldo2 = 143;

// Cuenta Familiar
let saldo3 = 20;


function menu(){
    switch(+prompt(`Bienvenido a Lexpin Bank\n¿Que desea hacer?\n1. Retirar\n2. Consultar Saldo\n3. Depositar\n4. Transferir\n5. Salir`)){
        case 1:
            retirar();
            break;
        case 2:
            consultar();
            break;
        case 3:
            depositar();
            break;
        case 4:
            transferir();
            break;
        case 5:
            salir();
            break;
        default:
            alert("Opción invalida");
            menu();
    };
};



function retirar(){
    const tipoCuenta = +prompt(`Indica la cuenta desde la que deseas retirar:\n1. Cuenta Ahorro\n2. Cuenta Corriente\n3. Cuenta Familiar`)

    if(tipoCuenta >= 1 && tipoCuenta <= 3){
        const monto = +prompt("¿Cuanto deseas retirar?");
        switch(tipoCuenta){
            case 1:
                if(saldo >= monto){
                    saldo -= monto; // Equivalente a saldo = saldo - monto
                    alert(`Retiraste ${monto}$\nTu saldo actual es: ${saldo}$`);
                }else{
                    alert(`Lo sentimos, tu saldo es insuficiente para realizar esta operacion\nSaldo de la cuenta: ${saldo}$`);
                    retirar();
                }
                break;
            case 2:
                if(saldo2 >= monto){
                    saldo2 -= monto;
                    alert(`Retiraste ${monto}$\nTu saldo actual es: ${saldo2}$`);
                }else{
                    alert(`Lo sentimos, tu saldo es insuficiente para realizar esta operacion\nSaldo de la cuenta: ${saldo2}$`);
                    retirar();
                }
                break;
            case 3:
                if(saldo3 >= monto){
                    saldo3 -= monto;
                    alert(`Retiraste ${monto}$\nTu saldo actual es: ${saldo3}$`);
                }else{
                    alert(`Lo sentimos, tu saldo es insuficiente para realizar esta operacion\nSaldo de la cuenta: ${saldo3}$`);
                    retirar();
                }
                break;
        }
    }else{
        alert("La cuenta indicada no existe");
        retirar();
    }
    menu();
}




function consultar(){
    switch(+prompt(`Indica la cuenta que deseas consultar:\n1. Cuenta Ahorro\n2. Cuenta Corriente\n3. Cuenta Familiar`)){
        case 1:
            alert(`El saldo de la cuenta de ahorro es: ${saldo}$`);
            break;
        case 2:
            alert(`El saldo de la cuenta corriente es: ${saldo2}$`);
            break;
        case 3:
            alert(`El saldo de la cuenta familiar es: ${saldo3}$`);
            break;
        default:
            alert("La cuenta indicada no existe");
            consultar();
    }

    menu();
};




function depositar(){
    const tipoCuenta = +prompt(`Indica la cuenta que deseas depositar:\n1. Cuenta Ahorro\n2. Cuenta Corriente\n3. Cuenta Familiar`);
    
    if(tipoCuenta >= 1 && tipoCuenta <= 3){
        const monto = +prompt("¿Cuanto deseas depositar?")
        switch(tipoCuenta){
            case 1:
                saldo += monto;
                alert(`Depostaste: ${monto}$\nEl saldo de la cuenta de ahorro es: ${saldo}$`);
                break;
            case 2:
                saldo2 += monto;
                alert(`Depostaste: ${monto}$\nEl saldo de la cuenta corriente es: ${saldo2}$`);
                break;
            case 3:
                saldo3 += monto;
                alert(`Depostaste: ${monto}$\nEl saldo de la cuenta familiar es: ${saldo3}$`);
                break;
        }
    }else{
        alert("La cuenta indicada no existe");
        depositar();
    }
    menu();
};



function transferir(){
    const cuentaOrigen = +prompt(`Indica la cuenta desde la que deseas transferir:\n1. Cuenta Ahorro\n2. Cuenta Corriente\n3. Cuenta Familiar`);
    if(cuentaOrigen >= 1 && cuentaOrigen <= 3){
        switch(cuentaOrigen){
            case 1:
                const cuentaDestino1 = +prompt(`Indica la cuenta a la que deseas transferir:\n1. Cuenta Corriente\n2. Cuenta Familiar`);
                if(cuentaDestino1 >= 1 && cuentaDestino1 <= 2){
                    const monto = +prompt("¿Cuanto deseas transferir?");
                    if(saldo >= monto){
                        saldo -= monto;
                        switch(cuentaDestino1){
                            case 1:
                                saldo2 += monto;
                                alert(`La transferencia se realizo con exito\nEl saldo de la cuenta de ahorro es: ${saldo}$\nEl saldo de la cuenta corriente es: ${saldo2}$`);
                                break;
                            case 2:
                                saldo3 += monto;
                                alert(`La transferencia se realizo con exito\nEl saldo de la cuenta de ahorro es: ${saldo}$\nEl saldo de la cuenta familiar es: ${saldo3}$`);
                                break;
                        }
                    }else{
                        alert("Lo sentimos, tu saldo es insuficiente para realizar esta operacion");
                        transferir();
                    }
                }else{
                    alert("La cuenta indicada no existe");
                    transferir();
                }
                break;
            case 2:
                const cuentaDestino2 = +prompt(`Indica la cuenta a la que deseas transferir:\n1. Cuenta Ahorro\n2. Cuenta Familiar`);
                if(cuentaDestino2 >= 1 && cuentaDestino2 <= 2){
                    const monto = +prompt("¿Cuanto deseas transferir?");
                    if(saldo2 >= monto){
                        saldo2 -= monto;
                        switch(cuentaDestino2){
                            case 1:
                                saldo += monto;
                                alert(`La transferencia se realizo con exito\nEl saldo de la cuenta de corriente es: ${saldo2}$\nEl saldo de la cuenta ahorro es: ${saldo}$`);
                                break;
                            case 2:
                                saldo3 += monto;
                                alert(`La transferencia se realizo con exito\nEl saldo de la cuenta de corriente es: ${saldo2}$\nEl saldo de la cuenta familiar es: ${saldo3}$`);
                                break;
                        }
                    }else{
                        alert("Lo sentimos, tu saldo es insuficiente para realizar esta operacion");
                        transferir();
                    }
                }else{
                    alert("La cuenta indicada no existe");
                    transferir();
                }
                break;
            case 3:
                const cuentaDestino3 = +prompt(`Indica la cuenta a la que deseas transferir:\n1. Cuenta Ahorro\n2. Cuenta Corriente`);
                if(cuentaDestino3 >= 1 && cuentaDestino3 <= 2){
                    const monto = +prompt("¿Cuanto deseas transferir?");
                    if(saldo3 >= monto){
                        saldo3 -= monto;
                        switch(cuentaDestino3){
                            case 1:
                                saldo += monto;
                                alert(`La transferencia se realizo con exito\nEl saldo de la cuenta de familiar es: ${saldo3}$\nEl saldo de la cuenta ahorro es: ${saldo}$`);
                                break;
                            case 2:
                                saldo2 += monto;
                                alert(`La transferencia se realizo con exito\nEl saldo de la cuenta de familiar es: ${saldo3}$\nEl saldo de la cuenta corriente es: ${saldo2}$`);
                                break;
                        }
                    }else{
                        alert("Lo sentimos, tu saldo es insuficiente para realizar esta operacion");
                        transferir();
                    }
                }else{
                    alert("La cuenta indicada no existe");
                    transferir();
                }
                break;
        }
    }else{
        alert("La cuenta indicada no existe");
        transferir();
    }

    menu();
};



function salir(){
    alert("Gracias por usar Lexpin Bank");
};