"""
    Los loops, también conocidos como bucles, son una estructura fundamental en la programación que permiten 
    repetir un bloque de código varias veces hasta que se cumpla una condición. 

    En Python, existen dos tipos de loops/bubles: el bucle while y el bucle for.
"""



# Bucle While

# Ejemplo 1
i = 1  # Esta variable la utilizaremos como contador
while i <= 10:
    print(i)
    i += 1




# Ejemplo 2: sumar 2 numeros mientras la opcion sea 1
# NOTA: El comando system('cls') es utilizado para limpiar la pantalla en sistemas operativos Windows,
# system('clear') en sistemas operativos Mac/Linux

# Se importa la función system del módulo os
from os import system

eleccion = input("Para iniciar escriba 1: ")
while eleccion == "1":
    num1 = int(input("Primer Numero: "))
    num2 = int(input("Segundo Numero: "))
    total=num1+num2
    print("Total: ",total)
    # Reiniciar el ciclo
    eleccion = input("Para reiniciar escriba 1: ")
    # Limpiamos pantalla
    system("cls")
print("Fin del programa")




# Bucle For

# Ejemplo 1
for i in range(0,11):   # Esta linea se lee como: "Para i en el rango de 1 a 11"
    print(f"Numero: {i}")



# Ejemplo 2
# Crear una lista para iterar
miLista = ["Uva","Pera","Manzana","Coco","Limon","Mango","Fresa"]

for fruta in miLista:  # Esta linea se lee como: "Para cada fruta en miLista"
    print(f"Fruta: {fruta}")




# Ejemplo 3
# podemos usar un bucle for junto con la función enumerate() para lograr una funcionalidad 
# similar a for each en otros lenguajes de programación. 
# La función enumerate() devuelve un objeto iterable que produce tuplas de índice/valor para 
# cada elemento de una lista.
for indice,fruta in enumerate(miLista):  # Esta linea se lee como: "Para cada indice y fruta en miLista"
    print(f"El elemento {indice} en la lista es: {fruta}")