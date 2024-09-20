/*
    ¿Que es la Web API Canvas?
        Es una API que nos permite dibujar gráficos en 2D y 3D en un elemento HTML <canvas>
        El elemento <canvas> tiene dos atributos que son width y height, que definen el tamaño del lienzo.

    ¿Como se usa?
        1.- Se crea un elemento <canvas> en el HTML
        2.- Se obtiene el contexto del canvas
        3.- Se dibuja en el canvas

    ¿Que es el contexto del canvas?
        Es un objeto que tiene métodos y propiedades para dibujar figuras en el canvas.
    
    Metodos del contexto del canvas:

    Contexto 2D:
        - getContext: Devuelve un objeto que proporciona métodos y propiedades para dibujar en el canvas
            getContext('2d')

    Cuadros o rectángulos:
        - fillRect: Dibuja un rectángulo relleno
            fillRect(x, y, ancho, alto)
        - strokeRect: Dibuja un rectángulo sin relleno
            strokeRect(x, y, ancho, alto)
        - clearRect: Borra un rectángulo
            clearRect(x, y, ancho, alto)
        - stroke: Dibuja el contorno de una forma

    Circulos:
        - arc: Dibuja un arco
            arc(x, y, radio, anguloInicial, anguloFinal, sentidoHorario)
        - radio: Establece el radio de un arco
            radio = numero

    Textos:
        - font: Establece la fuente de texto
            font = valor
        - textAlign: Establece la alineación horizontal del texto
            textAlign = valor
        - textBaseline: Establece la alineación vertical del texto
            textBaseline = valor
        - fillText: Dibuja texto relleno
            fillText(texto, x, y)
        - strokeText: Dibuja texto sin relleno
            strokeText(texto, x, y)

    Otros:
        - beginPath: Inicia un nuevo camino
            beginPath()
        - closePath: Cierra el camino actual
            closePath()
        - moveTo: Mueve el lápiz a las coordenadas especificadas
            moveTo(x, y)
        - lineWidth: Establece el ancho de la línea
            lineWidth = numero
        - lineTo: Dibuja una línea desde la posición actual hasta las coordenadas especificadas
            lineTo(x, y)
        - fill: Rellena el área del camino
            fill()
        - stroke: Dibuja el contorno del camino
            stroke()
        - fillStyle: Establece el color de relleno
            fillStyle = color
            Nota: Siempre se debe definir el color antes de dibujar
        - strokeStyle: Establece el color del contorno / borde
            strokeStyle = color
*/


// Seleccionamos el canvas
const canvas = document.getElementById('miCanvas');


// Establecemos las dimensiones del canvas
canvas.width = 900;
canvas.height = 600;


// Obtenemos el contexto del canvas
const contexto = canvas.getContext('2d');

/*
// Dibujamos un rectángulo relleno
// Establecemos el color de relleno
contexto.fillStyle = '#2541b2';

// Dibujamos el rectángulo
contexto.fillRect(0,0, canvas.width, canvas.height);


// Dibujamos un circulo relleno

// Comenzamos un nuevo camino o trazado
contexto.beginPath();
    // Establecemos el color de relleno
    contexto.fillStyle = 'yellow';

    // Dibujamos el circulo
//          Pos. x, Pos. y, Radio, anguloInicial, anguloFinal (6.28 es un círculo completo)
    contexto.arc(100, 150, 50, 0, 6.28);

    // Rellenamos el circulo
    contexto.fill();

// Terminamos el camino
contexto.closePath();



// Dibujamos un circulo sin relleno
contexto.beginPath();
    // Establecemos el color del contorno
    contexto.strokeStyle = 'greenyellow';

    // Damos el grosor de la linea
    contexto.lineWidth = 7;

    // Dibujamos el circulo
    contexto.arc(800, 150, 50, 0, 6.28);
    
    // Dibujamos el contorno
    contexto.stroke();
contexto.closePath();


// Dibujamos un cuadrado/rectangulo sin relleno
contexto.beginPath();
    // Establecemos el color del contorno
    contexto.strokeStyle = 'orange';

    // Damos el grosor de la linea
    contexto.lineWidth = 7;

    // Dibujamos el cuadrado
    contexto.strokeRect(400, 150, 100, 100);

    // Dibujamos el contorno
    contexto.stroke();
contexto.closePath();


// Dibujamos un texto relleno
//             Grosor tamaño y fuente
contexto.font = "bolder 30px Consolas";
contexto.fillStyle = "white";
//                 Texto, Pos. x, Pos. y
contexto.fillText("Aprendiendo a usar Canvas", 250, 100);




// Dibujamos una línea diagonal de arriba izquierda a abajo derecha
// contexto.beginPath();
//     // Establecemos el color del contorno
//     contexto.strokeStyle = 'red';

//     // Damos el grosor de la linea
//     contexto.lineWidth = 7;

//     // Movemos el lápiz a la posición inicial
//     contexto.moveTo(0, 0);

//     // Dibujamos la línea hasta la posición final
//     contexto.lineTo(canvas.width, canvas.height);

//     // Dibujamos el contorno
//     contexto.stroke();
// contexto.closePath();


// Dibubamos el borde del canvas solo con una línea
contexto.beginPath();
    // Establecemos el color del contorno
    contexto.strokeStyle = 'white';

    // Damos el grosor de la linea
    contexto.lineWidth = 8;

    // Dibujamos la posición inicial del trazo de la línea
    contexto.moveTo(0, 0);

    // Movemos la linea a la derecha arriba
    contexto.lineTo(canvas.width, 0);

    // Movemos la linea a la derecha abajo
    contexto.lineTo(canvas.width, canvas.height);

    // Movemos la linea a la izquierda abajo
    contexto.lineTo(0, canvas.height);

    // Movemos la linea a la izquierda arriba
    contexto.lineTo(0, 0);

    // Dibujamos el contorno
    contexto.stroke();

contexto.closePath();




// Dibujamos una casa


contexto.beginPath();

    // Chimenea
    contexto.fillStyle = '#5A3400';
    contexto.fillRect(250, 200, 50, 100);

    // Techo
    contexto.fillStyle = '#8B0000';
    contexto.moveTo(100, 300);
    contexto.lineTo(200, 200);
    contexto.lineTo(300, 300);
    contexto.fill();

    // Pared
    contexto.fillStyle = '#8B4513';
    contexto.fillRect(100, 300, 200, 100);

    // Puerta
    contexto.fillStyle = 'black';
    contexto.fillRect(175, 330, 50, 70);

    // Ventana Izquierda
    contexto.fillStyle = 'white';
    contexto.fillRect(120, 320, 30, 30);

    // Ventana Derecha
    contexto.fillStyle = 'white';
    contexto.fillRect(250, 320, 30, 30);
contexto.closePath();
*/



/*
    Ejemplo practico: Realizaremos el Juego de Air Hockey (Hockey de mesa).
*/


// Importamos la cancha y el mensaje de victoria
import {dibujarCancha} from './Cancha.js';
import {mensajeVictoria, tiempoDeJuego} from './Mensaje.js';



// Cargamos los sonidos
const sonidoBase = new Audio('./audios/base.mp3');
const sonidoRebote = new Audio('./audios/rebote.mp3');
const sonidoGol = new Audio('./audios/gol.mp3');
const sonidoVictoria = new Audio('./audios/victoria.mp3');



// Creamos la clase Jugador
class Jugador{
    constructor(x, color){
        this.x = x;
        this.y = canvas.height/2 - 50;
        this.width = 10;
        this.height = 100;
        this.color = color || "#530";
        this.puntos = 0;
    }

    dibujar(){
        // Establecemos el color de relleno del jugador
        contexto.fillStyle = this.color;

        //Dibujamos y ubicamos al jugador en el canvas
        contexto.fillRect(this.x, this.y, this.width, this.height);
    };


    colision(pel){
        // Colision de la pelota con el jugador
        // Si la pelota esta en el rango "x" del jugador evaluamos...
        // pex.x - pel-radio < this.x + this.width: Si la posicion del borde izquierdo de la pelota es menor al borde derecho del jugador
        // pel.x + pel.radio > this.x: Si la posicion del borde derecho de la pelota es mayor al borde izquierdo del jugador
        if(pel.x - pel.radio < this.x + this.width && pel.x + pel.radio > this.x){
            // Si la pelota esta en el rango "y" del jugador
            // pel.y - pel.radio < this.y + this.height: Si la parte superior de la pelota esta en la parte inferior del jugador
            // pel.y + pel.radio > this.y: Si la parte inferior de la pelota esta en la parte superior del jugador
            if(pel.y - pel.radio < this.y + this.height && pel.y + pel.radio > this.y){
                // Si la pelota se encuentra en el rango de colisión "X", "Y" con el jugador, cambiamos la dirección de la pelota.
                // Evaluamos... si la pelota ha golpeado la mitad izquierda del jugador, cambiamos la dirección a la izquierda, sino, a la derecha.
                if(pel.x < this.x + this.width / 2){
                    pel.direccionX = "izquierda";
                    // Reproducimos el sonido de rebote
                    sonidoRebote.play();
                }else{
                    pel.direccionX = "derecha";
                    // Reproducimos el sonido de rebote
                    sonidoRebote.play();
                }
            }
        };
    };
};





// 0       Eje X       900
//
// Eje Y
//
// 600

// probamos la clase Jugador instanciando 2 jugadores
const jugador1 = new Jugador(10, 'blue');
const jugador2 = new Jugador(canvas.width - 20, 'red');




class Pelota {
    constructor(talla = 15, color = "#5A5B45"){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.radio = talla;
        this.color = color;
        this.friccion = 0.001;
        this.velocidadX = 1;
        this.velocidadY = 1;
        this.direccionX = Math.random() < 0.5 ? "derecha" : "izquierda";
        this.direccionY = Math.random() < 0.5 ? "abajo" : "arriba";

        // Esta propiedad se queda como ejercicio para quien deseea añadir la opcion de aumento de nivel conforme
        // pasen los segundos en la partida.
        this.nivelIncremental = false

        // ¿Por que estos valores?: Lo vereos en el metodo dibujar().
        this.anguloInicial = 0;
        this.anguloFinal = Math.PI * 2; // Esto equivale a 6.28 que es el total de un círculo en radianes.
    }


    // Este metodo permite que la pelota se dibuje en el canvas
    dibujar(){
        // Establecemos el color de relleno de la pelota
        contexto.fillStyle = this.color;

        /* 
            Cuando dibujas formas en un canvas con métodos como `context.arc()`, estás creando un "path" (camino o trazado),
            esto es una serie de puntos que se conectan entre sí y que el navegador usa para dibujar la forma.
            
            `context.beginPath()` inicia un nuevo camino, evitando que las formas se conecten entre sí de manera no deseada. 
            `context.closePath()` cierra el camino, conectando el último punto con el primero, útil para formas no cerradas. 
        */

        // Comenzamos un nuevo camino o trazado
        contexto.beginPath();

        // Dibujamos la pelota
        /* 
            La función `context.arc()` utiliza radianes para los ángulos inicial y final. 
            En radianes, un círculo completo es `2 * Math.PI`, que es aproximadamente 6.28. 
            Por lo tanto, para dibujar un círculo completo, necesitas un ángulo de `2 * Math.PI` radianes
            o colocar directamente 6.28 como valor del ángulo final.
        */
       //            pos. x, pos. y, radio,     anguloInicial rads,   anguloFinal rads
        contexto.arc(this.x, this.y, this.radio, this.anguloInicial, this.anguloFinal);

        // Rellenamos la pelota
        contexto.fill();

        // Terminamos el camino
        contexto.closePath();
    };

    // // Este metodo permite que la pelota se mueva en el canvas
    mover(){
        // Evaluamos la dirección de la pelota para moverla en diagonal.
        // Si la direccionX es derecha y la direccionY es abajo / diagonal derecha abajo
        if(this.direccionX === "derecha" && this.direccionY === "abajo"){
            this.x+=8;
            this.y+=8;

            // Si deseamos manejar velocidad incremental añadimos la velidad a la posición de la pelota
            // this.x = this.x + this.velocidadX;
            // this.y = this.y + this.velocidadY;

        } // Sino, si la direccionX es derecha y la direccionY es arriba / diagonal derecha arriba
        else if(this.direccionX === "derecha" && this.direccionY === "arriba"){
            this.x+=8;
            this.y-=8;

            // this.x = this.x + this.velocidadX;
            // this.y = this.y - this.velocidadY;
        }// Sino, si la direccionX es izquierda y la direccionY es abajo / diagonal izquierda abajo
        else  if(this.direccionX === "izquierda" && this.direccionY === "abajo"){
            this.x-=8;
            this.y+=8;

            // this.x = this.x - this.velocidadX;
            // this.y = this.y + this.velocidadY;
        } // Sino, si la direccionX es izquierda y la direccionY es arriba / diagonal izquierda arriba
        else if(this.direccionX === "izquierda" && this.direccionY === "arriba"){
            this.x-=8;
            this.y-=8;

            // this.x = this.x - this.velocidadX;
            // this.y = this.y - this.velocidadY;
        }


        // Aumentamos la velocidad de la pelota conforme avanza el juego (Aumentar el nivel de dificultad)
        // Para esto se debe indicar que se desea incrementar el nivel incrementalmente al inicio del juego.
        if(this.nivelIncremental){
            this.velocidadX += this.friccion;
            this.velocidadY += this.friccion;
        };



        /* *** Limites con cancha *** */
        // Evaluamos si la pelota llega a los limites del canvas considerando el radio de la pelota y el ancho de los jugadores.
        // Esto se considera colisión con los bordes del canvas.

        // Si la pelota llega al limite inferior, cambiamos la dirección de la pelota a arriba.
        if(this.y >= canvas.height - this.radio){
            this.direccionY = "arriba";
            sonidoRebote.play();
        }// Sino, si la pelota llega al limite superior, cambiamos la dirección de la pelota a abajo
        else if(this.y <= this.radio){
            this.direccionY = "abajo";
            sonidoRebote.play();
        } // Sino, si la pelota llega al limite derecho, cambiamos la dirección de la pelota a izquierda
        else if(this.x >= canvas.width - this.radio){
            this.direccionX = "izquierda";
            sonidoGol.play();
            jugador1.puntos++;
            document.getElementById('puntosJ1').innerText = jugador1.puntos;
        } // Sino, si la pelota llega al limite izquierdo, cambiamos la dirección de la pelota a derecha
        else if(this.x <= this.radio){
            this.direccionX = "derecha";
            sonidoGol.play();
            jugador2.puntos++;
            document.getElementById('puntosJ2').innerText = jugador2.puntos;
        }
    }
}


// Instanciamos la clase Pelota
const pelota = new Pelota();




// Primer dibujado de los elementos
dibujarCancha(canvas, contexto);
jugador1.dibujar();
jugador2.dibujar();
pelota.dibujar();




// Almacenamos el estado del teclado, este objeto se utilizará para llevar un registro de qué 
// teclas del teclado están actualmente presionadas.
let teclasPresionadas = {};

/* 
    Añadimos un controlador de eventos al documento que se activa cuando se presiona una tecla. 
    Cuando se presiona una tecla, se añade una entrada con la tecla presionada como "key" y true como "value". 
    Esto indica que la tecla está actualmente presionada.
*/
document.addEventListener('keydown', (evento) => {
    teclasPresionadas[evento.key] = true;
    // console.table(teclasPresionadas);
});


/*
    Añadimos un controlador de eventos al documento que se activa cuando se suelta una tecla.
    Cuando se suelta una tecla, se cambia el valor de la tecla presionada a false.
*/
document.addEventListener('keyup', (evento) => {
    teclasPresionadas[evento.key] = false;
    // console.table(teclasPresionadas);
});




// NOTA: antes de comenzar con las animaciones debemos elaborar una funcion que se encargue de refrescar el canvas.

// Funcion que actualiza la pantalla
function actualizarPantalla(){
    // Limpiamos el canvas cada vez que se actualiza para eliminar el rastro de la pelota y los jugadores
    // y poder dibujarlos en su nueva posición.
    //           desde x, desde y, hasta x, hasta y
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujamos la cancha
    dibujarCancha(canvas, contexto);


    // Movemos a los jugadores en base a las teclas presionadas y registradas en el objeto teclasPresionadas
    
    // Si la recla presionada es "w" y la posición "Y" del jugador 1 es mayor a 0, movemos al jugador 1 hacia arriba
    if(teclasPresionadas['w'] && jugador1.y > 0){
        jugador1.y-=6;
    };

    // Si la recla presionada es "s" y la posición "Y" del jugador 1 es menor al alto del canvas, movemos al jugador 1 hacia abajo
    if(teclasPresionadas['s'] && jugador1.y < canvas.height - jugador1.height){
        jugador1.y+=6;
    };


    // Si la recla presionada es "ArrowUp" y la posición "Y" del jugador 2 es mayor a 0, movemos al jugador 2 hacia arriba
    if(teclasPresionadas['ArrowUp'] && jugador2.y > 0){
        jugador2.y-=6;
    };

    // Si la recla presionada es "ArrowDown" y la posición "Y" del jugador 2 es menor al alto del canvas, movemos al jugador 2 hacia abajo
    if(teclasPresionadas['ArrowDown'] && jugador2.y < canvas.height - jugador2.height){
        jugador2.y+=6;
    };


    // Evaluamos si la pelota colisiona con los jugadores
    jugador1.colision(pelota);
    jugador2.colision(pelota);


    // Dibujamos los jugadores
    jugador1.dibujar();
    jugador2.dibujar();

    // Dibujamos la pelota
    pelota.dibujar();

    // Movemos la pelota
    pelota.mover();

    // Evaluamos si alguno de los jugadores llega a los 5 puntos
    if(jugador1.puntos === 5 || jugador2.puntos === 5){
        // Detenemos la animación
        cancelAnimationFrame(idDelRequestAnimationFrame);

        // Mostramos el mensaje de victoria
        mensajeVictoria(canvas, contexto, jugador1.puntos === 5 ? 'Jugador 1' : 'Jugador 2');
        

        // detenemos la musica del juego
        sonidoBase.pause();

        // Reproducimos el sonido de victoria después de 0.6 segundos
        setTimeout(() => {
            sonidoVictoria.play();
        },600);

        // Habilitamos el botón de reinicio
        document.getElementById('reiniciar').disabled = false;
    }else{
        // Soliciamos un nuevo frame de animación
        idDelRequestAnimationFrame = requestAnimationFrame(actualizarPantalla);
    }
};




/* *** Inicializamos el juego *** */

let idDelRequestAnimationFrame;

// Seleccionamos el boton que da inicio al juego
const botonIniciar = document.getElementById('iniciar');

botonIniciar.addEventListener('click', ()=>{

    // reproducimos la musica de fondo
    sonidoBase.play();


    // Iniciamos la animación

    /*
        ¿Que es requestAnimationFrame?
            Es un método que le dice al navegador que quieres realizar una animación y solicita que el navegador 
            programe el repintado de la ventana para el próximo ciclo de animación.

        requestAnimationFrame() se llama a sí misma recursivamente, lo que significa que se ejecutará una y otra vez
        hasta que se detenga.

        Para detener la animación, se puede usar la función cancelAnimationFrame(ID) pasando como argumento el ID que
        retorna requestAnimationFrame() y que podemos almacenar en una variable al momento de llamar a requestAnimationFrame()
        por primera vez.
    */

    idDelRequestAnimationFrame = requestAnimationFrame(actualizarPantalla);

    // Apagamos el botón de inicio para evitar que se inicie la animación más de una vez y se descontrole la velocidad de la pelota.
    botonIniciar.disabled = true;
});



// Seleccionamos el boton que reinicia el juego
const botonReiniciar = document.getElementById('reiniciar');

// Añadimos un controlador de eventos al boton de reinicio
botonReiniciar.addEventListener('click', ()=>{
    // limpiamos el canvas
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // reiniciamos los puntos de los jugadores
    jugador1.puntos = 0;
    jugador2.puntos = 0;

    // Actualizamos los puntos en el HTML
    document.getElementById('puntosJ1').innerText = jugador1.puntos;
    document.getElementById('puntosJ2').innerText = jugador2.puntos;


    // reiniciamos la posición de los jugadores
    jugador1.y = canvas.height/2 - 50;
    jugador2.y = canvas.height/2 - 50;

    // reiniciamos la posición de la pelota
    pelota.x = canvas.width/2;

    // reproducimos la musica de fondo
    sonidoBase.play();

    // deshabilitamos el boton de reinicio
    botonReiniciar.disabled = true;

    // Ejecutamos el requestAnimationFrame
    idDelRequestAnimationFrame = requestAnimationFrame(actualizarPantalla);
});





/* Extra:  
    - Elaborar selector de niveles (DOM y Logica)  
    - Elaborar las opciones de personalizacion de nombre de los jugadores
    - Elaborar la opcion de personalizacion de colores de los jugadores
    - Elaborar la opcion de personalizacion de colores de la pelota
    - Elaborar la opcion de personalizacion de la cancha
    - Elaborar la opcion de seleccion de total de puntos
    - Elaborar la opcion de seleccion de tiempo de juego
    - Elaborar la opcion de seleccion de velocidad de la pelota
    - Elaborar la opcion de seleccion de nivel de dificultad incremental
    - Cualquier otra cosa que se te ocurra para mejorar el juego es bienvenida.
*/