<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Arrays Asociativos, Objetos y Clases en PHP</title>
    </head>
    <body style="background-color: lightgray; font-family: Arial, sans-serif;">
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
        <hr>
        <h2>Arrays Asociativos</h2>
        <!-- 
            ¿Qué es un Array Asociativo?
            Un Array asociativo es una coleccion de pares clave/valor, muy común en PHP,
            que se asemejan a los objetos de JavaScript 
        -->
        <?php
            $auto = array(
                // clave => valor
                "marca" => "Ford",
                "modelo" => "Mustang",
                "anio" => 1969,
                "color" => "rojo",
                "nuevo" => "false"
            );

            echo ("El auto es un ".$auto["marca"]." modelo ".$auto["modelo"].", del año ".$auto["anio"].", de color ".$auto["color"]);

            echo ("<h4>Arrays de Arrays Asociativos</h4>");
            // Array de arrays asociativos
            $autos = array(
                [
                    "marca" => "Chevrolet",
                    "modelo" => "camaro",
                    "anio" => 1967,
                    "color" => "negro",
                    "nuevo" => "false"
                ],
                [
                    "marca" => "Lamborghini",
                    "modelo" => "Diablo",
                    "anio" => 1999,
                    "color" => "amarillo",
                    "nuevo" => "true"
                ],
                [
                    "marca" => "Nissan",
                    "modelo" => "Sentra",
                    "anio" => 2015,
                    "color" => "azul",
                    "nuevo" => "true"
                ],
                [
                    "marca" => "Toyota",
                    "modelo" => "Yaris",
                    "anio" => 2010,
                    "color" => "gris",
                    "nuevo" => "false"
                ],
                [
                    "marca" => "Volkswagen",
                    "modelo" => "Golf",
                    "anio" => 2019,
                    "color" => "blanco",
                    "nuevo" => "true"
                ],
                [
                    "marca" => "Renault",
                    "modelo" => "Clio",
                    "anio" => 2020,
                    "color" => "negro",
                    "nuevo" => "true"
                ],
                [
                    "marca" => "Subaru",
                    "modelo" => "Impreza",
                    "anio" => 2021,
                    "color" => "gris",
                    "nuevo" => "true"
                ],
                [
                    "marca" => "Ferrari",
                    "modelo" => "Testarrossa",
                    "anio" => 1996,
                    "color" => "rojo",
                    "nuevo" => "false"
                ]
            );


            // En este caso el array asociativo $autos es un array de arrays asociativos.
            // Para poder acceder a los valores de cada auto, tendremos que hacer lo siguiente:
            // echo ("<p>El auto es un ".$autos[0]["marca"]." modelo ".$autos[0]["modelo"].", del año ".$autos[0]["anio"].", de color ".$autos[0]["color"]."</p>");
            // echo ("<p>El auto es un ".$autos[1]["marca"]." modelo ".$autos[1]["modelo"].", del año ".$autos[1]["anio"].", de color ".$autos[1]["color"]."</p>");
            // echo ("<p>El auto es un ".$autos[2]["marca"]." modelo ".$autos[2]["modelo"].", del año ".$autos[2]["anio"].", de color ".$autos[2]["color"]."</p>");
            // echo ("<p>El auto es un ".$autos[3]["marca"]." modelo ".$autos[3]["modelo"].", del año ".$autos[3]["anio"].", de color ".$autos[3]["color"]."</p>");


            // Iteramos el array de arrays llamado autos para crear una tabla con la informacion de cada auto.
            echo ("<table style='width: 100%; border-collapse: collapse;'>
                    <tr style='background-color: lightblue;'>
                        <th style='border: 1px solid black;'>Marca</th>
                        <th style='border: 1px solid black;'>Modelo</th>
                        <th style='border: 1px solid black;'>Año</th>
                        <th style='border: 1px solid black;'>Color</th>
                        <th style='border: 1px solid black;'>Nuevo</th>
                    </tr>");
            foreach($autos as $auto) {
                echo ("<tr style='background-color: lightgray;'>
                        <td style='border: 1px solid black;'>".$auto["marca"]."</td>
                        <td style='border: 1px solid black;'>".$auto["modelo"]."</td>
                        <td style='border: 1px solid black;'>".$auto["anio"]."</td>
                        <td style='border: 1px solid black;'>".$auto["color"]."</td>
                        <td style='border: 1px solid black;'>".$auto["nuevo"]."</td>
                    </tr>");
            }
            echo ("</table>");




            // Los arrays asociativos son muy comunes en PHP, por eso poseen una serie de metodos que nos ayudan a trabajar con ellos.
            echo ("<h3>Metodos de Arrays Asociativos</h3>");

            // array_key_exists(): Comprueba si una clave existe en un array asociativo.

            // Ejemplo 1:
            if (array_key_exists("kilometraje", $auto)) {
                echo ("<p>La clave 'kilometraje' existe en el array asociativo 'auto'.</p>");
            }else{
                echo ("<p>La clave 'kilometraje' no existe en el array asociativo 'auto'.</p>");
            };
            
            // Ejemplo 2:
            if (array_key_exists("marca", $auto)) {
                echo ("<p>La clave 'marca' existe en el array asociativo 'auto'.</p>");
            }else{
                echo ("<p>La clave 'marca' no existe en el array asociativo 'auto'.</p>");
            };



            // array_keys(): Devuelve todas las claves de un array asociativo.

            // Ejemplo 1:
            $keysArrayAuto = array_keys($auto);
            echo("Las claves del array asociativo 'auto' son: ".implode(" / ", $keysArrayAuto));

            // Ejemplo 2 (Extrayendo las claves del array de arrays asociativos):
            $keysArrayAutos = array_keys($autos);
            // en este caso como se trata de un array de arrays asociativos, la función array_keys() 
            // nos devuelve una lista de indices numericos.
            echo("<br>Las claves del array de arrays asociativos 'autos' son: ".implode(" / ", $keysArrayAutos));

            // Para extraer las keys de un indice en particular del array de arrays asociativos podemos hacer lo siguiente:
            $keysArrayAutos2 = array_keys($autos[7]);
            echo("<br>Las claves del indice 7 del array de arrays asociativos 'autos' son: ".implode(" / ", $keysArrayAutos2));





            // array_values(): Devuelve todos los valores de un array asociativo.

            // Ejemplo 1:
            $valuesArrayAuto = array_values($auto);
            echo("<p>Los valores del array asociativo 'auto' son: ".implode(" / ", $valuesArrayAuto)."</p>");

            // Ejemplo 2:
            $valuesArrayAutos = array_values($autos);
            // En este caso como se trata de un array de arrays asociativos, la función array_values()
            // Nos devolvera una lista de arrays que no se podra imprimir directamente.
            // echo("<br>Los valores del array de arrays asociativos 'autos' son: ".implode(" / ", $valuesArrayAutos));
            
            
            // si deseamos extraer los valores de cada indice del array de arrays asociativos,
            // necesitamos extraerlos con la ayuda de foreach de la siguiente manera:
            $contador = 0;
            echo ("<ul>");
            foreach ($autos as $autoActual) {
                $valuesArrayAutos2 = array_values($autoActual);
                echo("<li>Los valores del indice ".$contador." del array de arrays asociativos 'autos' son: ".implode(" / ", $valuesArrayAutos2))."</li>";
                $contador++;
            }
            echo ("</ul>");





            // array_merge(): Une dos o más arrays asociativos.
            // En caso de que una clave(propiedad) exista en el array asociativo, el valor de esta se reemplaza 
            // por el nuevo valor que proviene del array asociativo a combinar.

            // En este ejemplo creamos un array asociativo llamado "auto2" que se unira al array asociativo "auto"        
            
            $auto2 = array(
                "Marca" => "Mitsubishi",
                "modelo" => "Lancer",
                "anio" => 2015,
                "color" => "azul",
                "nuevo" => "false",
                "pasajeros" => 5,
                "kilometraje" => 100000,
                "transmision" => "manual",
                "GPS" => "true",
                "aire_acondicionado" => "true"
            );

            $auto3 = array_merge($auto2, $auto);
            echo("<p>El array 'auto3' es: ".implode(" / ", $auto3)."</p>");
            

            // Como la unica key que existe en ambos array es la 'marca' y se diferencia con mayuscula no se reemplaza.
            echo("<p>La key 'Marca' del array 'auto3' es: ".$auto3["Marca"]." y la key 'marca' del array 'auto3' es: ".$auto3["marca"]."</p>");
        ?>

        <hr>
        <h2>Objetos Genericos</h2>
        <?php
            // En PHP podemos crear objetos y clases de la siguiente manera:
            $persona = new stdClass(); // stdClass es un constructor para crear objetos genericos.

            // Añadimos las propiedades al objeto persona.
            $persona -> nombre = "Diego";
            $persona -> apellido = "Rodriguez";
            $persona -> edad = 28;
            $persona -> cedula = 12345678;
            $persona -> profesion = "Programador";

            echo("<p>Hola me llamo ".$persona->nombre." ".$persona->apellido." y tengo ".$persona->edad." años.</p>");
        ?>

        <hr>
        <h2>Objetos, Clases y Metodos de Objetos</h2>
        <?php
            // Las clases son como plantillas que nos permiten crear objetos en base a la estructura definida en ellas.
            class Automovil{
                // Atributos: son variables que se declaran dentro de la clase
                // Public: se utiliza al declarar los atributos y métodos de la clase para que puedan ser accedidos desde cualquier parte del código.

                public $marca;
                public $modelo;
                public $annio;

                // Constructor: Se utiliza para inicializar los atributos de la clase.
                public function __construct($marca, $modelo, $annio){
                    $this->marca = $marca;
                    $this->modelo = $modelo;
                    $this->annio = $annio;
                }

                // Metodos: son bloques de codigo que permiten que la clase realice diferentes acciones.
                // Son identicas a las funciones de JavaScript.
                public function obtenerMarca(){
                    return $this->marca;
                }

                public function obtenerModelo(){
                    return $this->modelo;
                }

                public function obtenerAnnio(){
                    return $this->annio;
                }

                public function avanzar(){
                    echo "<p>El auto ". $this->marca." " .$this->modelo." esta avanzando</p>";
                }

                public function detener(){
                    echo "<p>El auto ". $this->marca." " .$this->modelo." esta deteniendo</p>";
                }
            };

            $TCorola = new Automovil("Toyota", "Corolla", 2023);
            $NSentra = new Automovil("Nissan", "Sentra", 2022);
            $LGallardo = new Automovil("Lamborghini", "Gallardo", 2021);


            // Mostrando los datos que se asignaron a cada objeto al instanciar la clase "Automovil".
            echo("<p>El auto es un ".$TCorola->obtenerMarca()." modelo ".$TCorola->obtenerModelo()." del año ".$TCorola->obtenerAnnio()."</p>");
            echo("<p>El auto es un ".$NSentra->obtenerMarca()." modelo ".$NSentra->obtenerModelo()." del año ".$NSentra->obtenerAnnio()."</p>");
            echo("<p>El auto es un ".$LGallardo->obtenerMarca()." modelo ".$LGallardo->obtenerModelo()." del año ".$LGallardo->obtenerAnnio()."</p>");


            // Ejecutamos los  metodos que todos los objetos creados por la clase Automovil podran hacer.
            echo("<p>".$TCorola->avanzar()."</p>");
            echo("<p>".$TCorola->detener()."</p>");

            echo("<p>".$NSentra->avanzar()."</p>");
            echo("<p>".$NSentra->detener()."</p>");
            
            echo("<p>".$LGallardo->avanzar()."</p>");
            echo("<p>".$LGallardo->detener()."</p>");
        ?>
    </body>
</html>