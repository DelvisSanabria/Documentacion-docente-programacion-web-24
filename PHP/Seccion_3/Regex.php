<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Regex</title>
    </head>
    <body>
        <h1>Expresiones Regulares</h1>
        <?php
            $oracion1 = "El gato de mi vecino es blanco y esta sobre el sofa blanco acostado, durmiendo.";
            $oracion2 = "Hola, mi nombre es Diego, y esto es una clase de python, donde aprendemos sobre regex";
            $oracion3 = "Un online usuario inline esta anline intentando enline conectarse unline aqui";
        ?>
        <p>Oracion a evaluar: El gato de mi vecino es blanco y esta sobre el sofa blanco acostado, durmiendo.</p>
        <p>Oracion a evaluar: Hola, mi nombre es Diego, y esto es una clase de python, donde aprendemos sobre hooks</p>
        <p>Oracion a evaluar: El usuario esta online inline anline enline unline</p>
        <br>
        
        <?php
            /*
                Coincidencias Basicas:
                .       - Cualquier Caracter, excepto nueva linea
                \       - Indica que el siguiente caracter se debe tratar de manera especial o "escaparse".
                \d      - Cualquier Digito (0-9)
                \D      - No es un Digito (0-9)
                \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
                \W      - No es un Caracter de Palabra.
                \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
                \S      - No es un Espacio, Tab o nueva linea.

                Limites:
                \b      - Limite de Palabra
                \B      - No es un Limite de Palabra
                ^       - Inicio de una cadena de texto
                $       - Final de una cadena de texto

                Cuantificadores:
                *       - Coincide con 0 o más ocurrencias del patrón anterior.
                +       - Coincide con 1 o más ocurrencias del patrón anterior.
                ?       - Coincide con 0 o 1 ocurrencia del patrón anterior.
                {3}     - Numero Exacto.
                {3,4}   - Rango de Numeros (Minimo, Maximo).
                {,5}    - Rango de Numeros (Maximo) finito.
                {3,}    - Rango de Numeros (Minimo) hasta infinito.

                Conjuntos de Caracteres:
                []      - Caracteres dentro de los brackets
                [^ ]    - Caracteres que NO ESTAN dentro de los brackets

                Grupos:
                ( )     - Grupo
                |       - Uno u otro
            */


            // Buscar la palabra "blanco" en la oracion1
            $miRegex1 = "/blanco/";
            // Buscar la palabra "python" y "hooks" en la oracion2
            $miRegex2 = "/python|hooks/";

            // Buscar la palabra "online" en la oracion3
            $miRegex3 = "/..line/";

            // Utilizamos preg_match para verificar si la oraciones contienen la palabra buscada, en este caso "blanco"
            // Esta funcion devuelve un array con los resultados encontrados.

            // esta funcion recibe 3 parametros:
            // 1. El patron a buscar
            // 2. La cadena de texto a evaluar
            // 3. Un array opcional donde se guardaran los resultados encontrados
            if(preg_match($miRegex1, $oracion1, $resultado1)){
                echo "<p>Coincidencia encontrada: ".$resultado1[0]."</p>";
            }else{
                echo "<p>No se encontraron coincidencias</p>";
            }


            // Utilizamos prag_replace para reemplazar la palabra "python" por "php" y "hooks" por "regex" en la oracion2
            // Esta funcion devuelve un string con la cadena de texto modificada.

            // esta funcion recibe 3 parametros:
            // 1. El patron a buscar
            // 2. La cadena de texto de reemplazo
            // 3. La cadena de texto a evaluar
            $oracion2 = preg_replace($miRegex2, "php", $oracion2);
            $oracion2 = preg_replace($miRegex2, "regex", $oracion2);
            echo "<p>Oracion modificada: ".$oracion2."</p>";



            //  Utilizandomos preg_match_all() para buscar todas las coincidencias en la cadena de texto
            // Ademas retorna un array que contiene el total de coincidencias encontradas en la cadena de texto.
            
            // esta funcion recibe 3 parametros:
            // 1. El patron a buscar
            // 2. La cadena de texto a evaluar
            // 3. Una matriz opcional donde se guardaran los resultados encontrados
            if(preg_match_all($miRegex3, $oracion3, $resultados)){
                echo "<p>Coincidencias encontradas en la oracion 3: ".count($resultados[0])."</p>";
                echo "<p>Las coincidencias son: ";
                foreach($resultados[0] as $resultado){
                    echo $resultado." ";
                }
            }else{
                echo "<p>No se encontraron coincidencias</p>";
            }


            // Utilizamos preg_split() para dividir la cadena de texto en un array de strings en base a un patron de busqueda.
            // Esta funcion devuelve un array con los strings divididos.

            // esta funcion recibe 2 parametros:
            // 1. El patron a buscar
            // 2. La cadena de texto a evaluar

            $partesCadena1 = preg_split($miRegex1, $oracion1);

            // Utilizamos foreach para imprimir cada parte de la cadena de texto dividida.
            echo "<p>La cadena de texto dividida es: ";
            echo "<ul>";
                foreach($partesCadena1 as $parte){
                    echo "<li>".$parte."</li>";
                }
            echo "</ul>";


            // Hacemos lo mismo con la 3ra cadena de texto
            $partesCadena1 = preg_split($miRegex3, $oracion3);

            // Utilizamos foreach para imprimir cada parte de la cadena de texto dividida.
            echo "<p>La cadena de texto dividida es: ";
            echo "<ul>";
                foreach($partesCadena1 as $parte){
                    echo "<li>".$parte."</li>";
                }
            echo "</ul>";
        ?>
    </body>
</html>