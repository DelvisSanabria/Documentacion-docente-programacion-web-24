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
    // Validamos si esta llegando informacion a traves del metodo POST
    if($_POST){
        // Validamos si en el metodo POST esta llegando toda la informacion necesaria para un registro de usuario
        // Ademas usando isset() validamos si las variables estan definidas y son diferentes de NULL
        if(isset($_POST['correo']) && isset($_POST['clave'])){
            // Aunque isset() valida si las variables estan definidas y son diferentes de NULL, no valida si estan vacias, es decir, si tienen informacion
            // Para validar si las variables tienen informacion usamos empty()
            if(!empty($_POST['correo']) && !empty($_POST['clave'])){
                // Importamos el archivo de conexion a la base de datos
                require "./conexion.php";

                // Validamos si la conexion a la base de datos fue exitosa
                if($conn->connect_error){
                    die("La conexion a la base de datos ha fallado: ".$conn->connect_error);
                }else{
                    // Extraemos la informacion que viene del formulario
                    $correo = $_POST['correo'];
                    $clave = $_POST['clave'];
                

                    // Creamos la consulta para buscar en la base de datos al usuario en base al correo indicado
                    $consulta = "SELECT nombre, apellido, url_foto, clave FROM usuarios WHERE correo = '$correo'";

                    // Ejecutamos la consulta y guardamos el resultado
                    $resultado = $conn->query($consulta);

                    // Validamos si la consulta arrojo exactamente un resultado (El usuario existe)
                    if($resultado->num_rows == 1){
                        // Extraemos la informacion del usuario
                        $usuario = $resultado->fetch_assoc();

                        // Validamos si la clave ingresada por el usuario coincide con la clave encriptada en la base de datos
                        // Para ello usamos password_verify(), este metodo recibe 2 parametros, la clave ingresada por el usuario
                        // y la clave encriptada en la base de datos, si coinciden devuelve true, de lo contrario false.
                        if(password_verify($clave, $usuario['clave'])){
                            // echo "<h3>Inicio de sesion exitoso, redireccionando...</h3>";

                            echo "<div id='contenedor'>
                                    <div class='loader'></div>
                                </div>";
                            
                            // Creamos las cookies que contendran la informacion del usuario para mostrarla en la pagina de inicio
                            // setcookie("nombre", $usuario['nombre'], time() + 86400, "/");
                            // setcookie("apellido", $usuario['apellido'], time() + 86400, "/");
                            // setcookie("url_foto", $usuario['url_foto'], time() + 86400, "/");

                            // Iniciamos una sesion para almacenar la informacion del usuario
                            session_start();
                            $_SESSION['nombre'] = $usuario['nombre'];
                            $_SESSION['apellido'] = $usuario['apellido'];
                            $_SESSION['url_foto'] = $usuario['url_foto'];


                            // Redireccionamos al usuario a la pagina de inicio despues de 2.5 segundos
                            header("refresh:3.5;url=home.php");
                        }else{
                            echo "<h3>El Correo o la Clave son incorrectos, intenta nuevamente</h3>";
                            // Redireccionamos al usuario al formulario de registro despues de 3 segundos
                            header("refresh:3;url=login_front.php");
                        }
                    }else{
                        echo "<h3>No se encontro ningun usuario con el correo ingresado</h3>";
                        // Redireccionamos al usuario al formulario de registro despues de 3 segundos
                        header("refresh:3;url=login_front.php");
                    }
                }

                // Cerrar la conexion a la base de datos
                $conn->close();
            }else{
                echo "<h3>Debes llenar todos los campos del formulario correctamente</h3>";
                // Redireccionamos al usuario al formulario de registro despues de 3 segundos
                header("refresh:3;url=login_front.php");
            }
        }else{
            echo "<h3>No se recibio la informacion necesaria para completar el registro asegurate de llenar todos los campos</h3>";
            // Redireccionamos al usuario al formulario de registro despues de 3 segundos
            header("refresh:3;url=login_front.php");
        }
    }else{
        echo "<h3>No se recibio informacion en el metodo POST, asegurate de llenar el formulario correctamente</h3>";
        // Redireccionamos al usuario al formulario de registro despues de 3 segundos
        header("refresh:3;url=login_front.php");
    }
?>