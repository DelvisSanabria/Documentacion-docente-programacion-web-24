<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Operadores en PHP</title>
    </head>
    <body>
        <nav style="display: flex; gap: 15px; width: 100%; justify-content: center; font-size: 1.25rem;">
            <a href="index.html">Home</a>
            <a href="Comentarios.php">Comentarios</a>
            <a href="Variables_y_Tipos_de_Datos.php">Variables</a>
            <a href="Operadores.php">Operadores</a>
            <a href="Condicionales.php">Condicionales</a>
        </nav>

        <h1>Operadores en PHP</h1>
        <hr>
        <h3>Operadores de Asignación</h3>
        <?php
            // Operadores de Asignación
            $num1 = 10;
            $num2 = 5;

            echo ("<p>La variable 1 tiene el valor: $num1</p>");
            echo ("<p>La variable 2 tiene el valor: $num2</p>");
            echo ("<p>La suma de las dos variables es: ".($num1 + $num2)."</p>");


            // Concatenar y asignar: Este operador se usa para concatenar un nuevo valor con el valor existente.
            $num1 .= $num2;
            echo("<p>Concatenacion y asignacion: $num1</p>");



            // Reasignamos las variables al valor original. 
            $num1 = 10;
            $num2 = 20;


            // Sumar y asignar: Este operador se usa para sumar  y asignar un nuevo valor.
            $num1 += $num2; // Es es equivalente a $num1 = $num1 + $num2
            echo("<p>Suma y asignacion: $num1</p>");


            // Reasignamos las variables al valor original.
            $num1 = 10;
            $num2 = 5;
            
            // Restar y asignar: Este operador se usa para restar y asignar un nuevo valor.
            $num1 -= $num2;
            echo("<p>Resta y asignacion: $num1</p>"); // Es es equivalente a $num1 = $num1 - $num2



            // Reasignamos las variables al valor original.
            $num1 = 10;
            $num2 = 20;


            // Multiplicar y asignar: Este operador se usa para multiplicar y asignar un nuevo valor.
            $num1 *= $num2; // Es es equivalente a $num1 = $num1 * $num2
            echo("<p>Multiplicacion y asignacion: $num1</p>");



            // Reasignamos las variables al valor original.
            $num1 = 10;
            $num2 = 20;

            // Dividir y asignar: Este operador se usa para dividir y asignar un nuevo valor.
            $num1 /= $num2; // Es es equivalente a $num1 = $num1 / $num2
            echo("<p>Division y asignacion: $num1</p>");



            // Reasignamos las variables al valor original.
            $num1 = 10;
            $num2 = 20;

            // Modulo y asignar: Este operador se usa para obtener el resto de una división y asignar un nuevo valor.
            $num1 %= $num2; // Es es equivalente a $num1 = $num1 % $num2
            echo("<p>Modulo y asignacion: $num1</p>");
            ?>



        <hr>
        <h3>Operadores de Aritmeticos</h3>
        <?php
            // Operadores de Aritmeticos
            // Redeclaramos las variables
            $num1 = 100;
            $num2 = 50;

            $suma = $num1 + $num2; // Este operador se usa para sumar.
            $resta = $num1 - $num2; // Este operador se usa para restar.
            $multiplicacion = $num1 * $num2; // Este operador se usa para multiplicar.
            $division = $num1 / $num2; // Este operador se usa para dividir.
            $modulo = $num1 % $num2; // Este operador se usa para modulo.


            // Mostramos la salidas correspondientes
            echo ("<p>Las variables a operar son: $"."num1: $num1"." y $"."num2: $num2</p>");

            echo("<p>Suma: $suma</p>");
            echo("<p>Resta: $resta</p>");
            echo("<p>Multiplicacion: $multiplicacion</p>");
            echo("<p>Division: $division</p>");
            echo("<p>Modulo o Residuo: $modulo</p>");
        ?>

        <hr>
        <h3>Operadores Comparativos</h3>
        <?php
            $igual = $num1 == $num2; // Este operador se usa para comparar
            $exactamenteIgual = $num1 === $num2; // Este operador se usa para comparar valor y tipo de dato.
            $diferente = $num1 != $num2; // Este operador se usa para comparar si es diferente
            $estrictamenteDiferente = $num1 !== $num2; // Este operador se usa para comparar si los valores y tipos de datos son estrictamente diferentes.
            $mayor = $num1 > $num2; // Este operador se usa para comparar si es mayor
            $menor = $num1 < $num2; // Este operador se usa para comparar si es menor
            $mayorIgual = $num1 >= $num2; // Este operador se usa para comparar si es mayor o igual
            $menorIgual = $num1 <= $num2; // Este operador se usa para comparar si es menor o igual

            // Mostramos la salidas correspondientes
            echo ("<p>Las variables a comparar son: $"."num1: $num1"." y $"."num2: $num2</p>");
            echo ("<p>Operador ==: ".($igual ? "True" : "False")."</p>");
            echo ("<p>Operador ===: ".($exactamenteIgual ? "True" : "False")."</p>");
            echo ("<p>Operador !=: ".($diferente ? "True" : "False")."</p>");
            echo ("<p>Operador !==: ".($estrictamenteDiferente ? "True" : "False")."</p>");
            echo ("<p>Operador >: ".($mayor ? "True" : "False")."</p>");
            echo ("<p>Operador <: ".($menor ? "True" : "False")."</p>");
            echo ("<p>Operador >=: ".($mayorIgual ? "True" : "False")."</p>");
            echo ("<p>Operador <=: ".($menorIgual ? "True" : "False")."</p>");
        ?>

        <hr>
        <h3>Operadores Logicos</h3>
        <?php
            // Asignamos las variables
            $var1 = true;
            $var2 = false;

            $and = $var1 && $var2; // Este operador se usa para comparar si ambos son verdaderos
            $or = $var2 || $var1; // Este operador se usa para comparar si alguno es verdadero
            $not = !$var1; // Este operador se usa para comparar si es falso, en otras palabras para negar un valor.

            // Mostramos la salidas correspondientes
            echo ("<p>Las variables a comparar son: $"."var1: true"." y $"."var2: false</p>");
            echo ("<p>Operador &&: ".($and ? "True" : "False")."</p>");
            echo ("<p>Operador ||: ".($or ? "True" : "False")."</p>");
            echo ("<p>Operador !: ".($not ? "True" : "False")."</p>");
        ?>
    </body>
</html>