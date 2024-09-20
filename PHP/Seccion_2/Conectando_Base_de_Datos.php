<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Conectando Base de Datos en PHP</title>
    </head>
    <body style="background-color: darkgray; font-family: Arial;">
        <nav style="display: flex; gap: 15px; width: 100%; justify-content: center; font-size: 1.25rem;">
            <a href="Funciones_y_Recursividad.php">Funciones y Recursividad</a>
            <a href="Loops.php">Loops</a>
            <a href="Metodos_Strings_y_Array.php">Metodos de Strings y Array</a>
            <a href="AsocArrays_Objetos_y_Clases.php">Asociative Arrays, Objetos y Clases</a>
            <a href="Try_Catch.php">Try Catch</a>
            <a href="Conectando_Base_de_Datos.php">Conectando Base de Datos</a>
            <a href="Modularizacion.php">Modularizacion</a>
        </nav>

        <h1>Conectando Base de Datos en PHP</h1>

        <?php
            // PHP nos permite conectarnos a una  base de datos MySQL, es muy facil y rapido, para conectarnos a la base de datos MySQL con PHP 
            // debemos usar la clase "mysqli" esta es una clase nativa de PHP.

            // En pocas palabras, estariamos creando un modelo, el cual se encargara de interactuar con la BD.
            // El termino modelo, proviene del patron de diseño MVC (Modelo, Vista, Controlador), o de arquitectura MVC.

            // Este patron de diseño o arquitectura de software nos ayuda a separar la logica de la interaccion con la BD.


            // Creamos las variables de conexion.
            // Las variables de conexion se utilizan para definir las credenciales y los datos necesarios para la conexion a la BD.
            // Los nombres de la variables pueden ser cualquiera, sin embargo por convencion son los siguientes:


            // HOST: Es el nombre del servidor donde se encuentra la BD.
            // $host = "localhost";

            // USER: Es el nombre de usuario de la BD.
            // $user = "root";

            // PASSWORD: Es la contraseña del usuario de la BD.
            // $password = "";

            // DATABASE: Es el nombre de la BD a la que nos conectaremos.
            // $database = "grupo_15";


            // Una vez definidas las variables de conexion, procedemos a crear la conexion a la BD, para ello debemos crear una instancia de la clase "mysqli".
            // La clase "mysqli" recibe 4 parametros requeridos y 2 opcionales, los cuales son: 
            
            // Requeridos: HOST, USER, PASSWORD y DATABASE.
            // Opcionales: PORT (El puerto por defecto es 3306) y SOCKET (El socket por defecto es /tmp/mysql.sock).
            // ¿Que es un socket? Un socket es un punto final de una conexion bidireccional entre dos programas de una red.
            
            // La instancia de la clase "mysqli" se almacena en una variable, por convencion se le asigna el nombre "$conn".
            // $conn = new mysqli($host, $user, $password, $database);

            // Esta seria la forma de conectarnos usando variables.
            // Sin embargo, tambien podemos hacerlo de la siguiente forma:
            $conn = new mysqli("localhost", "root", "", "grupo_15");

            // Para verificar si la conexion fue exitosa, podemos usar un condicional "if" y el metodo "connect_error" de la instancia de la clase "mysqli".
            if ($conn->connect_error) {
                // die: Es una funcion de PHP que detiene la ejecucion del script y muestra un mensaje.
                die("Connection failed: " . $conn->connect_error);
            }else{
                // Si la conexion fue exitosa, mostramos un mensaje de exito.
                echo "<h2>Conexion Exitosa</h2>";
            }
        ?>
    </body>
</html>