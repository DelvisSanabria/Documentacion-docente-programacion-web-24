// Importamor el hook useLocation de react-router-dom para obtener la ubicación actual de la aplicación y
// otras propiedades de la ubicación.

import { useLocation } from 'react-router-dom';

const UseLocation = () => {

    // Instanciamos el hook useLocation
    const location = useLocation();
    const {pathname, search} = location;

    return (
        <div>
            <h2>useLocation</h2>
            <p>Ubicacion Actual: {pathname}</p>
            <p>Queryes de busqueda: {search}</p>
        </div>
    );
}

export default UseLocation;