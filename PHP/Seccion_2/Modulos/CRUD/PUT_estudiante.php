<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Editar estudiante</title>
        <!-- Importamos Tailwind -->
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-500 w-[100%] h-[100vh] flex flex-col items-center">
        <h1 class="text-3xl text-white my-16 underline">Editar estudiante</h1>
        <a href="GET_estudiantes.php" class="text-white font-bold text-xl mb-4 bg-blue-600 hover:bg-blue-800 cursor-pointer rounded-lg py-2 px-4">Regresar</a>
        
        <?php
            // Requerimos la conexion a la base de datos.
            require "./../Conexion.php";

            if($conn->connect_error){
                die("Error en la conexión: " . $conn->connect_error);

                header("refresh:3; url=GET_estudiantes.php");
            }else{

                // Extraemos el id del estudiante desde los parametros del URL usango $_GET.
                $id = $_GET["id"];

                // Obtenemos la informacion del estudiante que se desea editar.
                $consulta1 = "SELECT * FROM estudiantes WHERE id = $id";

                // Ejecutamos la consulta.
                $respuesta = $conn->query($consulta1);

                if($respuesta->num_rows == 1){
                    // Creamos un formulario con los datos actuales del estudiante.
                    echo "<form action='./PUT_estudiante_back.php?id=$id' method='POST' class='flex flex-col justify-center items-center w-[450px] h-[600px] gap-2 bg-slate-400 px-28 py-4 rounded'>";
                        while($estudiante = $respuesta->fetch_assoc()){
                            echo "<input type='text' placeholder='Nombre' name='nombre' value='$estudiante[nombre]' class='w-[300px] rounded font-bold p-2'/>";
                            echo "<input type='text' placeholder='Apellidos' name='apellido' value='$estudiante[apellido]' class='w-[300px] rounded font-bold p-2'/>";
                            echo "<input type='number' placeholder='Edad' name='edad' value='$estudiante[edad]' class='w-[300px] rounded font-bold p-2'/>";
                            echo "<input type='text' placeholder='Email' name='email' value='$estudiante[email]' class='w-[300px] rounded font-bold p-2'/>";
                            echo "<input type='text' placeholder='Ciudad' name='ciudad' value='$estudiante[ciudad]' class='w-[300px] rounded font-bold p-2'/>";
                            echo "<input type='text' placeholder='Pais' name='pais' value='$estudiante[pais]' class='w-[300px] rounded font-bold p-2'/>";
                            echo "<input type='text' placeholder='Foto URL' name='url_foto' value='$estudiante[url_foto]' class='w-[300px] rounded font-bold p-2'/>";
                            echo "<input type='submit' value='Actualizar' class='w-[300px] mt-4 bg-green-600 hover:bg-green-800 cursor-pointer rounded-lg text-white font-bold py-2 px-4 text-center'/>";
                        }
                    echo "</form>"; 
                }else{
                    echo "<p class='text-white text-xl font-bold'>No se encontro el estudiante con el ID: $id</p>";

                    header("refresh:3; url=GET_estudiantes.php");
                }
            }
            
            // Cerramos la conexion.
            $conn->close();
        ?>
    </body>
</html>