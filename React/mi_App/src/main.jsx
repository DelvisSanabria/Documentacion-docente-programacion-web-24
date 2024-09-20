import ReactDOM from 'react-dom/client' // Importamos ReactDOM para renderizar la aplicación en el DOM


import {BrowserRouter, Routes, Route} from 'react-router-dom' 
// Importamos BrowserRouter para manejar las rutas de la aplicación.
// ¿Que es el BrowserRouter?: Es un componente que envuelve toda la aplicación y nos permite manejar las rutas de la misma
// de manera sencilla, es decir, nos permite cambiar de una vista a otra sin recargar la página.

// Tambien existe el HashRouter: Es un componente que envuelve toda la aplicación y nos permite manejar las rutas de la misma
// de manera sencilla, es decir, nos permite cambiar de una vista a otra sin recargar la página, la diferencia radica
// en que el HashRouter utiliza el hash de la URL para manejar las rutas de la aplicación. (Este enrutador no lo utilizaremos en esta aplicación)

// Importamos Routes y Route para definir las rutas de la aplicación.
// ¿Que es Routes?: Es un componente que nos permite definir las rutas de la aplicación.
// ¿Que es Route?: Es un componente que nos permite definir una ruta especifica de la aplicación.


// Importamos los Hooks de practica que quedemos visualizar
import UseNavigate from './hooks/UseNavigate'
import UseLocation from './hooks/UseLocation'
import UseRef from './hooks/UseRef'
import UseRef2 from './hooks/UseRef2'
import UseContext from './hooks/UseContext'


// Importamos las vistas que utilizaremos en la aplicación
import Home from './views/Home'
import AxiosSinKey from './views/AxiosSinKey'
import PersonajeIndivivual from './views/PersonajeIndividual'
import AxiosConKey from './views/AxiosConKey'
import JuegoIndivivual from './views/JuegoIndividual'
import NotFound from './views/NotFound'

// Importamos los componentes que utilizaremos en la aplicación (En este caso son: NavBar y Footer)
import NavBar from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      {/* Aqui colocaremos el NavBar */}
        <NavBar/>
        
        {/* Aqui colocaremos las rutas de la aplicación */}
        <Routes>
            {/* Aqui definimos cada una de las rutas de la aplicación */}
            {/*    endpoint  / vista a renderizar */}
            <Route path='/' element={<Home/>}/>
            <Route path='/usenavigate' element={<UseNavigate/>}/>
            <Route path='/rick_and_morthy' element={<AxiosSinKey/>}/>
            {/* 
              En esta ruta usamos parametros para indicar el id del personaje que deseamos renderezar.
              El parametro usado es :idPersonaje, y lo obtenemos en la vista PersonajeIndividual.jsx
              mediante el hook useParams.
            */}
            <Route path='/rick_and_morthy/:idPersonaje' element={<PersonajeIndivivual/>}/>

            <Route path='/juegos' element={<AxiosConKey/>}/>
            <Route path='/juegos/:idJuego' element={<JuegoIndivivual/>}/>

            <Route path='/uselocation/carpeta/:123/algo' element={<UseLocation/>}/> 
            <Route path='/useref' element={<UseRef/>}/>
            <Route path='/useref2' element={<UseRef2/>}/>
            <Route path='/usecontext' element={<UseContext/>}/>


            {/* cualquier ruta que no este declarada mostrara la vista 404 - Not Found */}
            <Route path='*' element={<NotFound/>}/>
        </Routes>

        {/* Aqui colocaremos el Footer */}
        <NavBar/>
    </BrowserRouter>
);
