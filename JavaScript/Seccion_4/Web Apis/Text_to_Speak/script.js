/*
    ¿Que son las Web APIs?
        - Son un conjunto de funcionalidades que los navegadores nos ofrecen para poder interactuar con ellos y el sistema operativo.

        
    ¿Como funciona la API de texto a voz?
        - SpeechSynthesis: es una interfaz global que se utiliza para controlar y manipular la funcionalidad 
        de síntesis de voz en el navegador web. Es parte de la API de Web Speech y permite que las aplicaciones 
        web conviertan texto en voz hablada.
        
        Permite que la aplicación hable a través del sistema de audio del dispositivo.
        - SpeechSynthesisUtterance: es un objeto que representa un mensaje que se va a leer en voz alta.
        - SpeechSynthesisVoice: es un objeto que representa una voz que se puede usar para la síntesis de voz.
        
    Métodos y propiedades clave de `speechSynthesis`:
        1) `speechSynthesis.speak()`: Este método inicia la síntesis de voz del texto especificado. Acepta un objeto `SpeechSynthesisUtterance` que contiene el texto que se va a hablar.
        2) `speechSynthesis.cancel()`: Este método cancela la síntesis de voz actual, si la hay.
        3) `speechSynthesis.pause()`: Este método pausa la síntesis de voz actual.
        4) `speechSynthesis.resume()`: Este método reanuda la síntesis de voz pausada.
        5) `speechSynthesis.getVoices()`: Este método devuelve una lista de objetos `SpeechSynthesisVoice` que representan las voces disponibles en el dispositivo.
        6) `speechSynthesis.onvoiceschanged`: Este evento se dispara cuando la lista de voces disponibles cambia.
        7) `speechSynthesis.pending`: Esta propiedad de solo lectura indica si hay una tarea de síntesis de voz en la cola que aún no ha comenzado.
        8) `speechSynthesis.speaking`: Esta propiedad de solo lectura indica si actualmente se está hablando una tarea de síntesis de voz.
        9) `speechSynthesis.paused`: Esta propiedad de solo lectura indica si la síntesis de voz está pausada.

        Ten en cuenta que la disponibilidad de voces y la calidad de la síntesis de voz pueden variar dependiendo del dispositivo y del navegador.


        Mas voces disponibles en: https://cloud.google.com/text-to-speech/docs/voices?hl=es-419
*/


// Seleccionamos los botones de iniciar lectura, pausar, reanudar y cancelar
const botonHablar = document.getElementById('iniciar');
const botonPausar = document.getElementById('pausar');
const botonReanudar = document.getElementById('reanudar');
const botonCancelar = document.getElementById('cancelar');


// Agregamos un evento click al boton
botonHablar.addEventListener('click', () => {
    // Seleccinamos el texto que se va a leer y capturamos su valor
    const texto_a_leer = document.getElementById('mensaje').value;

    // Utilizamos la API de speechSynthesis para poder leer el texto
    if(texto_a_leer){
        // Creamos una instancia de SpeechSynthesisUtterance para que el modelo de voz pueda leer el texto.
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto_a_leer));
    }else{
        speechSynthesis.speak(new SpeechSynthesisUtterance('ERROR: se ha iniciado la secuencia de autodestrucción del sistema. Por favor, diríjase a un lugar seguro.'));
    }
});

botonPausar.addEventListener('click', () => {
    // Pausamos la lectura del texto
    speechSynthesis.pause();
});

botonReanudar.addEventListener('click', () => {
    // Reanudamos la lectura del texto
    speechSynthesis.resume();
});

botonCancelar.addEventListener('click', () => {
    // Cancelamos la lectura del texto
    speechSynthesis.cancel();
});