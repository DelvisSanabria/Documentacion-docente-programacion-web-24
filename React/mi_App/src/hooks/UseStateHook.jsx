import { useState } from "react";

const UseStateHook = () => {

    /*
        useState(): Es un Hook que permite a agregar estado local a los componentes funcionales. 
        Esto significa que se puede definir un estado inicial en un 
        componente y actualizarlo en función de ciertas acciones o eventos. 
        
        El Hook useState toma un valor inicial y devuelve una matriz o array con dos elementos,
        el primer elemento es el valor del estado y el segundo es una función para actualizar el estado.
    */

    // Creamos nuestro hook de estado
    //    variable, modificador   = useState(valor inicial)
    const [contador, setContador] = useState(0);


    return (
        <>
            <button onClick={ ()=> setContador(contador + 1) }>Incrementar</button>
            <p>El contador es: {contador}</p>
        </>
    );
}

export default UseStateHook;