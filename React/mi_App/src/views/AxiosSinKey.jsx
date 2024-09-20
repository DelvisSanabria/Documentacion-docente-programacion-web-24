/*
    ¿Que es Axios?
    Axios es una librería de JavaScript que se utiliza para hacer peticiones HTTP, es decir,
    para obtener datos de una API o enviar datos a un servidor. Es muy similar a la función fetch() de JavaScript,
    pero Axios es más fácil de usar y tiene más funcionalidades.

    Para utilizarlo con react, primero debemos instalarlo con npm o yarn: npm install axios / yarn add axios (si no tenemos npm)
    Luego, importamos Axios en el archivo donde lo vamos a utilizar: import axios from 'axios'
*/

// Importamos axios para poder hacer peticiones HTTP
import axios from 'axios';

// Importamos los hooks que utilizaremos en este componente
import {useState, useEffect} from 'react';

// Importamos el componente Tarjeta
import Tarjeta from '../components/Tarjeta';

// Importamos el loader
import loader from '../assets/images/loader.webp';


const AxiosSinKey = () => {

    // En este ejemplo consumiremos una API publica para practicar el uso de Axios, useState y useEffect.

    // Primero creamos la variable de estado que almacenara los datos de la API
    const [personajes, setPersonajes] = useState([]);


    // Luego creamos un efecto secundario que se ejecutara cuando el componente se termine de montar,
    // es decir, cuando se renderice por primera vez. Este efecto realizara una peticion a la API
    // y almacenara los datos en la variable de estado 'personajes', y posteriormente los renderizara 
    // en el DOM.

    useEffect(()=>{
        // Realizamos la peticion a la API
        axios.get('https://rickandmortyapi.com/api/character')
        .then((res)=>{
            // Almacenamos los datos en la variable de estado 'personajes'
            setPersonajes(res.data.results);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    


    return ( 
        <section className='bg-gradient-to-br from-slate-950 to-slate-500 grid grid-cols-4 w-full min-h-[100vh] px-6 py-8 place-items-center'>
            { personajes.length === 0
                ? <div className='bg-transparent absolute left-[45%] top-[45%]'>
                    <img src={loader} alt='Cargando...' className='w-32'/>
                </div>
                : personajes.map((personaje)=>{
                    return(
                        <Tarjeta 
                            id={personaje.id}
                            individual={false}
                            endpoint={'rym'}
                            nombre={personaje.name}
                            imagen={personaje.image}
                            tipoH2={2}
                            tipoIMG={3}
                            tipoContenedor={3}
                        />
                    );
                }
            )}
        </section>
    );
}

export default AxiosSinKey;