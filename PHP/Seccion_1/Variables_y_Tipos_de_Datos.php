<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Variables y Tipos de Datos en PHP</title>
    </head>
    <body>
        <nav style="display: flex; gap: 15px; width: 100%; justify-content: center; font-size: 1.25rem;">
            <a href="index.html">Home</a>
            <a href="Comentarios.php">Comentarios</a>
            <a href="Variables_y_Tipos_de_Datos.php">Variables</a>
            <a href="Operadores.php">Operadores</a>
            <a href="Condicionales.php">Condicionales</a>
        </nav>

        <!-- Bloque de PHP -->
        <?php
            // Para crear una variable en PHP se utiliza el simbolo $ seguido del nombre de la variable y la asignación del valor
            $variable1 = "Hola Mundo"; # Variable de tipo de dato: string
            $variable2 = 7; # Variable de tipo de dato: integer
            $variable3 = 10.5; # Variable de tipo de dato: double
            $variable4 = true; # Variable de tipo de dato: boolean
            $variable5 = array(1,2,3,4,5,"6","7"); # Variable de tipo de dato: array
            // O tambien
            $variable6 = ["Hola", "Mundo"]; # Variable de tipo de dato: array
            $variable7 = NULL; # Variable de tipo de dato: NULL
        ?>

        <h1>Variables y Tipos de Datos en PHP</h1>
        <ul>
            <li>Variable 1: <?php echo "$variable1 - " .gettype($variable1) ?></li>
            <li>Variable 2: <?php echo "$variable2 - " .gettype($variable2) ?></li>
            <li>Variable 3: <?php echo "$variable3 - " .gettype($variable3) ?></li>
            <li>Variable 4: <?php echo "$variable4 - " .gettype($variable4) ?></li>
            <li>Variable 5: <?php echo var_dump($variable5) ?></li>
            <li>Variable 6: <?php echo var_dump($variable6) ?></li>
        </ul>

        <h3>Hay un total de <?php echo $variable2 ?> variables en este documento</h3>
    </body>
</html>