export function dibujarCancha(canv, context, color){
    // Dibujamos el fondo de la cancha
    context.fillStyle = color || "skyblue";
    context.fillRect(0, 0, canv.width, canv.height);

    // Dibujamos el borde de la cancha
    context.strokeStyle = 'white';
    context.lineWidth = 8;

    // Linea y circulo central de la cancha

    // Comenzamos el trazo
    context.beginPath();

        // Circulo central
        //         pos x , pos y , radio, angulo inicial, angulo final
        context.arc(canv.width/2, canv.height/2, 70, 0, 6.28);

        // Dibujamos la linea central
        context.moveTo(canv.width/2, 0);
        context.lineTo(canv.width/2, canv.height);
        context.stroke();

    // Finalizamos el trazo
    context.closePath();
}