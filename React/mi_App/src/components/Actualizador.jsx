// Importamos useContext desde react.
import { useContext } from 'react';

// Importamos el contexto que deseamos utilizar.
import { MiContexto } from '../components/Provider'

const Actualizador = () => {
    
    // Desestructuramos el contexto para obtener el mensaje y la función para modificarlo.
    const {setMensaje} = useContext(MiContexto);

    return ( 
        <button onClick={()=>{setMensaje("Hola desde el actualizador")}}>Actualizar mensaje</button>
    );
}

export default Actualizador;