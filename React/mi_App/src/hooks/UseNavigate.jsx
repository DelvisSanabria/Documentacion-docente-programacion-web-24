/* 
    ¿Que es el hook useNavigate?
    El hook useNavigate es parte de la librería react-router-dom y se utiliza para programar la navegación en una aplicación React. 
    Permite redirigir al usuario a una ruta específica dentro de la aplicación.

    Uso principal:
    - Redirigir a una nueva ruta programáticamente.
    - Pasar estado adicional a través de la navegación.
    - Modificar la historia de navegación (por ejemplo, reemplazar en lugar de empujar una nueva entrada en el historial).
*/

import { useNavigate } from 'react-router-dom';

const UseNavigate = () => {

    // Usamos el hook useNavigate para redirigir al usuario a una serie de posibles rutas.
    const navigate = useNavigate();

    // Creamos un objeto que contendra los estilos de los botones.
    const estilos = {
        botonHome: "bg-blue-500 text-white font-semibold px-4 py-2 rounded-full",
        botonApi: "bg-green-500 text-white font-semibold px-4 py-2 rounded-full",
        botonRick: "bg-red-500 text-white font-semibold px-4 py-2 rounded-full",
        botonMorthy: "bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full",
        botonPerfil: "bg-purple-500 text-white font-semibold px-4 py-2 rounded-full",
    };


    // Creamos un objeto que contendra las rutas a las que se puede redirigir el usuario.
    const rutas ={
        inicio: "/",
        api: "/rick_and_morthy",
        rick: "/rick_and_morthy/1",
        morthy: "/rick_and_morthy/2",
        perfil: "/cuenta/usuario/perfil",
    };


    const home = ()=> navigate(rutas.inicio);
    const api = ()=> navigate(rutas.api);
    const rick = ()=> navigate(rutas.rick);
    const morthy = ()=> navigate(rutas.morthy);
    const perfil = ()=> navigate(rutas.perfil);


    // Ya que useNavigate no es una función de redirección, debemos usar window.location.href para redirigir al usuario a una URL con un dominio diferente.
    const instagram = ()=> window.location.href = "https://instagram.com/lexpinonline/";

    return (
        <main className='bg-slate-800 w-full h-[100vh] flex justify-center items-center'>
            <div className='w-[50%] h-[35%] bg-slate-950 rounded-3xl shadow-2xl drop-shadow-lg flex justify-center items-center px-6 gap-8'>
                <button 
                    className={estilos.botonHome}
                    onClick={home}
                >
                    Ir a: Inicio
                </button>
                
                <button 
                    className={estilos.botonApi}
                    onClick={api}
                >
                    Ir a: Api
                </button>
                
                <button 
                    className={estilos.botonRick}
                    onClick={rick}
                >
                    Ir a: Rick
                </button>
                
                <button 
                    className={estilos.botonMorthy}
                    onClick={morthy}
                >
                    Ir a: Morthy
                </button>

                <button 
                    className={estilos.botonPerfil}
                    onClick={perfil}
                >
                    Ir a: Perfil
                </button>

                <button 
                    className={estilos.botonHome}
                    onClick={instagram}
                >
                    Ir a: Instagram
                </button>
            </div>
        </main>
    );
}

export default UseNavigate;