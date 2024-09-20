"""
    Para realizar peticiónes HTTP en Python, se pueden usar los modulos urllib, requests y json.

    urllib: Módulo que permite trabajar con URLs.
    requests: Librería que permite la preparación y envío de peticiones HTTP.
    json: Módulo que permite trabajar con archivos JSON.


    Metodos empleados en urllib:
    request: Módulo que permite realizar peticiones HTTP.
        urlopen(url): Método que permite abrir una conexión con una URL.
            read(): Método que permite leer el contenido de la URL.
            close(): Método que permite cerrar la conexión.
    error.URLError: Excepción que se lanza cuando ocurre un error en la conexión.

    Metodos empleados en json:
        loads(json): Método que permite convertir un JSON a un objeto Python.
        dumps(objeto): Método que permite convertir un objeto Python a un JSON.

    Extra:
        with: Sentencia que permite abrir un recurso y asegurarse de que se cierre correctamente al finalizar su uso.
        as: Palabra clave que permite asignar un alias a un módulo o recurso.
"""


from os import system as cmd # Importar el modulo system de la libreria os con el alias cmd para limpiar la consola.
import time as tm # Importar el modulo time con el alias tm para hacer uso de la funcion sleep y hacer pausas en el programa.


# Importar el modulo request de la libreria urllib para realizar peticiones HTTP.
# asignamos el alias req al modulo request.
import urllib.request as req
import json # Importar el modulo json para trabajar con archivos JSON.



def obtener_personajes():
    # Se prepara la URL de la API.
    url = "https://rickandmortyapi.com/api/character"

    # Se inicia un bloque try-except para manejar errores.
    try:
        # Usando with se abre la URL para asegurar que se cierre correctamente, y se lee el contenido de la URL.
        with req.urlopen(url) as response:
            print("Conectando...")
            tm.sleep(2) # Se hace una pausa de 2 segundo.
            
            # Obtenida la respuesta, se lee el contenido.
            data = response.read()
            # Se carga el contenido de "results" en la variable "personajes como un objeto JSON.
            personajes = json.loads(data)["results"]
            print("Conexión exitosa / datos obtenidos.")
            tm.sleep(2) # Se hace una pausa de 2 segundo.
            cmd("cls") # Se limpia la consola.

            # retorna la lista de personajes.
            return personajes

    except req.URLError as error: # Se captura la excepción URLError.
        print("Error en la conexión: ", error) # Se imprime un mensaje de error.
        return None # Se retorna None para indicar que no se obtuvo respuesta.


# Obtener los personajes y guardarlos en una variable.
personajes = obtener_personajes()



def imprimir_personajes(arrayPersonajes):
    # Creamos una matriz que almacenara los arrays con las tuplas de las propiedades de cada personaje.
    matrizPersonajes = []

    # Si existen personajes en la lista, se imprimen en consola, de lo contrario se muestra un mensaje de error.
    if len(arrayPersonajes) > 0:
        print("Lista de personajes de Rick and Morty\n")
        for personaje in arrayPersonajes:
            # Creamos un array con las tuplas de las propiedades de cada personaje.
            matrizPersonajes.append([personaje["id"], personaje["name"], personaje["species"], personaje["gender"], personaje["origin"]["name"]])
        
        # Importamos la libreria tabulate para imprimir los personajes en forma de tabla.
        from tabulate import tabulate

        # Usamos tabulate para crear la matriz de personajes en formato de tabla.
        tabla = tabulate(matrizPersonajes, headers=["id", "Nombre", "Especie", "Genero", "Origen"])

        # Imprimimos la tabla de personajes.
        print(tabla)

        respuesta = input("\n\nDesea guardar la lista de personajes en un archivo de texto? (s/n): ")
        if respuesta.lower() == "s" or respuesta.lower() == "si":
            # Se guarda la tabla en un archivo de texto.
            with open("personajes.txt", "w") as archivo:
                archivo.write(tabla)
                print("\nArchivo guardado con éxito.")
    else:
        print("No se pudieron obtener los personajes.")

imprimir_personajes(personajes) # Se llama a la función imprimir_personajes y se le pasa la lista de personajeñs obtenida.()