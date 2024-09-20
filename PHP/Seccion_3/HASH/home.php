<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inicio</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-200 flex flex-col items-center h-screen gap-4">
        <nav class="bg-gray-800 text-white w-full flex justify-between items-center px-6 py-4">
            
            <div class="flex items-center gap-4">
                <!-- En este caso validamos si existen las cookies usando isset y si no colocar valores por defecto -->
                <p>Bienvenido: 
                    <?php
                        // if(isset($_COOKIE['nombre']) && isset($_COOKIE['apellido'])){
                        //     echo $_COOKIE['nombre']." ".$_COOKIE['apellido'];
                        // }else{
                        //     echo "Usuario";
                        // }


                        // Hacemos lo mismo pero en esta ocasion con la variable de sesion
                        session_start();
                        if(isset($_SESSION['nombre']) && isset($_SESSION['apellido'])){
                            echo $_SESSION['nombre']." ".$_SESSION['apellido'];
                        }else{
                            echo "Usuario";
                        }
                    ?>
                </p>
                
                <img 
                    src="<?php 
                        // if(isset($_COOKIE['url_foto'])){
                        //     echo $_COOKIE['url_foto'];
                        // }else{
                        //     echo "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";
                        // }

                        // Hacemos lo mismo pero en esta ocasion con la variable de sesion
                        if(isset($_SESSION['url_foto'])){
                            echo $_SESSION['url_foto'];
                        }else{
                            echo "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";
                        }
                    ?>" 
                    alt="Foto de perfil" 
                    class="w-12 h-12 rounded-full"
                >
            </div>

            <h1 class="text-2xl">Pagina de Inicio</h1>

            <div class="flex items-center gap-6">
                <a href="home.php">Home</a>
                <a href="logout.php">Salir</a>
            </div>
        </nav>
        
        <h1>Home</h1>

        <section class="flex flex-col items-center gap-4">
            <p class="w-1/2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas quaerat, molestias sequi tempora quod fugit voluptate praesentium nostrum ipsam vero doloremque animi expedita deleniti debitis repellendus molestiae qui quasi alias error, rerum laudantium nam delectus. Maxime nesciunt nobis hic fugiat impedit a excepturi itaque, unde laudantium voluptate ex facere recusandae aliquam quaerat quae reiciendis facilis quisquam omnis exercitationem adipisci. Voluptatibus libero eveniet natus eos animi officia labore delectus vitae, pariatur laboriosam aperiam voluptates, expedita exercitationem, quam aliquam nisi molestias ducimus. Temporibus deleniti iusto, consequatur debitis laudantium iure velit minus. Esse distinctio sit dolorum pariatur natus corporis labore expedita voluptate.</p>
            <p class="w-1/2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas quaerat, molestias sequi tempora quod fugit voluptate praesentium nostrum ipsam vero doloremque animi expedita deleniti debitis repellendus molestiae qui quasi alias error, rerum laudantium nam delectus. Maxime nesciunt nobis hic fugiat impedit a excepturi itaque, unde laudantium voluptate ex facere recusandae aliquam quaerat quae reiciendis facilis quisquam omnis exercitationem adipisci. Voluptatibus libero eveniet natus eos animi officia labore delectus vitae, pariatur laboriosam aperiam voluptates, expedita exercitationem, quam aliquam nisi molestias ducimus. Temporibus deleniti iusto, consequatur debitis laudantium iure velit minus. Esse distinctio sit dolorum pariatur natus corporis labore expedita voluptate.</p>
        </section>
    </body>
</html>