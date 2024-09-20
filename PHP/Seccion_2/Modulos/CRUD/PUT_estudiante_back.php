<?php
    // Verificamos si se esta recibiendo informacion por el metodo POST y el metodo GET.

    if($_GET){
        if($_POST){
            
            // Requerimos la conexion a la base de datos.
            require "./../Conexion.php";

            if($conn->connect_error){
                die("Error en la conexión: " . $conn->connect_error);

                header("refresh:3; url=GET_estudiantes.php");
            }else{
                // Extraemos todos los datos recibidos por ambos metodos
                $id = $_GET["id"];

                $nombre = $_POST["nombre"];
                $apellido = $_POST["apellido"];
                $edad = $_POST["edad"];
                $email = $_POST["email"];
                $ciudad = $_POST["ciudad"];
                $pais = $_POST["pais"];
                $url_foto = $_POST["url_foto"];

                // Preparamos la consulta para actualizar la informacion del estudiante.
                $consulta = "UPDATE estudiantes SET nombre = '$nombre', apellido = '$apellido', edad = $edad, email = '$email', ciudad = '$ciudad', pais = '$pais', url_foto = '$url_foto' WHERE id = $id";

                // Ejecutamos la consulta.
                $resultado = $conn->query($consulta);

                // Verificamos si se afecto alguna fila en la base de datos.
                if($conn->affected_rows == 1){
                    echo "<h2>Se actualizo la informacion del estudiante con el ID: $id</h2>";
                    header("refresh:3; url=GET_estudiantes.php");
                }else{
                    echo "<h2>No se pudo actualizar la informacion del estudiante con el ID: $id</h2>";
                    header("refresh:3; url=GET_estudiantes.php");
                }
            }
            // Cerramos la conexion a la base de datos.
            $conn->close();
        }else{
            echo "<h2>No se recibio informacion por el metodo POST, verifica el metodo de envio del formulario</h2>";
            header("refresh:3; url=GET_estudiantes.php");
        }

    }else{
        echo "<h2>No se recibio informacion por el metodo GET, Asegurate de enviar la informacion necesaria en la URL</h2>";
        header("refresh:3; url=GET_estudiantes.php");
    }
?>