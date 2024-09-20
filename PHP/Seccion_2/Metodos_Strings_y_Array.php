<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Metodos de Strings y Array en PHP</title>
    </head>
    <body style="background-color: lightgray; font-family: Arial, sans-serif;">
        <nav style="display: flex; gap: 15px; width: 100%; justify-content: center; font-size: 1.25rem;">
            <a href="Funciones_y_Recursividad.php">Funciones y Recursividad</a>
            <a href="Loops.php">Loops</a>
            <a href="Metodos_Strings_y_Array.php">Metodos de Strings y Array</a>
            <a href="AsocArrays_Objetos_y_Clases.php">Asociative Arrays, Objetos y Clases</a>
            <a href="Try_Catch.php">Try Catch</a>
            <a href="Conectando_Base_de_Datos.php">Conectando Base de Datos</a>
            <a href="Modularizacion.php">Modularizacion</a>
        </nav>
        <h1>Metodos o Funciones de Strings y Arrays</h1>
        <hr>
        <h2>Manipulacion de Strings</h2>
        <?php
            $test = "hola, esto es un ejemplo de manipulacion de strings en PHP.";
            echo "<p><strong>La cadena a trabajar es:</strong> $test</p>";        
        
            // Manipulacion de Strings
            $longitud = strlen($test); // Permite saber la longitud de una cadena de caracteres.
            echo "<p><strong>La longitud de la cadena es:</strong> $longitud y se obtiene de la funcion strlen()</p>";

            $mayusculas = strtoupper($test); // Convierte la cadena a mayusculas.
            echo "<p><strong>La cadena en mayusculas es:</strong> $mayusculas y se obtiene de la funcion strtoupper()</p>";

            $minusculas = strtolower($test); // Convierte la cadena a minusculas.
            echo "<p><strong>La cadena en minusculas es:</strong> $minusculas y se obtiene de la funcion strtolower()</p>";

            $capitalizado  = ucfirst($test); // Convierte la primera letra de la cadena en mayuscula.
            echo "<p><strong>La cadena con la primera letra en mayuscula es:</strong> $capitalizado y se obtiene de la funcion ucfirst()</p>";

            $capitalizado2 = ucwords($test); // Convierte la primera letra de cada palabra en mayuscula.
            echo "<p><strong>La cadena con la primera letra de cada palabra en mayuscula es:</strong> $capitalizado2 y se obtiene de la funcion ucwords()</p>";
                            // Cadena, inicio, longitud
            $testxtraida = substr($test, 6, 18); // Extrae una parte de la cadena.
            echo "<p><strong>La cadena extraida es:</strong> $testxtraida | y se obtiene de la funcion substr()</p>";

            $posicion = strpos($test, "manipulacion"); // Busca una cadena en la cadena.
            echo "<p><strong>La cadena 'manipulacion' se encuentra en la posicion:</strong> $posicion | y se obtiene de la funcion strpos()</p>";

            $reemplazar = str_replace("PHP", "vivo", $test); // Reemplaza una cadena por otra.
            echo "<p><strong>La cadena reemplazada es:</strong> $reemplazar y se obtiene de la funcion str_replace()</p>";

            // Este metodo lo usaremos mas adelante con un metodo de Array.
            $arrayDeStrings = explode(" ", $test); // Divide un string en un array.
            // echo var_dump($arrayDeStrings); // Muestra informacion acerca de una variable.

            // Imprimimos cada palabra en un parrafo usando un foreach.
            foreach($arrayDeStrings as $palabra) {
                echo "<p>$palabra</p>";
            }

            echo implode(" ", $arrayDeStrings); // Unifica un array en un string.
        ?>

        <hr>
        <h2>Manipulacion de Arrays</h2>
        <?php
            $frutas = ["manzana", "pera", "naranja", "sandia"];
            $frutas2 = ["uva", "fresa", "banana"];
            $edades = [25, 10, 35, 5, 45, 30, 15, 20];

            // Mostramos los array con los que vamos a trabajar
            echo "<p>El array 1 es: " . implode(" / ", $frutas) . "</p>";
            echo "<p>El array 2 es: " . implode(" / ", $frutas2) . "</p>";
            echo "<p>El array 3 es: " . implode(" / ", $edades) . "</p>";


            // Agregar elementos a un array
            array_push($frutas, "platano"); // Agrega un elemento al final del array.
            echo "<p>El array 1 con un nuevo elemento es: " . implode(" / ", $frutas) . "</p>";

            // Eliminar elementos de un array
            array_pop($frutas); // Elimina el ultimo elemento del array.
            echo "<p>El array 1 sin el ultimo elemento es: " . implode(" / ", $frutas) . "</p>";

            $totalElementos = count($frutas); // Permite saber cuantos elementos tiene un array.
            echo "<p>El array 1 tiene $totalElementos elementos. Esto se obtiene con la funcion count()</p>";

            // Otra forma seria utilizar el metodo count() directamente en el echo
            echo "<p>El array 2 tiene " . count($frutas2) . " elementos. Esto se obtiene con la funcion count()</p>"; 
            echo "<p>El array 3 tiene " . count($edades) . " elementos. Esto se obtiene con la funcion count()</p>"; 


            $primerElemento = reset($frutas); // Obtiene el primer elemento del array.
            $ultimoElemento = end($frutas); // Obtiene el ultimo elemento del array.
            $elementoEspecifico = $edades[3]; // Obtiene el elemento especifico del array.

            echo "<p>El primer elemento del array 'frutas' es: $primerElemento y el ultimo es: $ultimoElemento. Esto se obtiene con las funciones reset() para el primer elemento y end() para el ultimo.</p>";
            echo "<p>El elemento en la posicion 3 del array 'edades' es: $elementoEspecifico. Esto se obtiene accediendo directamente al indice del array, es decir, '$"."edades[3]'</p>";


            // Verificar si existe un elemento en un array
            //                        buqueda, array_a_buscar
            $existeElemento = in_array("uva", $frutas2); // Verifica si existe un elemento especifico en un array.
            echo "¿En el array 'frutas2' la uva existe? ".(($existeElemento) ? "<p>Si existe</p>" : "<p>No existe</p>");
            echo "<p>Esto se obtiene con la funcion in_array()</p>";


            $arrayInvertido = array_reverse($frutas); // Revierte el orden de los elementos en el array
            echo "<p>El array 'frutas1' invertido es: ".implode(" / ",$arrayInvertido)." y se obtiene con la funcion array_reverse()</p>";

            //                           array1, array2, array3...
            $arrayCombinado = array_merge($frutas, $frutas2); // Combina dos o mas arrays en uno solo.
            echo "<p>El array resultante de la combinacion de 'frutas1' y 'frutas2' es: ".implode(" / ",$arrayCombinado)." y se obtiene con la funcion array_merge()</p>";
            
                            //    array_slice(array, inicio, cantidad de elementos)
            $elementosExtraidos = array_slice($arrayCombinado, 2, 4); // Extrae los elementos de un array. 
            echo "<p>Los elementos extraidos son: ".implode(" / ",$elementosExtraidos)." y se obtiene con la funcion array_slice()</p>";

            // Ordenar un array
            echo "<p>El array 'edades' sin ordenar es: ".implode(" / ",$edades)."</p>";
            sort($edades); // Ordena un array de menor a mayor.
            echo "<p>El array 'edades' ordenado de menor a mayor es: ".implode(" / ",$edades)." y se obtiene con la funcion sort()</p>";

            // Ordenar un array de mayor a menor
            rsort($edades); // Ordena un array de mayor a menor.
            echo "<p>El array 'edades' ordenado de mayor a menor es: ".implode(" / ",$edades)." y se obtiene con la funcion rsort()</p>";

            // filtrar un array
            $filtrado = array_filter($edades, function($edad) {
                return $edad > 20;
            }); // Filtra un array segun una condicion.

            echo "<p>El array 'edades' filtrado es: ".implode(" / ",$filtrado)." y se obtiene con la funcion array_filter()</p>";


            // relleando un array
            $testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            // array_fill(inicio, cantidad, valor)
            $testArray = array_fill(0, 10, "N"); // Rellena un array con un valor especifico.
            echo "<p>El array 'testArray' rellenado es: ".implode(" / ",$testArray)." y se obtiene con la funcion array_fill()</p>";


            // Realizando una suma recursiva con los elementos de un array
            $suma = array_reduce($edades, function($acumulado, $valor) {
                return $acumulado + $valor;
            }); // Reduce un array a un solo valor.
            echo "<p>La suma de los elementos del array 'edades' es: $suma y se obtiene con la funcion array_reduce()</p>";
        ?>
        <hr>

        <h4>Mas metodos de strings <a href="https://www.php.net/manual/es/ref.strings.php" target="_blank"><strong>aqui</strong></a></h4>
        <h4>Mas metodos de arrays <a href="https://www.php.net/manual/es/ref.array.php" target="_blank"><strong>aqui</strong></a></h4>
    </body>
</html>