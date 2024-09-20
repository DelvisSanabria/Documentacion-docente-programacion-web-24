"""
    El manejo de archivos en Python es un conjunto de técnicas y herramientas que permiten
    trabajar con archivos de diferentes tipos, como por ejemplo archivos de texto.

    Python ofrece una serie de funciones y módulos integrados que permiten la lectura, escritura, 
    creación, modificación y eliminación de archivos.


    1 - Se utiliza la función open() para abrir un archivo y asignarlo a una variable. 
    La función open() toma como parámetros el nombre del archivo 
    y el modo de apertura (lectura, escritura, etc.).

    Sintaxis: archivo = open('ruta_del_archivo', 'modo_de_apertura')

    El modo de apertura es el modo en el que deseas abrir el archivo. 
    Hay varios modos de apertura:

    'r' (read): modo de lectura, el archivo se abre solo para lectura. Este modo es solo para lectura de archivos existentes, 
    por lo tanto, si intentas abrir un archivo con el modo "r" y el archivo no existe, se producirá un error.

    'w' (write): modo de escritura, Crea un nuevo archivo para escritura y si el archivo ya existe, sobrescribe su contenido.

    'a' (append): modo de escritura, Crea un nuevo archivo para escritura y si ya existe, se añade contenido al final del mismo.

    'x' (create): modo de escritura, el archivo se abre para escritura y si ya existe, se produce un error.
"""


# Ejemplo de como abrir archivos

# Las rutas se pueden definir sin el ./ que habitualmente usamos

# NOTA: en la consola debes estar ubicado en la ruta donde esta de tu archivo .py
# de lo contrario podras recibir el error:
# Traceback (most recent call last):
#     File "c:\Users\diego\Desktop\Grupo_15\Python\Manejo_de_Archivos.py", line 27, in <module>
#         Documento = open("nombre-del-archivo.txt","r")
#                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# FileNotFoundError: [Errno 2] No such file or directory: 'nombre-del-archivo'


try:
    documento = open("historia.txt","r")

    # Una vez que tengas el objeto de archivo, puedes realizar varias operaciones con él:
    
    # +----------------------------+-----------------------------------------------------------+
    # | Función                    | Descripción                                               |
    # +----------------------------+-----------------------------------------------------------+
    # | read()                     | Lee todo el contenido del archivo y lo devuelve como una  |
    # |                            | cadena.                                                   |
    # +----------------------------+-----------------------------------------------------------+
    # | readline()                 | Lee una línea del archivo.                                |
    # +----------------------------+-----------------------------------------------------------+
    # | readlines()                | Lee todas las líneas del archivo y las devuelve como una  |
    # |                            | lista.                                                    |
    # +----------------------------+-----------------------------------------------------------+
    # | write(cadena)              | Escribe la cadena en el archivo.                          |
    # +----------------------------+-----------------------------------------------------------+
    # | writelines(lista)          | Escribe cada elemento de la lista en el archivo.          |
    # +----------------------------+-----------------------------------------------------------+
    # | close()                    | Cierra el archivo.                                        |
    # +----------------------------+-----------------------------------------------------------+

    contenido = documento.read() # Lee todo el contenido del archivo y lo devuelve como una cadena.
    # print(contenido)
    documento.close() # Se debe cerrar el archivo una vez que se termina de trabajar con él, para liberar recursos.
    # NOTA: Solo se puede hacer una operación por apertura de archivo, si se desea hacer otra operación de cualquier 
    # otro tipo, se debe cerrar el archivo y volver a abrirlo.
except Exception as e:
    print(f"Ocurrió un error: {e}")



from os import system as cmd
import time as tm


tm.sleep(8) # Hacemos una pausa de 8 segundos
cmd("cls") # Limpiamos la consola


# Crear un archivo
try:
    documento = open("prueba.txt","w") # Abre un archivo en modo de escritura, si el archivo no existe, lo crea.
    contenido = input("Escribe algo: ") # Solicitamos al usuario que escriba algo para guardarlo en el archivo.
    documento.write(contenido) # Agregamos al archivo el contenido que el usuario escribió.
    documento.close() # Cerramos el archivo.
    print("Se ha guardado el contenido en el archivo.") # Informamos al usuario que el contenido se ha guardado en el archivo.

    tm.sleep(4) # Hacemos una pausa de 4 segundos
    cmd("cls") # Limpiamos la consola

    # Ahora vamos a leer el archivo que acabamos de crear, para ello necesitamos volverlo a abrir en modo de lectura.
    documento = open("prueba.txt","r") # Abrimos el archivo en modo de lectura.
    contenido = documento.read() # Leemos el contenido del archivo.
    print(f"El contenido del archivo es:\n{contenido}") # Imprimimos el contenido del archivo.
    documento.close() # Cerramos el archivo.
except Exception as e:
    print(f"Ocurrió un error: {e}")




# Ejercicio para realizar en clase:
# Crear un programa que permita al usuario registrar productos en un archivo de texto.
# Cada producto debe tener un nombre, un precio, descripcion, y cantidad.
# Cada vez que el usuario registre un producto, el programa debe mostrar un mensaje de confirmación.
# Se debe permitir al usuario registrar tantos productos como desee (hasta que decida salir).
# Al finalizar, el programa debe mostrar un mensaje con una tabla que muestre todos los productos registrados (con tabulate)



# Importamos el modulo tabulate
""""
    Tabulate es un módulo de Python que permite imprimir tablas de datos en la consola de una manera muy sencilla y atractiva.
"""
from tabulate import tabulate



class Producto:
    def __init__(self, nombre, precio, descripcion, cantidad):
        self.nombre = nombre
        self.precio = precio
        self.descripcion = descripcion
        self.cantidad = cantidad


productosRegistrados = []



def agregar_mas_productos():
    nombre = input("Nombre del producto: ")
    precio = input("Precio del producto: ")
    descripcion = input("Descripción del producto: ")
    cantidad = input("Cantidad del producto: ")

    productosRegistrados.append(Producto(nombre, precio, descripcion, cantidad))


    # Preguntamos al usuario si desea registrar otro producto.
    respuesta = input("¿Desea registrar otro producto? (S/N): ")
    if(respuesta.lower() == "s" or respuesta.lower() == "si"):
        cmd("cls") # Limpiamos la consola
        agregar_mas_productos()

    # Leemos el contenido actual del archivo "productos.txt" y lo guardamos en la variable "contenido" partiendo desde la linea "3".
    documento = open("./productos/productos.txt","r") # Abrimos el archivo en modo de lectura.
    contenido = documento.readlines()[3:] # Leemos el contenido del archivo.
    documento.close() # Cerramos el archivo.

    # Iteramos sobre el array de productos registrados y creamos un una matriz con los valores de cada producto.
    productos = [] # Array de arrays (matriz) que contendrá los valores de cada producto

    for producto in productosRegistrados:
        # Agregamos un array con los valores de cada producto al array de productos
        productos.append([producto.nombre,producto.precio,producto.descripcion,producto.cantidad])

    # Creamos la tabla con tabulate
    contenido_nuevo = tabulate(productos, headers=["Nombre","Precio","Descripción","Cantidad"])
    # Añadimos el contenido actual al final de la cadena "contenido_nuevo"
    contenido_nuevo.join(contenido)


    # Abrimos el documento "productos.txt" en modo de apertura "a" (append)
    documento = open("./productos/productos.txt","w") # Abre un archivo en modo de escritura de adición. 
    documento.write(contenido_nuevo) # Agregamos al archivo el contenido que el usuario escribió.



def registrar_producto():
    nombre = input("Nombre del producto: ")
    precio = input("Precio del producto: ")
    descripcion = input("Descripción del producto: ")
    cantidad = input("Cantidad del producto: ")

    productosRegistrados.append(Producto(nombre, precio, descripcion, cantidad))


    # Preguntamos al usuario si desea registrar otro producto.
    respuesta = input("¿Desea registrar otro producto? (S/N): ")
    if(respuesta.lower() == "s" or respuesta.lower() == "si"):
        cmd("cls") # Limpiamos la consola
        registrar_producto()
    else:
        respuesta = input("¿Que desea hacer?\n1 - Mostrar productos\n2- agregar mas productos\nOtro- Salir\n")

        match respuesta:
            case "1":
                mostrar_productos()
            case "2":
                agregar_mas_productos()
            case "3":
                print("Gracias por usar nuestro programa.")




registrar_producto()


# Iteramos sobre el array de productos registrados y creamos un array con los valores de cada producto
# para luego imprimirlos en una tabla con tabulate
def mostrar_productos():
    productos = [] # Array de arrays (matriz) que contendrá los valores de cada producto
    for producto in productosRegistrados:
        # Agregamos un array con los valores de cada producto al array de productos
        productos.append([producto.nombre,producto.precio,producto.descripcion,producto.cantidad]) 

    # Imprimimos la tabla con tabulate
    # tabulate(array, encabezados)
    # guardamos la estructura de los productos reetornada por tabulate
    contenido = tabulate(productos, headers=["Nombre","Precio","Descripción","Cantidad"])
    

    # Creamos una carpeta llamada "productos" en la que guardaremos el archivo "productos.txt"
    try:
        cmd("mkdir productos") # Creamos una carpeta llamada "productos"
    except:
        print(f"La carpeta ya existe, no se ha vuelo a crear.")

    documento = open("./productos/productos.txt","w") # Abre un archivo en modo de escritura, si el archivo no existe, lo crea.
    documento.write(contenido) # Agregamos al archivo el contenido que el usuario escribió.
    documento.close() # Cerramos el archivo.
    print("Se ha guardado el contenido en el archivo.")

    tm.sleep(2) # Hacemos una pausa de 2 segundos
    cmd("cls") # Limpiamos la consola

    documento = open("./productos/productos.txt","r") # Abrimos el archivo en modo de lectura.
    print(documento.read()) # Leemos el contenido del archivo.
    documento.close() # Cerramos el archivo.







# Actualizamos el archivo "productos.txt" con el modo de apertura "a" (append)

