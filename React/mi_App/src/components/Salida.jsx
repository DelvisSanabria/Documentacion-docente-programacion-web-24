// Importamos useContext desde react.
import { useContext } from 'react';

// Importamos el contexto que deseamos utilizar.
import { MiContexto } from '../components/Provider'

const Salida = () => {

    // Desestructuramos el contexto para obtener el mensaje y la función para modificarlo.
    const {mensaje} = useContext(MiContexto);
    // console.log(mensaje);
    
    return (
        <>
            <p>El valor de la variable mensaje en el contexto es: {mensaje}</p>
        </>
    );
}

export default Salida;