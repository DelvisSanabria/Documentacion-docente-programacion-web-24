<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Modularizacion en PHP</title>
    </head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: darkgray;
            font-family: Arial;
            min-height: 100vh;
        }

        main{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
    </style>
    <body>
        <!-- 
            La modularizacion es PHP nos permite reutilizar bloques de codigo como componentes de una interfaz de usuario.

            Dispone de 2 palabras reservadas:
                - include: Nos permite incluir un archivo.
                - require: Nos permite requerir un archivo chitico.

            ¿En se que diferencian?
                - include: busca un archivo y lo incluye, pero si este archivo no se encuentra no lo incluye y el proceso no se detiene.
                - require: busca un archivo y lo incluye, pero si este archivo no se encuentra el proceso se detiene.
            
            Este ultimo es mas utilizado para archivos criticos, como conexiones a bases de datos, encriptaciones, etc..,
            mientras que include es para archivos que no son criticos, como barras de navegacion, menus, pies de pagina, etc..
        -->
            <?php include "./Modulos/Componentes/NavBar.php"; ?>

            <main>
                <h1>Modularizacion en PHP</h1>
                <a href="./Modulos/CRUD/GET_estudiantes.php">Ver estudiantes</a>
                <a href="./Modulos/CRUD/POST_estudiantes.php">Registrar estudiante</a>
                <a href="./Modulos/CRUD/DELETe_estudiantes.php">Eliminar estudiante</a>
                <a href="./Modulos/CRUD/PUT_estudiantes.php">Editar estudiante</a>
            </main>
            
            <?php include "./Modulos/Componentes/Footer.php"; ?>
    </body>
</html>