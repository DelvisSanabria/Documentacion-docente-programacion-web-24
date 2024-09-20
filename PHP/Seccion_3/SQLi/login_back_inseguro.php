<style>
    #contenedor {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }

    .loader {
    --s: 20px;
    
    --_d: calc(0.353*var(--s));
    width: calc(var(--s) + var(--_d));
    aspect-ratio: 1;
    display: grid;
    }
    .loader:before,
    .loader:after {
        content: "";
        grid-area: 1/1;
        clip-path: polygon(var(--_d) 0,100% 0,100% calc(100% - var(--_d)),calc(100% - var(--_d)) 100%,0 100%,0 var(--_d));
        background:
        conic-gradient(from -90deg at calc(100% - var(--_d)) var(--_d),
        #fff 135deg,#666 0 270deg,#aaa 0);
        animation: l6 2s infinite;
    }
    .loader:after {
        animation-delay:-1s;
    }
    @keyframes l6{
        0%  {transform:translate(0,0)}
        25% {transform:translate(30px,0)}
        50% {transform:translate(30px,30px)}
        75% {transform:translate(0,30px)}
        100%{transform:translate(0,0)}
    }
</style>



<?php
    // Realizamos la conexion a la base de datos
    $conn = new mysqli("localhost", "root", "", "seccion_3");
    
    // Extraemos la informacion que viene del formulario
    $correo = $_POST['correo'];
    $clave = $_POST['clave'];

    
    // Ejecutamos la consulta y guardamos el resultado
    $resultado = $conn->query("SELECT nombre, apellido, url_foto, rol, clave FROM usuarios WHERE correo = '$correo'");
    

    // Extraemos la informacion del usuario
    $usuario = $resultado->fetch_assoc();

    echo "<div id='contenedor'>
        <div class='loader'></div>
    </div>";

    // Iniciamos una sesion para almacenar la informacion del usuario
    session_start();
    $_SESSION['nombre'] = $usuario['nombre'];
    $_SESSION['apellido'] = $usuario['apellido'];
    $_SESSION['url_foto'] = $usuario['url_foto'];
    $_SESSION['rol'] = $usuario['rol'];

    // Validamos el rol del usuario para redireccionarlo a la pagina correspondiente
    if($usuario['rol'] == "admin"){
        // Redireccionamos al usuario a la pagina de inicio de administrador
        header("refresh:3;url=home_admin.php");
    }elseif($usuario['rol'] == "user"){
        // Redireccionamos al usuario a la pagina de inicio de usuario
        header("refresh:3;url=home_usuario.php");
    }
?>