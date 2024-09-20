/*
    ¿Qué es useContext?
    useContext es un hook que nos permite acceder al contexto de un componente padre desde un componente hijo.

    ¿Qué es el contexto?
    El contexto es una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente 
    a través de cada nivel.
*/


// Importamos el provider que contiene el contexto que deseamos utilizar.
import Provider from '../components/Provider'
import Salida from '../components/Salida';
import Actualizador from '../components/Actualizador';


const UseContext = () => {
    return (
        <Provider>
            <h1>usando useContext</h1>
            <Salida/>
            <Actualizador/>
        </Provider>
    );
}

export default UseContext;



/* Explicación del Código

    Creación del Contexto:
        - MiContexto es el contexto creado utilizando createContext.
        
        - Provider es un componente que envuelve a otros componentes 
        y proporciona el valor del contexto. 

        - Utiliza useState para manejar el estado compartido.

    
    Proveer el Contexto:
        - MiContexto.Provider se utiliza dentro de Provider para envolver a 
        los componentes hijos y proporcionar el valor del contexto (mensaje y setMensaje).

    Consumo del Contexto:
        - En Salida, useContext(MiContexto) se utiliza para acceder al valor del 
        contexto y mostrarlo.

        - En Actualizador, useContext(MiContexto) se utiliza para acceder a la función 
        setMensaje del contexto y actualizar el valor al hacer clic en el botón.

    Integración en la Aplicación:
        - Provider envuelve a los componentes Salida y Actualizador en App.js, 
        permitiéndoles acceder y manipular el valor del contexto.

    Resumen:
        Con estos pasos, has aprendido cómo utilizar useContext para compartir 
        valores entre componentes sin tener que pasar props manualmente. 
        
        Este enfoque simplifica la gestión del estado y la comunicación entre componentes 
        en una aplicación.
*/