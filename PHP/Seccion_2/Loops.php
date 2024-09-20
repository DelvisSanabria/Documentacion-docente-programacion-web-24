<?php 
    $estilosParrafo = "background-color: black; color: white; width: 100px; height: 100px; display: flex; justify-content: center; align-items: center; font-size: 1rem; border-radius: 10px;";
    $estilosFor = "width: 100%; background-color: darkorange;display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; place-items: center;padding: 30px;";
    $estilosWhile = "width: 100%; background-color: darkgreen;display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; place-items: center;padding: 30px;";
    $estilosDoWhile = "width: 100%; background-color: darkblue;display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; place-items: center;padding: 30px;";
    $estilosForEach = "width: 100%; background-color: pink;display: flex; justify-content: center; align-items: center; padding: 30px;";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Looops en PHP</title>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            top: 0;
        }

        body {
            background-color: lightgray;
            font-family: Arial, sans-serif;
        }
    </style>
    <body>
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

        <h1>Loops</h1>

        <hr>

        <div>
            <h3 style="margin:35px 0px 35px 20px;">Loop For</h3>
            <div style="<?php echo $estilosFor?>" >
                <?php
                    // For
                    for($i = 1; $i <= 25; $i++){
                        echo "<p style='$estilosParrafo'>Numero: $i</p>";
                    };
                ?>
            </div>
        </div>

        <hr>

        <div>
            <h3 style="margin:35px 0px 35px 20px;">Loop While</h3>
            <div style="<?php echo $estilosWhile?>" >
                <?php
                    $i = 1;
                    // While
                    while($i <= 25){
                        echo "<p style='$estilosParrafo'>Numero: $i</p>";
                        $i++;
                    };
                ?>
            </div>
        </div>

        <hr>

        <div>
            <h3 style="margin:35px 0px 35px 20px;">Loop Do While</h3>
            <div style="<?php echo $estilosDoWhile?>" >
                <?php
                    // Se reasigna el valor de la variable ya que se utilizo en el loop anterior
                    $i = 1;

                    // Do While
                    do{
                        echo "<p style='$estilosParrafo'>Numero: $i</p>";
                        $i++;
                    }while($i <= 25);
                ?>
            </div>
        </div>

        <hr>

        <?php
            // Creamos un array con nombres y otro con apellidos
            $nombres = ["Guillermo", "Victor", "Yaneisis", "Alan", "Jorge", "Diego", "Luis", "Carlos", "Jose", "Mayra", "Maria", "Ana", "Luisa", "Luis", "Carlos", "Jose", "Mayra", "Maria", "Ana", "Luisa"];
            $apellidos = ["Gonzalez", "Perez", "Yaguara", "Trasven", "Gonzalez", "Rodriguez", "Perez", "Gomez", "Rojas", "Rondon", "Diaz", "Lopez", "Mendez", "Gaviria", "Lozada", "Gomez", "Rojas", "Rondon", "Diaz", "Lopez"];
            $ciudades = ["Caracas", "Maracay", "Valencia", "Barquisimeto", "Maracaibo", "Merida", "San Cristobal", "Barcelona", "Puerto La Cruz", "Cumana", "Maturin", "Valera", "Acarigua", "Guanare", "San Fernando", "San Felipe", "Coro", "Punto Fijo", "Merida", "Trujillo"];
            $edades = [25, 30, 35, 40, 45, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46];
            $profesiones = ["Doctor", "Ingeniero", "Abogado", "Profesor", "Cocinero", "Doctor", "Ingeniero", "Abogado", "Profesor", "Cocinero", "Doctor", "Ingeniero", "Abogado", "Profesor", "Cocinero", "Doctor", "Ingeniero", "Abogado", "Profesor", "Cocinero"];

            // Creamos unas funciones recursivas para utilizar con el loop forEach

            // Se declaran las funciones que se van a llamar recursivamente
            function nombres($nombres){
                return "<td>$nombres</td>";
            };
            
            function apellidos($apellidos){
                return "<td>$apellidos</td>";
            }

            function ciudades($ciudad){
                return "<td>$ciudad</td>";
            }

            function edades($edad){
                return "<td>$edad</td>";
            }

            function profesiones($profesion){
                return "<td>$profesion</td>";
            }

            // Se declara la funcion principal que hara uso de la recursividad para
            // llamar las funciones base (nombres y apellidos)
            function plantilla($i, $nombre, $apellidos, $ciudad, $edad, $profesion){
                return "<tr style='text-align:center;'><th>".($i+1)."</th>" . nombres($nombre) . apellidos($apellidos) . ciudades($ciudad) . edades($edad) . profesiones($profesion) ."<th><button>Editar</button> <button>Eliminar</button></th></tr>";
            }

            // Se crea una funcion extra que retorna una tabla con un encabezado y las filas se cargaran con el llamado de
            // la funcion "plantilla" que a su vez llama a las funciones base "nombres" y "apellidos" utilizando un loop forEach
            function tabla($nombres, $apellidos, $ciudades, $edades, $profesiones){
                // Se crea primera parte de la estructura de la tabla
                $tabla = "
                    <table style='width: 40%; border: solid black 1px;margin-top: 50px; padding: 10px;'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Ciudad</th>
                                <th>Edad</th>
                                <th>Profesion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                ";

                // Se recorre el array $nombres y se guarda el valor en la variable $nombre y el indice en la variable $key
                foreach($nombres as $key => $nombre){
                    // Se llama la funcion plantilla y se le pasan los valores de $nombre, $apellidos[$key], $ciudades[$key], $edades[$key], $profesiones[$key]
                    // en este caso [$key] representa el indice del array, por lo que se accede a los valores de los otros arrays en la misma posicion
                    $tabla .= plantilla($key, $nombre, $apellidos[$key], $ciudades[$key], $edades[$key], $profesiones[$key]);
                    // Esto agregara una fila a la tabla por cada elemento en el array $nombres
                };

                // Se concatena la ultima parte de la tabla, el cierre de la etiqueta table
                $tabla .= "</table>";

                // Se retorna la tabla
                return $tabla;
            }
        ?>

        <h3 style="margin:35px 0px 35px 20px;">Loop ForEach</h3>
        <section style="<?php echo $estilosForEach?>">
            <?php
                // Se imprime la tabla y se le pasan los arrays $nombres y $apellidos
                echo tabla($nombres, $apellidos, $ciudades, $edades, $profesiones);
            ?>
        </section>
    </body>
</html>