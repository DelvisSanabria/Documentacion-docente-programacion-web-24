// Para manejar el DOM y eventos en TypeScript tenemos que tener en cuenta ciertas cosas:

/*
    HTMLElement: es la clase base para todos los elementos HTML en el DOM, esto incluye elementos 
    como div, p, span, input, button, entre otros.


    Ademas podemos especificar Subclases:
        HTMLAnchorElement: representa un elemento a (enlace).
        HTMLButtonElement: representa un elemento button.
        HTMLDivElement: representa un elemento div.
        HTMLFormElement: representa un elemento form.
        HTMLHeadingElement: representa un elemento h1, h2, h3, h4, h5 o h6.
        HTMLAudioElement: representa un elemento audio.
        HTMLImageElement: representa un elemento img.
        HTMLInputElement: representa un elemento input.
        HTMLLabelElement: representa un elemento label.
        HTMLSelectElement: representa un elemento select.
        HTMLSectionElement: representa un elemento section.
        HTMLAsideElement: representa un elemento aside.
        HTMLNavElement: representa un elemento nav.
        HTMLLIElement: representa un elemento li.
        HTMLLinkElement: representa un elemento link.
        HTMLMapElement: representa un elemento map.
        HTMLMediaElement: representa un elemento audio o video.
        HTMLMenuElement: representa un elemento menu.
        HTMLMetaElement: representa un elemento meta.
        HTMLOListElement: representa un elemento ol (lista ordenada).
        HTMLParagraphElement: representa un elemento p.
        HTMLSelectElement: representa un elemento select.
        HTMLSpanElement: representa un elemento span.
        HTMLStyleElement: representa un elemento style.
        HTMLTextAreaElement: representa un elemento textarea.
        HTMLUListElement: representa un elemento ul (lista no ordenada).
        HTMLVideoElement: representa un elemento video.
*/

// Selectores en TypeScript
let boton = document.getElementById("saludar") as HTMLButtonElement;


boton.addEventListener("click", () => {
    alert("Hola mundo");
});