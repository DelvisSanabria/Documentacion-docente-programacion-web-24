<?php
    require "./../Conexion.php";

    // Validamos si la conexion tiene errores
    if($conn->connect_error){
        // Si existe y tiene errores, mostramos un mensaje de error
        die("Connection failed: " . $conn->connect_error);
    }else{
        // Si no tiene errores, verificamos si la variable "$_GET" tiene datos
        if($_GET){
            // Si tiene datos, verificamos si la variable "$_GET['id']" tiene datos
            if($_GET['id']){
                // Si tiene datos, guardamos el id en una variable
                $id = $_GET['id'];

                // Creamos una consulta para eliminar un estudiante
                $consulta = "DELETE FROM estudiantes WHERE id = $id";

                // Ejecutamos la consulta y validamos si se pudo ejecutar sin problemas (Aunque retorne 0 filas afectadas)
                if($conn->query($consulta) === TRUE){
                    // Validamos las filas afectadas
                    if($conn->affected_rows > 0){
                        // Si se ejecuta correctamente, mostramos un mensaje de exito
                        echo "<h1>Se elimino correctamente el estudiante con el id: $id</h1>";

                        // Redireccionamos al usuario a la pagina de estudiantes despues de 4 segundos
                        header("refresh:4;url=GET_estudiantes.php");
                    }else{
                        // Si no se ejecuta correctamente, mostramos un mensaje de error
                        echo "<h2>No se encontro ningun estudiante con el id: $id</h2>";

                        // Redireccionamos al usuario a la pagina de estudiantes despues de 4 segundos
                        header("refresh:4;url=GET_estudiantes.php");
                    }
                }else{
                    // Si no se ejecuta correctamente, mostramos un mensaje de error
                    echo "<h2>Error al ejecutar la consulta: " . $consulta . " - " . $conn->error. "</h2>";

                    // Redireccionamos al usuario a la pagina de estudiantes despues de 4 segundos
                    header("refresh:4;url=GET_estudiantes.php");
                }
            }else{
                // Si no tiene datos, mostramos un mensaje de error
                echo "<h2>No se encontro el parametro id en la URL, asegurese de enviarlo</h2>";

                // Redireccionamos al usuario a la pagina de estudiantes despues de 4 segundos
                header("refresh:4;url=GET_estudiantes.php");
            }
        }else{
            // Si no tiene datos, mostramos un mensaje de error
            echo "<h2>No se encontro ningun id, asegurese de enviar un id por la URL</h2>";

            // Redireccionamos al usuario a la pagina de estudiantes despues de 4 segundos
            header("refresh:4;url=GET_estudiantes.php");
        }
    }

    // Cerramos la conexion para evitar brechas de seguridad
    $conn->close();
?>