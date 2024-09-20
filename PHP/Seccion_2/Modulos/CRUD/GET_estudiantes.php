<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #contenedor{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
            background-color: slategray;
            padding: 1rem;
        }

        #titulo{
            color: white;
            font-size: 2rem;
        }

        #cuadricula{
            display: grid; 
            grid-template-columns: repeat(5, 1fr); 
            gap: 1rem; 
            column-gap: 3.5rem;
            padding: 1rem; 
        }

        .estudiante{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border-radius: 1rem;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            padding-block: 1rem;
        }

        .imagen{
            width: 250px; 
            height: 250px; 
            border-radius: 5px;
            object-fit: cover;
        }
        
        .editarBTN{
            color: white; 
            background-color: darkblue; 
            text-decoration: none; 
            padding-block: 0.5rem; 
            padding-inline: 1rem; 
            border-radius: 0.5rem; 
            font-weight: bold;
        }
        
        .eliminarBTN{
            color: white; 
            background-color: darkred; 
            text-decoration: none; 
            padding-block: 0.5rem; 
            padding-inline: 1rem; 
            border-radius: 0.5rem; 
            font-weight: bold;
        }
    </style>
    <body>
        <?php
            require "./../Conexion.php";
            include "./../Componentes/NavBar.php";

            // Verificamos si la variable "$conn" existe
            if(isset($conn)){
                if($conn->connect_error){
                    // Si existe y tiene errores, mostramos un mensaje de error
                    die("Connection failed: " . $conn->connect_error);
                }else{

                    // Preparamos la consulta
                    $consulta = "SELECT * FROM estudiantes";

                    // Para poder ejecutar una consulta a la BD, utilizamos el metodo "query".
                    // Este metodo recibe como parametro un string con la consulta que queremos realizar y
                    // posteriormente retorna la informacion obtenida como resultado de la ejecucion de la misma.

                    // Guardamos el resultado de la consulta en la variable "$resultado"
                    $resultados = $conn->query($consulta);

                    // Verificamos si se obtuvieron resultados.
                    // Para ello utilizamos el metodo "num_rows" y una condicional.
                    if($resultados->num_rows >= 1) {
                        // Si existe al menos 1 registro, entonces imprimimos la informacion.
                        
                        // Armamos la salida del DOM.
                        echo "<section id='contenedor'>";
                            echo "<h1 id='titulo'>Estudiantes</h1>";
                            echo "<div id='cuadricula'>";
                            // Extraemos las filas de la respuesta obtenida usando el metodo "fetch_assoc()".
                            while($fila = $resultados->fetch_assoc()){
                                    // Mientras existan filas por procesar, se capturara la informacion de cada una de ellas en variables temporales
                                    // que se usaran para llenar los elementos del DOM.

                                    $id = $fila["id"];
                                    $nombre = $fila["nombre"];
                                    $apellido = $fila["apellido"];
                                    $edad = $fila["edad"];
                                    $email = $fila["email"];
                                    $ciudad = $fila["ciudad"];
                                    $pais = $fila["pais"];
                                    $foto = $fila["url_foto"];

                                    echo "<div class='estudiante'>";
                                        echo "<img src='".$foto."' class='imagen' alt='imagen'/>";
                                        echo "<p>ID: " . $id . "</p>";
                                        echo "<p>Nombre: " . $nombre . "</p>";
                                        echo "<p>Apellido: " . $apellido . "</p>";
                                        echo "<p>Edad: " . $edad . "</p>";
                                        echo "<p>Email: " . $email . "</p>";
                                        echo "<p>Ciudad: " . $ciudad . "</p>";
                                        echo "<p>Pais: " . $pais . "</p>";
                                        echo "<div style='display: flex; justify-content: center; gap: 1rem; margin-top: 1rem;'>";
                                            echo "<a href='./PUT_estudiante.php?id=" . $id . "'  class='editarBTN'>Editar</a>";
                                            echo "<a href='./DELETE_estudiante.php?id=" . $id . "'  class='eliminarBTN'>Eliminar</a>";
                                        echo "</div>";
                                    echo "</div>";
                                }
                            echo "</div>";
                            echo "<a href='./POST_estudiante.php' class='editarBTN'>Agregar estudiante</a>";
                        echo "</section>";
                    }else{
                        // Si no se obtuvieron resultados, mostramos un mensaje de error
                        echo "<h5>No se encontraron resultados</h5>";
                    }
                }
            }
            include "./../Componentes/Footer.php";
        ?>
    </body>
</html>