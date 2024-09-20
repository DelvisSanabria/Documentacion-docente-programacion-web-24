<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Try Catch en PHP</title>
    </head>
    <body style="background-color: darkgrey; font-family: Arial;">
        <nav style="display: flex; gap: 15px; width: 100%; justify-content: center; font-size: 1.25rem;">
            <a href="Funciones_y_Recursividad.php">Funciones y Recursividad</a>
            <a href="Loops.php">Loops</a>
            <a href="Metodos_Strings_y_Array.php">Metodos de Strings y Array</a>
            <a href="AsocArrays_Objetos_y_Clases.php">Asociative Arrays, Objetos y Clases</a>
            <a href="Try_Catch.php">Try Catch</a>
            <a href="Conectando_Base_de_Datos.php">Conectando Base de Datos</a>
            <a href="Modularizacion.php">Modularizacion</a>
        </nav>

        <h1>Try-Catch</h1>
        <!-- 
            try y catch: son bloques utilizados para implementar el manejo de excepciones. 
            El bloque try se utiliza para envolver el código que puede generar una excepción, 
            mientras que el bloque catch se utiliza para capturar y manejar las excepciones lanzadas 
            dentro del bloque try.

            Las excepciones son errores que pueden ocurrir durante la ejecución de un programa.
        -->

        <?php
            try{
                // En este ejemplo se pretende dividir 10 entre 2.
                $resultado = 10 / 2; // División por 2, no lanza una excepción.
                echo "<p>El resultado de la división es: $resultado</p>";
            }catch(Exception $error){
                // Capturando la exepcion (error) y manejandola.
                echo "<p>Se produjo una exepcion: " . $error->getMessage(). "</p>";
            }finally{
                // Este bloque se ejecuta siempre, independientemente de si se lanza una excepción o no.
                echo "<p>Este bloque se ejecuta siempre, independientemente de si se lanza una excepción o no.</p>";
            };


            echo "<hr>"; // Salto de linea entre bloques


            try{
                // En este ejemplo se lanza una excepción de división por cero, DivisionByZero exception.
                $resultado = 10 / 0; // División por cero, lanza una excepción.
                echo "<p>El resultado de la división es: $resultado</p>";
            }catch(DivisionByZeroError $error){
                // Capturando la exepcion (error) y manejandola.
                echo "<p>Se produjo una exepcion: " . $error->getMessage(). "</p>";
            }finally{
                // Este bloque se ejecuta siempre, independientemente de si se lanza una excepción o no.
                echo "<p>Este bloque se ejecuta siempre, independientemente de si se lanza una excepción o no.</p>";
            };
            
            echo "<hr>"; 
            echo "<p>El bloque try-catch se utiliza para manejar excepciones, es decir, errores que pueden ocurrir durante la ejecución de un programa.</p>";


            //  Tipos de excepciones en PHP
            // +---------------------------+-----------------------------+-------------------+--------------------------------------------------------------+
            // | Nombre                    | Nombre a usar (en catch)    | Tipo              | Descripción                                                  |
            // +---------------------------+-----------------------------+-------------------+--------------------------------------------------------------+
            // | Exception                 | Exception                   | Exception         | Clase base de todas las excepciones en PHP.                  |
            // | ErrorException            | ErrorException              | Exception         | Convierte errores PHP en excepciones.                        |
            // | PDOException              | PDOException                | Exception         | Errores específicos de PDO para bases de datos.              |
            // | DOMException              | DOMException                | Exception         | Errores relacionados con la manipulación de documentos DOM.  |
            // | LogicException            | LogicException              | Exception         | Errores relacionados con la lógica del programa.             |
            // | BadFunctionCallException  | BadFunctionCallException    | LogicException    | Llamada a función incorrecta o no definida.                  |
            // | BadMethodCallException    | BadMethodCallException      | LogicException    | Llamada a método incorrecto o no definido.                   |
            // | DomainException           | DomainException             | LogicException    | Valor fuera del dominio de parámetros esperados.             |
            // | InvalidArgumentException  | InvalidArgumentException    | LogicException    | Argumento inválido pasado a una función o método.            |
            // | LengthException           | LengthException             | LogicException    | Longitud inválida.                                           |
            // | OutOfRangeException       | OutOfRangeException         | LogicException    | Parámetro fuera de rango válido.                             |
            // | RuntimeException          | RuntimeException            | Exception         | Excepciones que ocurren en tiempo de ejecución.              |
            // | OutOfBoundsException      | OutOfBoundsException        | RuntimeException  | Índice fuera de límites válidos.                             |
            // | OverflowException         | OverflowException           | RuntimeException  | Error por exceso en la capacidad de almacenamiento.          |
            // | RangeException            | RangeException              | RuntimeException  | Valor fuera de rango.                                        |
            // | UnderflowException        | UnderflowException          | RuntimeException  | Error por subdesbordamiento de una operación.                |
            // | UnexpectedValueException  | UnexpectedValueException    | RuntimeException  | Valor inesperado encontrado.                                 |
            // | ArithmeticError           | ArithmeticError             | Error             | Errores en operaciones aritméticas.                          |
            // | DivisionByZeroError       | DivisionByZeroError         | ArithmeticError   | Error al intentar dividir por cero.                          |
            // | AssertionError            | AssertionError              | Error             | Error lanzado por una aserción fallida.                      |
            // | ParseError                | ParseError                  | Error             | Error de análisis, como un error de sintaxis.                |
            // | TypeError                 | TypeError                   | Error             | Error de tipo, p. ej., argumentos incorrectos en funciones.  |
            // | ArgumentCountError        | ArgumentCountError          | TypeError         | Número incorrecto de argumentos en la llamada de función.    |
            // | UnhandledMatchError       | UnhandledMatchError         | Error             | Error en expresión `match` sin caso coincidente (PHP 8+).    |
            // | CompileError              | CompileError                | Error             | Error en tiempo de compilación (raro en ejecución).          |
            // | mysqli_sql_exception      | mysqli_sql_exception        | Exception         | Excepciones específicas de MySQLi para errores SQL.          |
            // | SoapFault                 | SoapFault                   | Exception         | Excepciones en la extensión SOAP para errores de comunicación.|
            // | IntlException             | IntlException               | Exception         | Errores en la extensión Intl para internacionalización.      |
            // +---------------------------+-----------------------------+-------------------+--------------------------------------------------------------+
        ?>

        <table border="1">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Nombre para capturarlo</th>
                    <th>Tipo</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Exception</td>
                    <td>Exception</td>
                    <td>Exception</td>
                    <td>Clase base de todas las excepciones en PHP.</td>
                </tr>
                <tr>
                    <td>ErrorException</td>
                    <td>ErrorException</td>
                    <td>Exception</td>
                    <td>Convierte errores PHP en excepciones.</td>
                </tr>
                <tr>
                    <td>PDOException</td>
                    <td>PDOException</td>
                    <td>Exception</td>
                    <td>Errores específicos de PDO para bases de datos.</td>
                </tr>
                <tr>
                    <td>DOMException</td>
                    <td>DOMException</td>
                    <td>Exception</td>
                    <td>Errores relacionados con la manipulación de documentos DOM.</td>
                </tr>
                <tr>
                    <td>LogicException</td>
                    <td>LogicException</td>
                    <td>Exception</td>
                    <td>Errores relacionados con la lógica del programa.</td>
                </tr>
                <tr>
                    <td>BadFunctionCallException</td>
                    <td>BadFunctionCallException</td>
                    <td>LogicException</td>
                    <td>Llamada a función incorrecta o no definida.</td>
                </tr>
                <tr>
                    <td>BadMethodCallException</td>
                    <td>BadMethodCallException</td>
                    <td>LogicException</td>
                    <td>Llamada a método incorrecto o no definido.</td>
                </tr>
                <tr>
                    <td>DomainException</td>
                    <td>DomainException</td>
                    <td>LogicException</td>
                    <td>Valor fuera del dominio de parámetros esperados.</td>
                </tr>
                <tr>
                    <td>InvalidArgumentException</td>
                    <td>InvalidArgumentException</td>
                    <td>LogicException</td>
                    <td>Argumento inválido pasado a una función o método.</td>
                </tr>
                <tr>
                    <td>LengthException</td>
                    <td>LengthException</td>
                    <td>LogicException</td>
                    <td>Longitud inválida.</td>
                </tr>
                <tr>
                    <td>OutOfRangeException</td>
                    <td>OutOfRangeException</td>
                    <td>LogicException</td>
                    <td>Parámetro fuera de rango válido.</td>
                </tr>
                <tr>
                    <td>RuntimeException</td>
                    <td>RuntimeException</td>
                    <td>Exception</td>
                    <td>Excepciones que ocurren en tiempo de ejecución.</td>
                </tr>
                <tr>
                    <td>OutOfBoundsException</td>
                    <td>OutOfBoundsException</td>
                    <td>RuntimeException</td>
                    <td>Índice fuera de límites válidos.</td>
                </tr>
                <tr>
                    <td>OverflowException</td>
                    <td>OverflowException</td>
                    <td>RuntimeException</td>
                    <td>Error por exceso en la capacidad de almacenamiento.</td>
                </tr>
                <tr>
                    <td>RangeException</td>
                    <td>RangeException</td>
                    <td>RuntimeException</td>
                    <td>Valor fuera de rango.</td>
                </tr>
                <tr>
                    <td>UnderflowException</td>
                    <td>UnderflowException</td>
                    <td>RuntimeException</td>
                    <td>Error por subdesbordamiento de una operación.</td>
                </tr>
                <tr>
                    <td>UnexpectedValueException</td>
                    <td>UnexpectedValueException</td>
                    <td>RuntimeException</td>
                    <td>Valor inesperado encontrado.</td>
                </tr>
                <tr>
                    <td>ArithmeticError</td>
                    <td>ArithmeticError</td>
                    <td>Error</td>
                    <td>Errores en operaciones aritméticas.</td>
                </tr>
                <tr>
                    <td>DivisionByZeroError</td>
                    <td>DivisionByZeroError</td>
                    <td>ArithmeticError</td>
                    <td>Error al intentar dividir por cero.</td>
                </tr>
                <tr>
                    <td>AssertionError</td>
                    <td>AssertionError</td>
                    <td>Error</td>
                    <td>Error lanzado por una aserción fallida.</td>
                </tr>
                <tr>
                    <td>ParseError</td>
                    <td>ParseError</td>
                    <td>Error</td>
                    <td>Error de análisis, como un error de sintaxis.</td>
                </tr>
                <tr>
                    <td>TypeError</td>
                    <td>TypeError</td>
                    <td>Error</td>
                    <td>Error de tipo, p. ej., argumentos incorrectos en funciones.</td>
                </tr>
                <tr>
                    <td>ArgumentCountError</td>
                    <td>ArgumentCountError</td>
                    <td>TypeError</td>
                    <td>Número incorrecto de argumentos en la llamada de función.</td>
                </tr>
                <tr>
                    <td>UnhandledMatchError</td>
                    <td>UnhandledMatchError</td>
                    <td>Error</td>
                    <td>Error en expresión `match` sin caso coincidente (PHP 8+).</td>
                </tr>
                <tr>
                    <td>CompileError</td>
                    <td>CompileError</td>
                    <td>Error</td>
                    <td>Error en tiempo de compilación (raro en ejecución).</td>
                </tr>
                <tr>
                    <td>mysqli_sql_exception</td>
                    <td>mysqli_sql_exception</td>
                    <td>Exception</td>
                    <td>Excepciones específicas de MySQLi para errores SQL.</td>
                </tr>
                <tr>
                    <td>SoapFault</td>
                    <td>SoapFault</td>
                    <td>Exception</td>
                    <td>Excepciones en la extensión SOAP para errores de comunicación.</td>
                </tr>
                <tr>
                    <td>IntlException</td>
                    <td>IntlException</td>
                    <td>Exception</td>
                    <td>Errores en la extensión Intl para internacionalización.</td>
                </tr>
            </tbody>
        </table>

    </body>
</html>