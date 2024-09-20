<!-- 
    Las variables superglobales se utilizan para recuperar información de la aplicación.

    Estas son:

    - $_GET: Contiene datos enviados por la URL mediante el método GET.
    - $_POST: Contiene datos enviados desde un formulario HTML mediante el método POST.
    - $_COOKIE: Contiene variables que se han enviado al navegador y se almacenan en forma de cookies.
    - $_SESSION: Almacena variables de sesión en el servidor para ser usadas entre distintas páginas.
    - $_SERVER: Contiene información sobre encabezados, rutas y ubicaciones de scripts, así como información del servidor.
    - $_FILES: Utilizada para acceder a archivos subidos por el usuario mediante formularios.
    - $_ENV: Contiene variables del entorno del sistema.
    - $_REQUEST: Contiene datos de variables en la peticion HTTP (tanto $_GET, $_POST y $_COOKIE).
    - global: Permite acceder a todas las variables globales desde cualquier parte del script.

    
        Tabla de variables superglobales con su descripción:
        +------------------+-------------------------------------------------------------+
        | Variable         | Descripción                                                 |
        +------------------+-------------------------------------------------------------+
        | $_GET            | Un array asociativo de variables pasadas al script a través |
        |                  | de la URL (query string).                                   |
        +------------------+-------------------------------------------------------------+
        | $_POST           | Un array asociativo de variables pasadas al script a través |
        |                  | de un formulario HTTP POST.                                 |
        +------------------+-------------------------------------------------------------+
        | $_SESSION        | Un array asociativo que contiene variables de sesión.       |
        |                  | Utilizado para mantener datos a través de múltiples         |
        |                  | peticiones de un mismo usuario.                             |
        +------------------+-------------------------------------------------------------+
        | $_COOKIE         | Un array asociativo de variables pasadas al script a través |
        |                  | de cookies HTTP.                                            |
        +------------------+-------------------------------------------------------------+
        | $_GLOBALS        | Un array asociativo que contiene todas las variables        |
        |                  | globales del script. Permite acceso a todas las variables   |
        |                  | globales desde cualquier lugar del script.                  |
        +------------------+-------------------------------------------------------------+
        | $_SERVER         | Un array que contiene información del servidor y del        |
        |                  | entorno de ejecución. Incluye cabeceras HTTP, rutas de      |
        |                  | script, y detalles del servidor.                            |
        +------------------+-------------------------------------------------------------+
        | $_FILES          | Un array asociativo de elementos subidos al script a través |
        |                  | de un formulario HTTP POST con enctype="multipart/form-data"|
        +------------------+-------------------------------------------------------------+
        | $_REQUEST        | Un array asociativo que contiene datos de $_GET, $_POST, y  |
        |                  | $_COOKIE. Su uso es menos recomendado debido a problemas de |
        |                  | seguridad y ambigüedad.                                     |
        +------------------+-------------------------------------------------------------+
        | $_ENV            | Un array asociativo de variables de entorno del sistema.    |
        |                  | Estas variables suelen estar definidas en el entorno del    |
        |                  | servidor o en el sistema operativo.                         |
        +------------------+-------------------------------------------------------------+
        | $php_errormsg    | Contiene el último mensaje de error generado por el         |
        |                  | intérprete de PHP si se ha activado la directiva            |
        |                  | track_errors. No es superglobal, pero es de interés.        |
        +------------------+-------------------------------------------------------------+

-->


<?php
    // Ejemplo:

    // $nombre = $_GET['nombre'];
    // $apellido = $_GET['apellido'];
    // $edad = $_GET['edad'];


    // echo "Hola $nombre $apellido, de $edad años."
?>



<!-- 
    Ejemplo de $_POST:
-->

<?php
    // Ejemplo:
    // $nombre2 = $_POST['nombre'];
    // $apellido2 = $_POST['apellido'];
    // $edad2 = $_POST['edad'];

    // echo "Hola $nombre2 $apellido2, de $edad2 años.";

?>


<!-- 
    Ejemplo de $_COOKIE:
-->


<?php
    // Ejemplo:

    // Creacion de una COOKIE:
    setcookie("usuario", "haonter", time() + 86400, "/");


    // Obteniendo datos de la COOKIE:
    $usuario = $_COOKIE['usuario'];

    // echo "<h1>Hola $usuario</h1>";
?>






<!-- 
    Ejemplo de $_SESSION: es una variable superglobal que se utiliza para almacenar información sobre el usuario en el servidor, 
    durtante la sesion del usuario.
-->

<?php
    // En una página (inicio de sesión)
    session_start();

    // Crear una variable de sesion
    $_SESSION['usuario'] = 'Eduardo';

    // En otra página una vez que se haya creado la variable de sesion podremos acceder a ella
    // session_start();
    echo $_SESSION['usuario']; // Imprimirá 'Eduardo'


    // NOTA: Solo puede haber una sesion abierta a la vez.
    // Por eso antes de iniciar una sesion con otro usuario, hay que cerrar la sesion previamente abierta.
    session_destroy();
?>



<!-- 
    Ejemplo de $_SERVER: es una variable superglobal que se utiliza para almacenar información sobre el servidor y la ejecución del script.
-->

<?php
    // Ejemplo:
    
    // Obtener información sobre el servidor
    $server_software = $_SERVER['SERVER_SOFTWARE'];
    echo "<p>El servidor está utilizando: $server_software</p>";


    // Obtener la dirección IP del cliente
    $ip = $_SERVER['REMOTE_ADDR'];
    echo "<p>Tu dirección IP es: $ip</p>";


    // Obtener  la dirección del servidor
    $server = $_SERVER['SERVER_NAME'];
    echo "<p>La dirección del servidor es: $server</p>";

    // Obtener la dirección del archivo actual
    $archivo = $_SERVER['PHP_SELF'];
    echo "<p>La dirección del archivo actual es: $archivo</p>";

    /*
        Mas propiedades en la siguiente tabla:
        +--------------------------+-----------------------------------------------------------+
        | Propiedad                | Descripción                                               |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['PHP_SELF']     | Nombre del archivo del script en ejecución.               |
        |                          | Incluye la ruta si está en un subdirectorio.              |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['SERVER_NAME']  | Nombre del host del servidor donde se ejecuta el script.  |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['HTTP_HOST']    | Contenido de la cabecera Host: de la petición actual.     |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['HTTP_USER_AGENT'] | Contenido de la cabecera User-Agent: de la petición.   |
        |                              | Describe el navegador del cliente.                    |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['SERVER_SOFTWARE'] | Cadena de identificación del software del servidor.    |
        |                             | (Ej. Apache/2.4.41 (Ubuntu))                           |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['REQUEST_METHOD']  | Método de la petición HTTP (GET, POST, etc.).          |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['QUERY_STRING']    | Cadena de consulta de la URL si existe.                |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['REQUEST_URI']     | URI que se utilizó para acceder al script.             |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['REMOTE_ADDR']     | Dirección IP desde la cual el usuario está viendo la   |
        |                             | página actual.                                         |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['REMOTE_PORT']     | Puerto utilizado en la máquina del usuario para la     |
        |                             | conexión con el servidor.                              |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['SCRIPT_FILENAME'] | Ruta absoluta del archivo del script en ejecución.     |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['SERVER_PROTOCOL'] | Protocolo de la petición (HTTP/1.1, HTTP/2, etc.).     |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['REQUEST_TIME']    | Marca de tiempo Unix del inicio de la petición.        |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['HTTP_REFERER']    | URL de la página desde la cual llegó el usuario.       |
        |                             | (Puede estar vacío si no hay referencia o está         |
        |                             | bloqueada).                                            |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['HTTPS']           | Si el script se ejecuta a través de HTTPS, contiene    |
        |                             | la cadena 'on'. Puede no estar definida si no se usa   |
        |                             | HTTPS.                                                 |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['SERVER_PORT']     | Puerto en el que el servidor está escuchando (80 para  |
        |                             | HTTP, 443 para HTTPS).                                 |
        +--------------------------+-----------------------------------------------------------+
        | $_SERVER['DOCUMENT_ROOT']   | Directorio raíz del servidor web desde el cual se      |
        |                             | ejecuta el script.                                     |
        +--------------------------+-----------------------------------------------------------+

    */
?>



<!-- 
    Ejemplo de $_FILES: es una variable superglobal que se utiliza para acceder a archivos subidos por el usuario mediante formularios.
-->


<?php
    // Se verifica si hay un archivo para subir.

    // Verificamos si la solicitud es de tipo POST
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        
        // Comprobamos si el archivo ha sido enviado a través del formulario
        if (isset($_FILES['archivo'])) {
            
            // Capturamos el nombre original del archivo subido (incluyendo la extensión)
            $nombreArchivo = $_FILES['archivo']['name']; // Ejemplo: "mi_foto.jpg"
            
            // Capturamos el tipo MIME del archivo (determinado por el navegador)
            $tipoArchivo = $_FILES['archivo']['type'];   // Ejemplo: "image/jpeg"
            
            // Capturamos la ruta temporal del archivo en el servidor
            // El archivo se almacena aquí temporalmente antes de ser movido
            $rutaTemporal = $_FILES['archivo']['tmp_name']; // Ejemplo: "/tmp/phpYzdqkD"
            
            // Capturamos el código de error asociado a la subida del archivo
            // Este valor es esencial para manejar diferentes tipos de errores
            $errorArchivo = $_FILES['archivo']['error']; // Ejemplo: 0 (UPLOAD_ERR_OK)
            
            // Capturamos el tamaño del archivo en bytes
            $tamañoArchivo = $_FILES['archivo']['size']; // Ejemplo: 204800 (200 KB)
            
            // Verificamos si no hubo errores durante la subida del archivo
            if ($errorArchivo === UPLOAD_ERR_OK) {
                // Definimos la ruta final del archivo en el servidor
                // En este caso, lo movemos al directorio "uploads" con el nombre original
                // upload/mi_foto.jpg
                $directorioDestino = "uploads/$nombreArchivo";

                // ¿Por que no podemos mover el archivo directamente a la carpeta uploads?
                // Porque no tenemos permisos para escribir en esa carpeta, por lo que debemos
                // mover el archivo a una carpeta temporal y luego moverlo a la carpeta uploads.
                
                // Movemos el archivo desde la ubicación temporal a la ubicación definitiva
                // 'move_uploaded_file' devuelve true si se movió exitosamente
                if (move_uploaded_file($rutaTemporal, $directorioDestino)) {
                    // Confirmación de que el archivo fue subido y movido correctamente
                    echo "Archivo subido correctamente.";
                } else {
                    // Error al mover el archivo, podría ser un problema de permisos en el directorio
                    echo "Error al mover el archivo a su ubicación final.";
                }
            } else {
                // Mensaje de error si la subida del archivo no fue exitosa
                // Mostramos el código de error, se pueden implementar más mensajes personalizados
                echo "Error al subir el archivo. Código de error: $errorArchivo";
            }
        }
    }
?>





<!-- 
    Ejemplo de $_ENV:

    ¿Que es un archivo .env?
    Un archivo .env es un archivo de texto que contiene una serie de variables de entorno
    que usualmente son privadas, como las credenciales de una base de datos, o un token.

    Son utilizadas con el fin de dar seguridad a una aplicación.
-->

<?php
    // Se crea una variable de entorno llamada HOST_DE_BD
    $_ENV["HOST_DE_BD"] = "localhost";

    // Se accede a la variable de entorno HOST_DE_BD
    $datosDeEnv = $_ENV["HOST_DE_BD"];

    // Imprime: "El HOST DE BD es: $datosDeEnv";
    echo "<p>El HOST DE BD es: $datosDeEnv</p>"; 
?>




<!-- 
    Ejemplo de $_REQUEST: 
-->

<?php
    // Usando $_REQUEST para obtener datos de formulario ($_GET, $_POST, $_COOKIE)
    $nombre_usuario = $_REQUEST['nombre'];
    $correo = $_REQUEST['correo'];

    // En este caso deseamos acceder a la cookie 'usuario' cuyo valor es 'haonter', sin embargo,
    // como esta cookie no se envio en la peticion HTTP, no se podra acceder a ella.
    // Por lo tanto el valor de la cookie 'usuario' es undefined en este caso y veremos el error "Undefined array key".
    $usuario = $_REQUEST['usuario'];
    
    //                                                                                         No se vera
    echo ("<p>El nombre del usuario es: $nombre_usuario, su correo es: $correo y el usuario es: $usuario</p>");
?>



<!-- 
    Ejemplo de global: 
-->

<?php
    // Accediendo y modificando una variable global desde una función
    $numero = 10;


    function duplicar() {
        global $numero;
        $numero *= 2;
    }

    // Antes de ser modificado por la funcion duplicar()
    echo "<p>Antes de ser modificado por la funcion duplicar(): $numero</p>";

    // Modificando la variable global
    duplicar();

    // Despues de ser modificado por la funcion duplicar()
    echo "<p>Despues de ser modificado por la funcion duplicar(): $numero</p>";
?>