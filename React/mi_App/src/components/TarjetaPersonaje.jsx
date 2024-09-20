import {useNavigate} from 'react-router-dom';

const TarjetaPersonaje = ({id, nombre, imagen, genero, especie, estatus, origen, verMas, tipo}) => {

    // Instanciamos el hook useNavigate para poder redirigir al usuario a una ruta especifica.
    const navigate = useNavigate();

    const estilos = {
        contenedor: 'w-[350px] flex flex-col items-center bg-gray-300 p-4 m-4 rounded-2xl',
        contenedor2: 'w-[50%] flex flex-col items-center bg-gray-300 p-4 m-4 rounded-2xl drop-shadow-lg shadow-xl',
        contenedorRedirecciones: 'w-full flex justify-center items-center gap-4',
        titulo: 'text-2xl font-bold text-center mb-3',
        imagen: 'w-64 rounded-2xl mb-3',
        imagen2: 'w-[320px] mb-4 rounded-full',
        parrafo: 'text-center',
        parrafo2: 'text-center text-lg font-bold',
        navigate: 'text-center bg-sky-500 rounded-full px-3 py-2 text-white font-bold text-[0.8rem]',
        ancla: 'text-center bg-green-500 rounded-full px-3 py-2 text-white font-bold text-[0.8rem]'
    };

    return (
        <div  key={id} id={id} className={tipo === 1 ? estilos.contenedor : estilos.contenedor2}>
            <h2 className={estilos.titulo}>{nombre}</h2>
            <img src={imagen} alt={nombre} className={tipo === 1 ? estilos.imagen : estilos.imagen2}/>
            <p className={tipo === 1 ? estilos.parrafo : estilos.parrafo2}>{especie ? `Especie: ${especie}` : null}</p>
            <p className={tipo === 1 ? estilos.parrafo : estilos.parrafo2 }>{genero ? `Genero: ${genero}` : null}</p>
            <p className={tipo === 1 ? estilos.parrafo : estilos.parrafo2 }>{origen ? `Origen: ${origen}` : null}</p>
            <p className={tipo === 1 ? estilos.parrafo : estilos.parrafo2 }>{estatus ? `Estatus: ${estatus}` : null}</p>


            {/* 
                PENDIENTE 
                - Ejemplo de useLocation
                - Ejemplo de useRef

                PLUS:
                - Agregar un parametro que permita cambiar el texto del boton de redirección.
            */}


            <div className={estilos.contenedorRedirecciones}>
                <button className={verMas ? estilos.navigate : null} onClick={()=>navigate(`/rick_and_morthy/${id}`)}>
                    {verMas ? `Ver más - useNavigate` : null}
                </button>
                
                <a 
                    href={`http://localhost:5173/rick_and_morthy/${id}`} // Esto lo vamos a optimizar usando useLocation
                    className={verMas ? estilos.ancla : null}>{verMas ? `Ver más - Ancla` : null}
                </a>
            </div>

            {/* 
                Comparación entre redirigir con useNavigate y un ancla:
                
                - Cuando usar useNavigate:
                    1) SPA (Single Page Application): Si deseas mantener la experiencia de SPA y evitar recargas completas de la página.
                    2) Control del estado: Cuando necesitas preservar el estado de la aplicación entre navegaciones.
                    3) Historial de navegación controlado: Si necesitas controlar el historial del navegador (por ejemplo, para evitar que el usuario regrese a la página anterior).
                
                - Cuando usar un Ancla (<a>):
                    1) Redirección a dominios externos: Cuando necesitas redirigir a una URL externa.
                    2) Simplicidad: Para enlaces simples y estáticos donde una recarga de página no es un problema.
                    3) SEO: Los motores de búsqueda siguen enlaces <a>, lo que puede ser útil para el SEO.
            */}
        </div>
    );
}

export default TarjetaPersonaje;