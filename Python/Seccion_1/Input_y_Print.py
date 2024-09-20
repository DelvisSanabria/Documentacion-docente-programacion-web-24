"""
    input() y print() son dos funciones nativas de Python que se utilizan comúnmente 
    para interactuar con el usuario y mostrar información a traves de la consola.

        * La función input() se utiliza para recibir datos ingresados por el usuario a través del teclado. 
        * la función print() se utiliza para mostrar información en la consola.
    """


# Ejemplo 1: Uso de la función input() para recibir datos del usuario y print() para mostrar información en la consola.
nombre = input("¿Cuál es tu nombre?: ")
print("Hola", nombre, "¿Cómo estás?\n\n")




# Ejemplo 2: solicitud de 2 numeros para sumarlos
numero1 = int(input("Ingrese el primer número: "))
numero2 = float(input("Ingrese el segundo número: "))

print("La suma de los dos números es:", numero1 + numero2)

# Esta operacion solo podra sumar un numero entreo con un flotante (decimal)
# Si se intentan sumas 2 enteros o 2 flotantes, se generara un error de tipo de dato en la suma.