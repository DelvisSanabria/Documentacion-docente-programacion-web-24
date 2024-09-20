<?php
    // Eliminamos las cookies que contienen la informacion del usuario
    // setcookie("nombre", "", -1, "/");
    // setcookie("apellido", "", -1, "/");
    // setcookie("url_foto", "", -1, "/");

    // Eliminamos las variables de sesion
    // Para eliminar las variables de sesion, primero debemos iniciar la sesion con session_start() 
    session_start(); 
    
    // e inmediatamente destuirla con session_destroy()
    session_destroy();

    // Redireccionamos al usuario al formulario de inicio de sesion inmediatamente
    header("location:login.php");
?>