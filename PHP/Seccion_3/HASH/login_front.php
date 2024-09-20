<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registro con Hash</title>
    </head>
    <body>
        <form action="login_back.php" method="POST">
            <label for="correo">Correo</label>
            <input type="text" name="correo" required>

            <label for="clave">Contraseña</label>
            <input type="password" name="clave" id="clave" required>

            <input type="submit" value="Iniciar sesion">
        </form>
    </body>
</html>