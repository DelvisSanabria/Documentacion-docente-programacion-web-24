/*
    Se importa NavLink desde react-router-dom para poder trabajar las rutas y aprovechar la propiedad 
    isActive y poder mutar el documento cuando la ruta indicada este activa.
*/
import { NavLink } from 'react-router-dom';

// Importamos el logo que ira en el navbar
import logo from '../assets/images/Lexpin-Logo.jpg'

const NavBar = () => {

    const estilos = {
        navBar: "flex justify-between items-center w-full bg-slate-600 text-white px-8 py-3",
        contenedor: "flex justify-between w-auto gap-4",
        imagen: "w-[150px] rounded-[25px]",
        input: "bg-slate-200 font-semibold px-4 py-2 rounded-full w-[450px] pl-4 text-black placeholder:text-gray-400",
    };

    const cambiarEstilos = ({isActive})=> ({
        color: (isActive) ? "rgba(106, 255, 191, 1)" : "rgba(176, 222, 235, 1)",
        backgroundColor: (isActive) ? "rgba(10, 42, 99, 0.8)" : "rgba(25, 62, 99, 0.3)",
        paddingInline: "7px",
        paddingBlock: "3px",
        borderRadius: "10px",
    });


    return ( 
        <nav className={estilos.navBar}>
            <img className={estilos.imagen} src={logo} alt="Logo de Lexpin" />
            <input className={estilos.input} type="text" />
            <div className={estilos.contenedor}>
                <NavLink style={cambiarEstilos} to="/">Home</NavLink>
                <NavLink style={cambiarEstilos} to="/rick_and_morthy">Api SK</NavLink>
                <NavLink style={cambiarEstilos} to="/juegos">Api CK</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;