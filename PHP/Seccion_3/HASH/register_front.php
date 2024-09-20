<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Register con Hash</title>
    </head>
    <body>
        <h1>Registro de usuario</h1>
        <form action="register_back.php" method="POST">

            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre">

            <label for="apellido">Apellido:</label>
            <input type="text" name="apellido">

            <label for="edad">Edad:</label>
            <input type="number" name="edad">

            <label for="correo">Correo:</label>
            <input type="email" name="correo">

            <label for="telefono">Telefono:</label>
            <input type="text" name="telefono">

            <label for="url_foto">URL de la foto:</label>
            <input type="text" name="url_foto">

            <label for="clave">Contraseña:</label>
            <input type="password" name="clave">

            <input type="submit" value="Registrar">
        </form>
    </body>
</html>