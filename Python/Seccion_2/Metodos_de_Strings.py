"""
    Los métodos de strings son funciones que se utilizan para realizar operaciones comunes en cadenas de texto.
"""

# len(): devuelve la longitud de la cadena de texto.
cadenaDeTexto1 = "lorem ipsum"
print(f"La longitud de la cadena de texto 1 es: { len(cadenaDeTexto1) }")
print(f"La longitud de la cadena de texto 2 es: { len(' lorem ipsum otra cosa ') }")




from os import system
system("cls") # Limpia la consola del texto previamente impreso.

# count(): Cuenta el número de concurrencias de una subcadena en una cadena.

cadenaDeTexto2 = "Esto, ok, es una cadena de texto, ok, que contiene un mensaje, ok."
# cadenaDeTexto2 = "Esto, es una cadena de texto, que contiene un mensaje."

print(f"La oracion es: { cadenaDeTexto2 }")
print(f"La palabra ok aparece: { cadenaDeTexto2.count('ok') } veces")
print("Muy bien, no usaste la palabra: ok" if cadenaDeTexto2.count('ok') == 0 else f"Puedes mejorarlo, usaste la palabra: ok {cadenaDeTexto2.count('ok')} veces")



system("cls")


# upper(): convierte la cadena de texto en mayúsculas.
nombreUsuario = "hAonteR" 

print( f"El nombre de usuario es: {nombreUsuario}")
print(f"El nombre del usuario en mayusculas es: {nombreUsuario.upper()}")



system("cls")



# lower(): convierte la cadena de texto en minúsculas.
nombreUsuarioMayusculas = "GuiLLERMo"

print( f"El nombre de usuario es: {nombreUsuarioMayusculas}")
print(f"El nombre del usuario en minúsculas es: {nombreUsuarioMayusculas.lower()}")



system("cls")



# capitalize(): convierte la primera letra de la cadena de texto en mayúscula.
nombreUsuarioMayusculas = "dOUGLAS"

print( f"El nombre de usuario es: {nombreUsuarioMayusculas}")
print(f"El nombre del usuario en capitalizado es: {nombreUsuarioMayusculas.capitalize()}")




system("cls")



# replace(): reemplaza una subcadena de una cadena de texto.

# Ejemplo 1
oracion = "El usuario se encuentra offline." 

print(f"{oracion}")
print(f"{oracion.replace('offline', 'online')}")
print(f"{oracion.replace('online', 'offline')}")
print(f"{oracion.replace('offline', 'online')}")
print(f"{oracion.replace('offline', 'con problemas de internet')}")



system("cls")



# split(): divide una cadena de texto en una lista(array) de subcadenas utilizando un separador especificado.

texto = "Hola Mundo, estamos aprendiendo a usar Python, en Lexpin, con Diego Rodriguez"
listaDePalabras = texto.split(" ")

print(f"La oracion completa es: {texto}")
print(f"La lista de palabras es: {listaDePalabras} \n") # ['Hola Mundo,', 'estamos', 'aprendiendo', 'a', 'usar', 'Python,', 'en', 'Lexpin,', 'con', 'Diego', 'Rodriguez']


# Podemos tambien acceder a los indices de manera individual.
print("="*25 + " LISTA DE PALABRAS " + "="*25)
print(listaDePalabras[0])
print(listaDePalabras[1])
print(listaDePalabras[2])
print(listaDePalabras[3])
print(listaDePalabras[4])
print(listaDePalabras[5])
print(listaDePalabras[6])
print(listaDePalabras[7])
print(listaDePalabras[8])
print(listaDePalabras[9])
print(listaDePalabras[10])
print(listaDePalabras[11])
print("="*69)





system("cls")





# strip(): elimina los caracteres especificados del comienzo y del final de la cadena de texto.
texto = "---Hola Mundo-----------"
print(f"La cadena original es: {texto}") #  La cadena original es: ---Hola Mundo-----------
print(f"Ahora la cadena es: {texto.strip('-')}\n\n") # Ahora la cadena es: Hola Mundo

# strip es parecido al metodo trim() en JavaScript solo que trim() elimina espacios exclusivamente.


system("cls")






# join(): Une los elementos de una lista(array) en una cadena separados por un carácter específico.

print("Separamos la cadena donde exista un espacio.")
texto = "Hola Lexpin"
arrayDePalabras = texto.strip('-').split(' ')
print(f"La lista de palabras es: {arrayDePalabras}") #La lista de palabras es: ['Hola', 'Lexpin']
print(f"El indice 0 es: {arrayDePalabras[0]}")
print(f"El indice 1 es: {arrayDePalabras[1]}\n\n")


print("Unimos las cadenas y las separamos ahora por ' - '")
nuevaCadena = " - ".join(arrayDePalabras)
print(f"La nueva cadena es: {nuevaCadena}") # Ahora la cadena es: Hola - Lexpin



system("cls")





# startswith() y endswith(): Verifica si una cadena comienza o termina con una subcadena específica.
texto = "Hola, ¿cómo estás?"

# Verificamos si el texto comienza con la secuencia de caracteres "Hola"
empieza_con_hola = texto.startswith("Hola")

# Verificamos si el texto termina con la secuencia de caracteres "?"
termina_con_signo = texto.endswith("?")

print(f"Es texto a evaluar es: {texto}")
print(f"¿Comienza con 'Hola' ?: {empieza_con_hola}")  # True
print(f"¿Termina con '?' ?: {termina_con_signo}")  # True