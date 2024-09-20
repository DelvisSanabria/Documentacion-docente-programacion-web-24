<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h3>login Seguro</h3>

        <form action="login_back_seguro.php" method="POST">

            <label for="correo">correo</label>
            <input type="text" name="correo" id="correo">

            <label for="clave">clave</label>
            <input type="password" name="clave" id="clave">

            <input type="submit" value="enviar">

        </form>

        <br><hr><br>

        <h3>login Inseguro</h3>
        <form action="login_back_inseguro.php" method="POST">

            <label for="correo">correo</label>
            <input type="text" name="correo" id="correo">

            <label for="clave">clave</label>
            <input type="password" name="clave" id="clave">

            <input type="submit" value="enviar">

        </form>
    </body>
</html>