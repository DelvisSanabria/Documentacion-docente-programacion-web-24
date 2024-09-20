<?php $variable = 3; $edad = 21; $color = "verde";?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Codicionales en PHP</title>
    </head>
    <body>
        <nav style="display: flex; gap: 15px; width: 100%; justify-content: center; font-size: 1.25rem;">
            <a href="index.html">Home</a>
            <a href="Comentarios.php">Comentarios</a>
            <a href="Variables_y_Tipos_de_Datos.php">Variables</a>
            <a href="Operadores.php">Operadores</a>
            <a href="Condicionales.php">Condicionales</a>
        </nav>

        <h1>Condicionales en PHP</h1>
        <hr>
        <h3>if-elseif-else</h3>
        <?php 
            //if-elseif-else
            if($variable == 1){
                echo("<p id='uno' style='color:blue'>La variable es igual a 1</p>");
            }elseif($variable == 2){
                echo("<p id='dos' style='color:red'>La variable es igual a 2</p>");
            }elseif($variable == 3){
                echo("<p id='tres' style='color:green'>La variable es igual a 3</p>");
            }else{
                echo("<p id='cuatro' style='color:purple'>La variable no es igual a 1, 2 o 3</p>");
            };
        ?>

        <hr>
        <h3>Operador Ternario</h3>
        <p> La persona <?php echo($edad >= 18) ? "es mayor de edad" : "es menor de edad"; ?></p>


        <hr>
        <h3>Switch-Case</h3>
        <div>
            <?php
                // Switch-Case
                switch($color){
                    case "azul":
                        echo("<h1>El color es azul</h1>");
                        break;
                    case "rojo":
                        echo("<p>El color es rojo</p>");
                        break;
                    case "verde":
                        echo("<span>El color es verde</span>");
                        break;
                    default:
                        echo("<error>El color no es azul, rojo o verde</error>");
                }
            ?>
        </div>
    </body>
</html>