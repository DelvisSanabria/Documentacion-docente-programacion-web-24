import axios from "axios";
import { useEffect, useState } from "react";
import Tarjeta from "../components/Tarjeta";
// Importamos el loader
import loader from '../assets/images/loader.webp';

const AxiosConKey = () => {

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'X-RapidAPI-Key': '5a5757b67bmsh8cb49bf59495e2dp1c2798jsnd57dce8b31ae',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


    // Creamos la variable de estado que almacenara el array de juegos recibido de la API.
    const [juegos, setJuegos] = useState([]);

    // Creamos el useEffect que se ejecutara al terminar de cargar el componente, y que se encargara de hacer la peticion a la API.
    useEffect(() => {
        axios.request(options)
        .then(function (res) {
            // Almacenamos en la variable juegos el array de juegos recibido de la API.
            setJuegos(res.data);
        }).catch(function (err) {
            console.error(err);
        });
    }, []);

    console.table(juegos);

    // const estilos = {
    // };


    return (
        <section className='bg-gradient-to-br from-slate-950 to-slate-500 grid grid-cols-4 w-full min-h-[100vh] px-6 py-8 place-items-center'>
            { juegos.length === 0
                ? <div className='bg-transparent absolute left-[45%] top-[45%]'>
                    <img src={loader} alt='Cargando...' className='w-32'/>
                </div>
                : juegos.map((juego)=>{
                    return(
                        <Tarjeta
                            id={juego.id}
                            individual={false}
                            endpoint={'juegos'}
                            nombre={juego.title}
                            imagen={juego.thumbnail}
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

export default AxiosConKey;