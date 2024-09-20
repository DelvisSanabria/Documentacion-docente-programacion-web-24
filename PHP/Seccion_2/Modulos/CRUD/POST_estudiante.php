<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registrar estudiante</title>
        <!-- Importamos Tailwind -->
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-500 w-[100%] h-[100vh] flex flex-col items-center">
        <h1 class="text-3xl text-white my-16 underline">Registrar estudiante</h1>
        <a href="GET_estudiantes.php" class="text-white font-bold text-xl mb-4 bg-blue-600 hover:bg-blue-800 cursor-pointer rounded-lg py-2 px-4">Regresar</a>
        
        <form action='./POST_estudiante_back.php' method='POST' class='flex flex-col justify-center items-center w-[450px] h-[600px] gap-2 bg-slate-400 px-28 py-4 rounded'>
            <input type='text' placeholder='Nombre' name='nombre' class='w-[300px] rounded font-bold p-2'/>
            <input type='text' placeholder='Apellidos' name='apellido' class='w-[300px] rounded font-bold p-2'/>
            <input type='number' placeholder='Edad' name='edad' class='w-[300px] rounded font-bold p-2'/>
            <input type='text' placeholder='Email' name='email'  class='w-[300px] rounded font-bold p-2'/>
            <input type='text' placeholder='Ciudad' name='ciudad' class='w-[300px] rounded font-bold p-2'/>
            <input type='text' placeholder='Pais' name='pais'  class='w-[300px] rounded font-bold p-2'/>
            <input type='text' placeholder='Foto URL' name='url_foto' class='w-[300px] rounded font-bold p-2'/>
            <input type='submit' value='Registrar' class='w-[300px] mt-4 bg-green-600 hover:bg-green-800 cursor-pointer rounded-lg text-white font-bold py-2 px-4 text-center'/>
        </form>
    </body>
</html>
