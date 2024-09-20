// Importamos los componentes con los cuales construiremos la vista
// Importamos el boton y el titulo


import Titulo from "../components/Titulo";
import UseStateHook from "../hooks/UseStateHook";
import UseEffectHook from "../hooks/UseEffectHook";


const Home = () => {
    // Como se utilizan los componentes importados
    // NOTA: Es importante recalcar que los componentes solo pueden retornar un solo elemento HTML.
    // para ello podemos utilizar un contenedor (div, section, aside, nav, main, etc) para contener los elementos que deseamos retornar.
    // O en su defecto si no queremos retornar los elementos en un contenedor podemos utilizar un fragment <></> para contener los elementos.
    return ( 
        <>
            <Titulo contenido="Titulo 1" estilos="bg-red-500"/>
            <Titulo contenido="Otro titulo" estilos="bg-blue-300"/>
            <Titulo estilos="text-3xl"/>
            <Titulo estilos="bg-pink-500"/>
            <Titulo contenido="react es genial!"/>
            <UseStateHook/>
            <UseEffectHook/>
        </>
    );
}

export default Home;