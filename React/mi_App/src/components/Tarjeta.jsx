import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import cerrar from '../assets/images/eliminar.png';

const Tarjeta = (
    {id, nombre, imagen, genero, especie, estatus, endpoint, individual,
    origen, plataforma, descripcion, desarrollador, 
    editor, req, lanzamiento, capturas, tipoH2, tipoParrafo, tipoContenedor, tipoIMG}) => {

    // Instanciamos el hook useNavigate para poder redirigir al usuario a una ruta especifica.
    const navigate = useNavigate();

    // Creamos una variable de estado para almacenar el estado de la ventana emergente y la imagen que se mostrara en ella.
    const [popUp, setPopUp] = useState(false);
    const [imgEmergente, setImgEmergente] = useState({});

    const estilos = {
        contenedor1: 'w-[350px] flex flex-col items-center bg-gray-300 p-4 m-4 rounded-2xl',
        contenedor2: 'w-[50%] flex flex-col items-center bg-gray-300 p-4 m-4 rounded-2xl drop-shadow-lg shadow-xl',
        contenedor3: "w-[65%] flex flex-col items-center bg-gray-300/50 p-4 m-4 rounded-2xl shadow-lg drop-shadow-lg",
        contenedorRedirecciones: 'w-full flex justify-center items-center gap-4',
        contenedorMiniaturas: 'w-auto flex justify-center items-center gap-4',
        popUp: 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 flex justify-center items-center rounded-2xl',
        popUpImagen: 'w-[120%] rounded-2xl',
        popUpCerrar: "w-8 absolute top-[2%] right-[2%] cursor-pointer",
        titulo1: 'text-2xl font-bold text-center mb-3',
        titulo2: 'text-lg font-bold text-center mb-3',
        parrafo1: 'text-center font-[Arvo]',
        parrafo2: 'text-center text-lg font-bold',
        requisitos: "w-full px-4 py-2 text-center",
        lista: "font-bold",
        imagen1: 'w-64 rounded-2xl mb-3',
        imagen2: 'w-[320px] mb-4 rounded-full',
        imagen3: 'w-[500px] mb-4 rounded-2xl shadow-lg drop-shadow-lg',
        miniaturas: 'w-[200px] rounded-xl shadow-lg drop-shadow-lg',
        navigate: 'text-center bg-sky-500 rounded-full px-3 py-2 text-white font-bold text-[0.8rem]',
        ancla: 'text-center bg-green-500 rounded-full px-3 py-2 text-white font-bold text-[0.8rem]',
        anclaImagen: "cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
        // mas estilos aqui...
    };


    const endpoints = {
        rym: 'rick_and_morthy',
        juegos: 'juegos',
        // mas apis o endpoints aqui...
    };


    return (
        <div key={id} id={id} className={tipoContenedor === 1 ? estilos.contenedor1 : tipoContenedor === 2 ? estilos.contenedor2 : estilos.contenedor3}>
            <h2 className={tipoH2 === 1 ? estilos.titulo1 : estilos.titulo2}>{nombre}</h2>
            <img src={imagen} alt={nombre} className={tipoIMG === 1 ? estilos.imagen1 : tipoIMG === 2 ? estilos.imagen2 : estilos.imagen3}/>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2}>{especie ? `Especie: ${especie}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{genero ? `Genero: ${genero}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{origen ? `Origen: ${origen}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{estatus ? `Estatus: ${estatus}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{nombre && individual ? `Titulo: ${nombre}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{plataforma ? `Plataforma: ${plataforma}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{desarrollador ? `Desarrollador: ${desarrollador}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{editor ? `Editor: ${editor}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{lanzamiento ? `Lanzamiento: ${lanzamiento}` : null}</p>
            <p className={tipoParrafo === 1 ? estilos.parrafo1 : estilos.parrafo2 }>{descripcion ? `Descripcion: ${descripcion}` : null}</p>
            <ul className={individual ? estilos.requisitos : "hidden"}>
                <li className={estilos.lista}>{`OS: ${req != null && req.os != null ? req.os : "S/I"}`}</li>
                <li className={estilos.lista}>{`Procesador: ${req != null && req.processor != null ? req.processor : "S/I"}`}</li>
                <li className={estilos.lista}>{`RAM: ${req != null && req.memory != null ? req.memory : "S/I"}`}</li>
                <li className={estilos.lista}>{`GPU: ${req != null && req.graphics != null ? req.graphics : "S/I"}`}</li>
                <li className={estilos.lista}>{`Almacenamiento: ${req != null && req.storage != null ? req.storage : "S/I"}`}</li>
            </ul>


            {/* Contenedor de los botones que solo se debe ver en la vista de cruadicula */}
            <div className={individual ? "hidden" : estilos.contenedorRedirecciones}>
                <button 
                    onClick={()=>navigate(`/${endpoint === "rym" ? endpoints.rym : endpoints.juegos}/${id}`)}
                    className={estilos.navigate}>Ver más - useNavigate
                </button>
                
                <a 
                    href={`http://localhost:5173/${endpoint === "rym" ? endpoints.rym : endpoints.juegos}/${id}`} // Esto lo vamos a optimizar usando useLocation
                    className={estilos.ancla}>Ver más - Ancla
                </a>
            </div>

            {/* Contenedor de miniaturas que solo se debe ver en la vista individual */}
            <div className={individual ? estilos.contenedorMiniaturas : "hidden"}>
                {capturas ? capturas.map((captura)=>{
                    return(
                        <button key={`${captura.id}`} onClick={()=>{setPopUp(true); setImgEmergente(captura);}} className={estilos.anclaImagen}>
                            <img src={captura.image} className={estilos.miniaturas} alt={`${nombre}`} />
                        </button>
                    );
                }) : null}
            </div>

            {/* Ventana emergente */}
            <div className={popUp ? estilos.popUp : "hidden"}>
                <img className={estilos.popUpCerrar} src={cerrar} onClick={()=>setPopUp(false)} alt="cerrar"/>
                <img className={estilos.popUpImagen} src={imgEmergente.image} alt={nombre}/>
            </div>
        </div>
    );
}

export default Tarjeta;