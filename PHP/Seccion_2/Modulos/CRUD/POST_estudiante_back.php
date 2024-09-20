<?php
    // Verificamos si se esta recibiendo informacion por el metodo POST.
    if($_POST){
        
        // Requerimos la conexion a la base de datos.
        require "./../Conexion.php";

        if($conn->connect_error){
            die("Error en la conexión: " . $conn->connect_error);

            header("refresh:3; url=GET_estudiantes.php");
        }else{
            // Extraemos todos los datos recibidos por ambos metodos
            $nombre = $_POST["nombre"];
            $apellido = $_POST["apellido"];
            $edad = $_POST["edad"];
            $email = $_POST["email"];
            $ciudad = $_POST["ciudad"];
            $pais = $_POST["pais"];
            $url_foto = $_POST["url_foto"];

            // Ejecutamos la consulta.
            $resultado = $conn->query("INSERT INTO estudiantes (nombre, apellido, edad, email, ciudad, pais, url_foto) VALUES ('$nombre', '$apellido', $edad, '$email', '$ciudad', '$pais', '$url_foto')");

            echo "<h2>Se registro el estudiante con el nombre: $nombre $apellido</h2>";
            header("refresh:3; url=GET_estudiantes.php");
        }
    }else{
        echo "<h2>No se recibio informacion por el metodo POST, verifica el metodo de envio del formulario</h2>";
        header("refresh:3; url=GET_estudiantes.php");
    }
?>