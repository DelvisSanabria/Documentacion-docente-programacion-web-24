<?php
    //  Subida de archivos
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if(isset($_FILES['archivo_subido'])){
            // Extraemos el archivo
            $archivo = $_FILES['archivo_subido'];
            
            // Extraemos el nombre y el tipo del archivo
            $nombre = $archivo['name'];
            $tipo = $archivo['type'];

            if($tipo == "image/jpg" || $tipo == "image/jpeg" || $tipo == "image/png" || $tipo == "image/gif"){
                // Las funciones mkdir, is_dir y move_uploaded_file son funciones de PHP 
                // que nos permiten crear directorios, verificar si existen y mover archivos respectivamente.
                
                // mkdir('nombre_carpeta', permisos): Crea una carpeta
                // is_dir('nombre_carpeta'): Verifica si existe la carpeta
                // move_uploaded_file('archivo_temporal', 'nombre_carpeta/nombre_archivo'): Mueve un archivo de la carpeta temporal a la carpeta destino

                // Validar si existe la carpeta
                if(!is_dir('images')){
                    // Si no existe la carpeta, la creamos
                    mkdir('images', 0777);
                }

                // Si la carpeta existe, movemos el archivo de la carpeta temporal a la carpeta images
                move_uploaded_file($archivo['tmp_name'], 'images/'.$nombre);
                header("Refresh: 5; URL=Subir_Archivos.php");
                echo "<h1>Imagen subida correctamente</h1>";
            }elseif($tipo == "audio/mp3" || $tipo == "audio/wav" || $tipo == "audio/ogg"){
                // Validar si existe la carpeta
                if(!is_dir('audios')){
                    // Si no existe la carpeta, la creamos
                    mkdir('audios', 0777);
                }

                // Si la carpeta existe, movemos el archivo de la carpeta temporal a la carpeta audios
                move_uploaded_file($archivo['tmp_name'], 'audios/'.$nombre);
                header("Refresh: 5; URL=Subir_Archivos.php");
                echo "<h1>Audio subido correctamente</h1>";
            }elseif($tipo == "video/mp4" || $tipo == "video/avi" || $tipo == "video/mov"){
                // Validar si existe la carpeta
                if(!is_dir('videos')){
                    // Si no existe la carpeta, la creamos
                    mkdir('videos', 0777);
                }

                // Si la carpeta existe, movemos el archivo de la carpeta temporal a la carpeta videos
                move_uploaded_file($archivo['tmp_name'], 'videos/'.$nombre);
                header("Refresh: 5; URL=Subir_Archivos.php");
                echo "<h1>Video subido correctamente</h1>";
            }elseif($tipo == "application/pdf" || $tipo == "application/doc" || $tipo == "application/docx"){
                // Validar si existe la carpeta
                if(!is_dir('documentos')){
                    // Si no existe la carpeta, la creamos
                    mkdir('documentos', 0777);
                }

                // Si la carpeta existe, movemos el archivo de la carpeta temporal a la carpeta documentos
                move_uploaded_file($archivo['tmp_name'], 'documentos/'.$nombre);
                header("Refresh: 5; URL=Subir_Archivos.php");
                echo "<h1>Documento subido correctamente</h1>";
            }else{
                header("Refresh: 5; URL=Subir_Archivos.php");
                echo "<h1>Sube un archivo con un formato válido</h1>";
            }
        }
    }else{
        echo "<h1>Sube un archivo</h1>";
        header("Location: Subir_Archivos.php");
    }

?>