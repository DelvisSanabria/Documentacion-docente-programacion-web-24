/*
    ¿Que es el hook useRef?
    El hook useRef se utiliza para crear una referencia mutable que persiste 
    durante todo el ciclo de vida de un componente. 
    
    Es útil para acceder y manipular elementos del DOM directamente, así como para almacenar 
    valores persistentes SIN PROVOCAR RE-REDNDERIZADOS del componente.


    ¿En que situaciones se podria utilizar?
    - Para referenciar elementos del DOM y manipularlos directamente.
    - Para acceder a un elemento del DOM directamente.
    - Para almacenar valores persistentes que no provocan re-renderizados del componente.
    - Para almacenar valores que persisten entre re-renderizados del componente.
    - Para acumular valores a lo largo del tiempo.
*/


import {useRef, useState} from "react";

const UseRef = () => {

    /* 
        En este ejemplo almacenaremos el valor de un contador en una variable de referencia hasta que sea 10,
        luego de eso transferimos el valor de la variable de referencia a una variable de estado y provocamos
        un re-renderizado del componente indicando que el contador llego a 10.
    */

    // Variable de referencia: Se utiliza para acceder a un elemento del DOM que no provoca un renderizado del componente.
    const contadorRef = useRef(0);
    
    // Variable de estado: Se utiliza para mantener el estado del component, es decir, para almacenar el valor de una variable que
    // puede cambiar a lo largo del tiempo y provocar un renderizado del componente.
    const [contador, setContador] = useState(0);


    const incrementar = () => {
        contadorRef.current += 1;
        console.log(`Contador: ${contadorRef.current}`);

        if (contadorRef.current === 10) {
            setContador(contadorRef.current);
        }
    };

    return (
        <div className="Contador">
            <button onClick={incrementar}>Incrementar</button>
            <p>{contador === 10 ? `El contador ha alcanzado el limite de 10 - ${contador}` : null}</p>
        </div>
    );
}

export default UseRef;