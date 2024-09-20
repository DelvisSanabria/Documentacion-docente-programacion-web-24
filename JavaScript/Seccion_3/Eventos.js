/*
    ¿Qué son Eventos?
    Los eventos son la manera en la cual JavaScript controla las acciones de los visitantes y define el 
    comportamiento de la página cuando estos se produzcan. 

    Cuando un usuario visita una página web e interactúa con ella se producen los eventos y con Javascript podemos 
    definir qué queremos que ocurra cuando se produzcan los eventos.

    Para entender los eventos es necesario conocer algunos conceptos básicos:

    •	Evento: Es algo que ocurre. Generalmente los eventos ocurren cuando el usuario interactúa con el 
        documento, pero podrían producirse por situaciones ajenas al usuario, como el caso en el que una 
        imagen no este disponible.

    •	Tipo de evento: Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre un botón o
        el envío de un formulario. Cada tipo de elemento de la página ofrece diversos tipos de eventos de JavaScript. 

    •	Manejador de evento: Es el comportamiento que nosotros podemos asignar como respuesta a un 
        evento. Se especifica mediante una función en JavaScript, que se asocia a un tipo de evento en concreto. 
        Una vez asociado el manejador a un tipo de evento sobre un elemento de la página, y cada vez que 
        ocurre ese tipo de evento sobre ese elemento en concreto, se ejecutará el manejador de evento asociado.
    
    Formas de manejar eventos:

    •	Mediante atributos HTML: <button onClick="miFuncion ()">Presiona Aquí!</button>

    •	Mediante propiedades JavaScript: elemento.onClick = miFuncion (){ …código… }

    •	Mediante addEventListener():  la forma más recomendable es hacer uso del método .addEventListener(), 
        el cuál es mucho más potente y versatil para la mayoría de los casos.

    Con el método .addEventListener() podemos añadir una escucha del evento indicado en el primer parámetro, 
    y en el caso de que ocurra, se ejecutará la función asociada indicada en el segundo parámetro.
*/



// Elementos del DOM para aplicar eventos del Mouse
const boton1 = document.getElementById('boton-1');
const boton2 = document.getElementById('boton-2');
const boton3 = document.getElementById('boton-3');
const boton4 = document.getElementById('boton-4');
const div1 = document.getElementById('div-1');
const div2 = document.getElementById('div-2');


/* 
    Esta es una lista de algunos de los eventos mas usados (para eventos mediante propiedades).
    - onclick: ocurre cuando el usuario hace clic sobre el elemento.
    - ondblclick: ocurre cuando el usuario hace doble clic sobre el elemento.
    - onmousedown: ocurre cuando el usuario presiona el botón del ratón en un elemento.
    - onmouseup: ocurre cuando el usuario libera el botón pulsado del ratón sobre un elemento.
    - onmouseover: ocurre cuando el usuario mantiene el puntero sobre un elemento.
    - onmouseout: ocurre cuando el usuario mueve el puntero fuera de un elemento.
    - onmousemove: ocurre cuando el usuario mueve el puntero del ratón sobre un elemento.
    - onkeydown: ocurre cuando el usuario presiona una tecla.
    - onkeypress: ocurre cuando el usuario presiona una tecla y la mantiene pulsada.
    - onkeyup: ocurre cuando el usuario libera la tecla.
    - onfocus: ocurre cuando el elemento gana el foco.
    - onblur: Cuando el elemento pierde el foco.
*/



// Eventos de propiedades JavaScript
boton1.onclick = function(){
    alert('Click en el botón 1');
};

boton2.ondblclick = function(){
    alert('Doble Click en el botón 2');
};

boton3.onmousedown = function(){
    alert('Presionar el botón 3');
};

boton4.onmouseup = function(){
    alert('Soltar el botón 4');
};

div1.onmouseover = function(){
    alert('Mouse entro en el area del div 1');
};


div2.onmouseout = function(){
    alert('Mouse salio del area del div 2');
};




/* 
    Esta es una lista de algunos de los eventos mas usados (para eventos mediante addEventListener()).
    - click: ocurre cuando el usuario hace clic sobre el elemento.
    - dblclick: ocurre cuando el usuario hace doble clic sobre el elemento.
    - mousedown: ocurre cuando el usuario presiona el botón del ratón en un elemento.
    - mouseup: ocurre cuando el usuario libera el botón pulsado del ratón sobre un elemento.
    - mouseover: ocurre cuando el usuario mantiene el puntero sobre un elemento.
    - mouseout: ocurre cuando el usuario mueve el puntero fuera de un elemento.
    - mousemove: ocurre cuando el usuario mueve el puntero del ratón sobre un elemento.
    - keydown: ocurre cuando el usuario presiona una tecla.
    - keypress: ocurre cuando el usuario presiona una tecla y la mantiene pulsada.
    - keyup: ocurre cuando el usuario libera la tecla.
    - focus: ocurre cuando el elemento gana el foco.
    - blur: Cuando el elemento pierde el foco.
*/


// Elementos del DOM para aplicar eventos del Teclado
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const input4 = document.getElementById('input-4');
const input5 = document.getElementById('input-5');
const input6 = document.getElementById('input-6');


// Eventos de addEventListener()
input1.addEventListener('keydown', function(){
    console.log('Se presiono una tecla en el input 1');
});

input2.addEventListener('keyup', function(){
    console.log('Se solto una tecla en el input 2');
});

input3.addEventListener('keypress', function(){
    console.log('Se mantuvo presionada una tecla en el input 3');
});

input4.addEventListener('change', function(){
    console.log(`El valor del input 3 cambio a: ${input4.value}`);
});

input5.addEventListener('focus', function(){
    console.log('El input 5 gano el foco');
});

input6.addEventListener('blur', function(){
    console.log('El input 6 perdio el foco');
});




// Tambien podemos detectar la tecla (key) que se presiono ya que cada tecla tiene un 
// codigo (code) unico ASCII

// Logica basica de un videojuego
document.body.addEventListener('keydown', function(event){
    if(event.code === 'ArrowUp'){
        console.log('Saltar');
    }
    
    if(event.code === 'ArrowDown'){
        console.log('Agacharse');
    }

    if(event.code === 'ArrowLeft'){
        console.log('Retroceder');
    }

    if(event.code === 'ArrowRight'){
        console.log('Avanzar');
    }

    if(event.code === 'Enter'){
        console.log('Disparar');
    }

    if(event.code === 'Space'){
        console.log('Recargar arma');
    }
});








// Ejercicio para realizar en casa 1:

// Elabora el juego de piedra, papel o tijera.

// El juego debe de tener las siguientes caracteristicas:
// - Mostrar un menu que permita seleccionar el numero de rondas que se jugaran(3, 5, 7, 9, 11)
// - en la pantalla se deben mostrar 3 botones: piedra, papel, tijera (usar imagenes para los botones)
// - Al hacer clic sobre un boton el usuario debe de seleccionar una opcion
// - La computadora debe de seleccionar una opcion aleatoria (math.random())
// - Debe de haber un contador de puntos para el usuario y otro para la computadora
// - Debe de haber un contador de rondas
// - Debe de haber un contador de empates
// - Debe de haber un boton para reiniciar el juego
// - Debe de haber un mensaje que indique quien gano la ronda actual
// - Debe de haber un mensaje que indique quien gano el juego al finalizar las rondas
// - Debe de haber un mensaje que indique si el juego termino en empate



// Ejercicio para realizar en casa 2:

// Elabora El juego llamado "Memoria" en el que el usuario debe de encontrar las parejas de cartas
// que estan boca abajo. 

// El juego debe de tener las siguientes caracteristicas:
// - 16 cartas boca abajo (8 pares de cartas)
// - Al hacer clic sobre una carta esta debe de voltearse para mostrar su contenido 
// (Usa CSS o cualquier librerias de animaciones)
// - Si el usuario encuentra una pareja de cartas estas deben de quedarse boca arriba
// - Si el usuario no encuentra una pareja de cartas estas deben de volver a su estado original (boca abajo)
// - El juego debe de tener un contador de intentos


// Opcional:
// - El juego debe de tener un multiplicador de puntos por cada pareja encontrada consecutivamente.
// (Si el usuario encuentra 2 parejas consecutivas el multiplicador es 2, si encuentra 3 parejas consecutivas el multiplicador es 3, etc.
// Si el usuario no encuentra una pareja consecutiva el multiplicador vuelve a 1)

// Opcional para despues de ver asincronismo:
// El juego debe de tener un tiempo limite para encontrar todas las parejas
