//  Importamos axios para poder hacer peticiones HTTP
import axios from 'axios';

// Usamos useParams, este es un hook que nos permite obtener los parametros de la URL.
// en este caso lo usaremos para obtener el id del juego que se esta solicitando.
import { useParams } from 'react-router-dom';

// Importamos los hooks useState y useEffect para poder trabajar con estados y efectos secundarios.
import {useState, useEffect} from 'react';

// Importamos el componente TarjetaPersonaje
import Tarjeta from '../components/Tarjeta';

// Importamos el loader
import loader from '../assets/images/loader.webp';

const JuegoIndividual = () => {


    //  Extraemos el id del juego de la URL que posteriormente usaremos para hacer la peticion a la API
    // y obtener los datos del juego solicitado.
    const {idJuego} = useParams();


    // Creamos la variable de estado que almacenara los datos del juego solicitado.
    const [juego, setJuego] = useState({});


    const configuraciones = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: idJuego},
        headers: {
            'x-rapidapi-key': '5a5757b67bmsh8cb49bf59495e2dp1c2798jsnd57dce8b31ae',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    

    // Creamos un efecto secundario que se ejecutara cuando el componente se termine de montar,
    // es decir, cuando se renderice por primera vez. Este efecto realizara una peticion a la API
    useEffect(()=>{
        // Realizamos la peticion a la API
        axios.request(configuraciones)
        .then((res)=>{
            // Almacenamos los datos en la variable de estado 'juego'
            setJuego(res.data);
            console.table(res.data);
        })
        .catch((error)=>{
            console.error(error);
        });
    },[]);

    return (
        <section className='w-full h-[92vh] bg-gradient-to-br from-slate-950 to-slate-500 flex justify-center items-center pb-10'>
            { juego.title === undefined
            ? <div className='bg-transparent absolute left-[45%] top-[45%]'>
                <img src={loader} alt='Cargando...' className='w-32'/>
            </div>
            :
                <Tarjeta 
                id={juego.id}
                individual={true}
                nombre={juego.title}
                imagen={juego.thumbnail}
                genero={juego.genre}
                plataforma={juego.platform}
                desarrollador={juego.developer}
                editor={juego.publisher}
                lanzamiento={juego.release_date}
                descripcion={juego.short_description}
                capturas={juego.screenshots}
                req={juego.minimum_system_requirements}
                tipoH2={1}
                tipoParrafo={2}
                tipoIMG={3}
                tipoContenedor={2}
            />}
        </section>
    );
}

export default JuegoIndividual;