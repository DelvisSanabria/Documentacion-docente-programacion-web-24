<!-- 
    COOKIES: Las cookies o galletas informaticas, son variables que se almacenan en el navegador del usuario y
    se utilizan para guardar información sobre el mismo.

    amenudo para guardar información sobre las credenciales del usuario, las preferencias del sitio, etc...
-->

<?php
    // Definir una COOKIE amerita: 
    // Asignacion de nombre, valor y tiempo de vida de la cookie, donde 86400 equivale a 1 dia.
    // La funcion setcookie() creara una cookie con el nombre "diego", y el valor "Diego Rodriguez".
    // Esta cookie tendra un tiempo de vida de 86400 segundos y podra ser accedida por el navegador desde
    // la carpeta raiz del servidor (scope).

    //         nombre  valor              tiempo de vida  scope
    setcookie("diego", "Diego Rodriguez", time() + 86400, "/");

    // DATO CURIOSO: la función time() devuelve el tiempo actual en formato UNIX Epoch. 
    // El formato UNIX Epoch muestra el tiempo como un número entero que representa
    // los segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC.
    // El valor máximo que puede representarse en un numero entero de 32 bits
    // (como se utiliza comúnmente en sistemas Unix) es el 19 de enero de 2038 a las 03:14:07 UTC. 
    // Este evento se conoce como el problema del año 2038 o "Y2K38".



    // Verificamos si la COOKIE existe usando isset(), isset es la conjugacion de 
    // "is set" que traducido es: ¿esta asignado?
    // La funcion isset() verifica si la variable existe y si tiene un valor distinto de NULL.
    // Para acceder a una COOKIE se utiliza la variable superglobal $_COOKIE, que es un array asociativo, 
    // e indicamos la clave (el nombre) de la COOKIE a la cual queremos acceder.

    if(isset($_COOKIE['diego'])){
        echo "<p>La cookie 'diego' existe y su valor es: ".$_COOKIE['diego']."</p>";
    }else{
        echo "<p>La cookie 'diego' no existe</p>";
    }


    // Borrar una COOKIE
    // Para borrar una cookie, debes establecerla con un tiempo de expiración en el pasado.
    // setcookie(nombre, valor, tiempo de vida en el pasado, carpeta);
    setcookie("diego", "", -1, "/");
?>