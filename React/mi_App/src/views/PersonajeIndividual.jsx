// importamos axios para poder hacer peticiones HTTP
import axios from 'axios';

// Usamos useParams, este es un hook que nos permite obtener los parametros de la URL.
// en este caso lo usaremos para obtener el id del personaje que se esta solicitando.
import { useParams } from 'react-router-dom';

// Importamos los hooks useState y useEffect para poder trabajar con estados y efectos secundarios.
import {useState, useEffect} from 'react';

// Importamos el componente Tarjeta
import Tarjeta from '../components/Tarjeta';

const PersonajeIndivivual = () => {

    //  Extraemos el id del personaje de la URL que posteriormente usaremos para hacer la peticion a la API
    // y obtener los datos del personaje solicitado.
    const {idPersonaje} = useParams();

    // Creamos la variable de estado que almacenara los datos del personaje solicitado.
    const [personaje, setPersonaje] = useState({});

    // Creamos un efecto secundario que se ejecutara cuando el componente se termine de montar,
    // es decir, cuando se renderice por primera vez. Este efecto realizara una peticion a la API
    // y almacenara los datos del personaje solicitado en la variable de estado 'personaje', y posteriormente
    // lo renderizara en el DOM.
    useEffect(()=>{
        // Realizamos la peticion a la API
        axios.get(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
        .then((res)=>{
            // Almacenamos los datos en la variable de estado 'personaje'
            setPersonaje(res.data);
        })
        .catch((error)=>{
            console.error(error);
        });
    },[]);

    return (
        <section className='w-full h-[92vh] bg-gradient-to-br from-slate-950 to-slate-500 flex justify-center items-center pb-10'>
            <Tarjeta
                id={personaje.id}
                individual={true}
                endpoint={'rym'}
                nombre={personaje.name}
                imagen={personaje.image}
                genero={personaje.gender}
                especie={personaje.species}
                estatus={personaje.status}
                origen={personaje.origin ? personaje.origin.name : null}
                tipoH2={1}
                tipoParrafo={2}
                tipoIMG={3}
                tipoContenedor={1}
            />
        </section>
    );
}

export default PersonajeIndivivual;