export function mensajeVictoria(canvas, context, ganador){
    
    // Establecemos el color de relleno
    context.fillStyle = '#005A84';

    // Establecemos la fuente y tamaño del texto
    context.font = 'bolder 40px Consolas';

    // Dibujamos el mensaje de victoria que se mostrara cuando un jugador alcanze los 5 puntos
    //                   mensaje,                  pos. x, pos. y
    context.fillText(`Ganador ${ganador}`, canvas.width/3 - 18, 150);
};


export function tiempoDeJuego(canvas, context, tiempo){
    // Establecemos el color de relleno
    context.fillStyle = '#005A84';

    // Establecemos la fuente y tamaño del texto
    context.font = 'bolder 40px Consolas';

    // Dibujamos el mensaje de victoria que se mostrara cuando un jugador alcanze los 5 puntos
    //                   mensaje,                  pos. x, pos. y
    context.fillText(`Tiempo: ${tiempo}`, canvas.width/3 - 18, 150);
};