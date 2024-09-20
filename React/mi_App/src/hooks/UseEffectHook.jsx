import {useState, useEffect} from 'react';

const UseEffectHook = () => {

    /*
        useEffect(() => {useEffect(): permite a agregar efectos secundarios a los componentes funcionales.
        Es comunmente usado para procesos en segundo plano. 
        Un ejemplo de esto podría ser cualquier cosa que cambie el estado o afecte a la interfaz como un Reloj.

        useEffect toma dos argumentos/parametros, el primero es una función(callback) que se ejecuta cuando el componente se inicia 
        y el segundo es una lista de dependencias OPCIONALES que especifican qué variables deben cambiar para 
        que la función se ejecute, debido a esto se suele utilizar junto a useState().

        Otro uso comun de este hook es llamados a APIs, eventos de scroll, eventos de teclado, etc, es decir, procesos asincronos.

        Dependencias: Las dependencias son un arreglo de valores que se utilizan para determinar cuándo se debe 
        volver a ejecutar la función de efecto secundario. Si alguna de las dependencias cambia, la función de 
        efecto secundario se ejecutará nuevamente.
    */

    const fondos = ["bg-black","bg-white"];
    const colores = ["text-white","text-black"];

    // Creamos un hook que almacena el estado de un color
    const [color, setColor] = useState(0);


    // Creamos un efecto secundario que mostrara un mensaje indicando el color actual en el parrafo con el id 'parrafo'
    useEffect(()=>{
        document.getElementById('parrafo').innerText = `El color actual es: ${fondos[color]}`;
    },[color]);

    return ( 
        <>
            <button className='bg-blue-600 rounded-2xl p-4' onClick={()=>{ color === 0 ? setColor(1) : setColor(0) }}>Cambiar Color</button>
            <p id='parrafo' className={fondos[color] +" "+colores[color]}>Esto es un texto de prueba</p>
        </>
    );
}

export default UseEffectHook;