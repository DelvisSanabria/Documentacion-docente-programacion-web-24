<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Funciones y Recursividad en PHP</title>
    </head>
    <body>
        <nav style="display: flex; gap: 15px; width: 100%; justify-content: center; font-size: 1.25rem;">
            <a href="index.html">Inicio</a>
            <a href="Funciones_y_Recursividad.php">Funciones y Recursividad</a>
            <a href="Loops.php">Loops</a>
            <a href="Metodos_Strings_y_Array.php">Metodos de Strings y Array</a>
            <a href="AsocArrays_Objetos_y_Clases.php">Asociative Arrays, Objetos y Clases</a>
            <a href="Try_Catch.php">Try Catch</a>
            <a href="Conectando_Base_de_Datos.php">Conectando Base de Datos</a>
            <a href="Modularizacion.php">Modularizacion</a>
        </nav>

        <h1>Funciones</h1>
        <?php
            // Funciones

            // Ejemplo 1: Funcion sin parametros
            function sumar(){
                $var1 = 10;
                $var2 = 20;
                $resultado = $var1 + $var2;
                return "$var1 + $var2 = $resultado";
            };


            // Ejemplo 2: Funcion con parametros
            function restar($num1, $num2){
                $resultado = $num1 - $num2;
                return "$num1 - $num2 = $resultado";
            };


            // Ejemplo 3: Funcion con parametros que retorna una etiqueta HTML con informacion
            function imprimir($titulo, $info, $footer){
                return "
                    <div>
                        <h2>$titulo</h2>
                        <p>$info 1</p>
                        <p>$info 2</p>
                        <p>$info 3</p>
                        <p>$info 4</p>
                        <h3>$footer</h3>
                    </div>
                ";
            };
        ?>

        <!-- Llamando las funciones -->
        <p>La funcion "sumar" retorna lo siguiente: <?php echo sumar(); ?></p>
        <p>La funcion "restar" rertorna lo siguiente al enviarle los parametros 100 y 25: <?php echo restar(100, 25); ?></p>
        <p>La funcion "imprimir" retorna lo siguiente al enviarle los parametros "Tema", "contenido", "27/08/2024": <?php echo imprimir("Tema", "contenido", "27/08/2024"); ?></p>

        <hr>
        <h1>Recursividad</h1>
        <?php
            // Recursividad

            // Se declaran las funciones que se van a llamar recursivamente
            function nombres($nombre){
                return "<td>$nombre</td>";
            };
            
            function apellidos($apellidos){
                return "<td>$apellidos</td>";
            }

            // Se declara la funcion principal que hara uso de la recursividad para
            // llamar las funciones base (nombres y apellidos)
            function plantilla($nombre, $apellidos){
                return "<tr>" . nombres($nombre) . apellidos($apellidos) . "</tr>";
            }

            // Se crea una funcion extra que retorna una tabla con un encabezado y las filas se cargaran con el llamado de
            // la funcion "plantilla" que a su vez llama a las funciones base "nombres" y "apellidos"
            function tabla(){
                return "
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                            </tr>
                        </thead>
                        " . plantilla("Guillermo", "Gonzalez") . "
                        " . plantilla("Diego", "Rodriguez") . "
                        " . plantilla("Victor", "Perez") . "
                        " . plantilla("Yaneisis", "Yaguara") . "
                    </table>
                ";
            }
        ?>

        <!-- Llamando la funcion principal -->
        <section>
            <?php echo tabla(); ?>
        </section>
    </body>
</html>