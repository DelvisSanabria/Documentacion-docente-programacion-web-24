<?php
    // Validamos si esta llegando informacion a traves del metodo POST
    if($_POST){
        // Validamos si en el metodo POST esta llegando toda la informacion necesaria para un registro de usuario
        // Ademas usando isset() validamos si las variables estan definidas y son diferentes de NULL
        if(isset($_POST['nombre']) && isset($_POST['apellido']) && isset($_POST['edad']) && isset($_POST['correo']) && isset($_POST['telefono']) && isset($_POST['clave'])){
            // Aunque isset() valida si las variables estan definidas y son diferentes de NULL, no valida si estan vacias, es decir, si tienen informacion
            // Para validar si las variables tienen informacion usamos empty()
            if(!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['edad']) && !empty($_POST['correo']) && !empty($_POST['telefono']) && !empty($_POST['clave'])){
                // Importamos el archivo de conexion a la base de datos
                require "./conexion.php";
                
                // Validamos si la conexion a la base de datos fue exitosa
                if($conn->connect_error){
                    die("La conexion a la base de datos ha fallado: ".$conn->connect_error);
                }else{
                    // Si la conexion fue exitosa procedemos a guardar la informacion del usuario en la base de datos
                    // Guardamos en variables la informacion que viene del formulario
                    $nombre = $_POST['nombre'];
                    $apellido = $_POST['apellido'];
                    $edad = $_POST['edad'];
                    $correo = $_POST['correo'];
                    $telefono = $_POST['telefono'];
                    $url_foto = $_POST['url_foto'];
                    $clave = $_POST['clave'];
                    
                    // Antres de definir la consulta que insertara el usuario en la tabla usuarios debemos encriptar la clave.
                    // Para ello usaremos password_hash(), este metodo recibe 2 parametros, la clave y el metodo de encriptacion
                    $clave = password_hash($clave, PASSWORD_DEFAULT);
                    
                    // Creamos la consulta para guardar la informacion del usuario en la base de datos
                    $consulta = "INSERT INTO usuarios (nombre, apellido, edad, correo, telefono, url_foto, clave) VALUES ('$nombre', '$apellido', '$edad', '$correo', '$telefono', '$url_foto', '$clave')";
                    
                    // Ejecutamos la consulta y validamos si esta fue exitosa
                    if($conn->query($consulta) === TRUE){
                        echo "<h3>El registro del usuario fue exitoso</h3>";
                        // Redireccionamos al usuario al formulario de registro despues de 3 segundos
                        header("refresh:3;url=login_front.php");
                    }else{
                        echo "<h3>El registro ha fallado, intenta nuevamente</h3>";
                        // Redireccionamos al usuario al formulario de registro despues de 3 segundos
                        header("refresh:3;url=register_front.php");
                    }
                }
            }else{
                echo "<h3>Debes llenar todos los campos del formulario correctamente</h3>";
                // Redireccionamos al usuario al formulario de registro despues de 3 segundos
                header("refresh:3;url=register_front.php");
            }
            // Cerrar la conexion a la base de datos
            $conn->close();
        
        }else{
                echo "<h3>No se recibio la informacion necesaria para completar el registro asegurate de llenar todos los campos</h3>";
                // Redireccionamos al usuario al formulario de registro despues de 3 segundos
                header("refresh:3;url=register_front.php");
        }
    }else{
        echo "<h3>No se recibio informacion en el metodo POST, asegurate de llenar el formulario correctamente</h3>";
        // Redireccionamos al usuario al formulario de registro despues de 3 segundos
        header("refresh:3;url=register_front.php");
    }
?>