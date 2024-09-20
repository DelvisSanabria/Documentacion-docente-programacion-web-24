"""
    Las expresiones regulares son patrones de búsqueda utilizados para encontrar y manipular texto. 
    Son una secuencia de caracteres que define un conjunto de cadenas de texto que coinciden con un 
    patrón específico. 
    
    Se usan comúnmente en la programación para realizar operaciones como búsqueda, reemplazo, 
    extracción y validación de cadenas de texto.

    En Python, puedemos utilizar el módulo "re" para trabajar con expresiones regulares, por lo que
    es necesario importarlo.

    La sintaxis básica de una expresión regular es:

    - varRegex = r"hola"
    - texto = "Hola mundo"

    En este ejemplo, la expresión regular es "hola", y el texto es "Hola mundo".
    Se aplica de la siguiente manera:

    - coincidencia = re.search(varRegex, texto)

"""


# Importamos el módulo "re"
import re


# expresión regular y texto a evaluar
cadena = "Hola!, estamos aprendiendo regex con Python en Lexpin"

# regex
varRegex = r"Lexpin"



# coincidencia
# re.search(patron, string): Busca la primera coincidencia del patrón en la cadena de texto y 
# devuelve un objeto de coincidencia si se encuentra, o None en caso contrario.

coincidencia = re.search(varRegex, cadena)


if coincidencia:
    print("Coincidencia encontrada")
    print(coincidencia)
    # group(): Este metodo devuelve la cadena que coincide con el patrón.
    print(coincidencia.group())
else:
    print("Coincidencia no encontrada")
    print(coincidencia)




# Metodos de regex


# re.match(patron, string): Comprueba si el patrón coincide al comienzo de la cadena de texto y devuelve 
# un objeto de coincidencia si se encuentra, o None en caso contrario.


# Ejemplo 1:
patron = r"^\+\d{1,3}-\d{3}-\d{3}-\d{3,4}$"
cadena = "+34-123-456-789"

coincidencia = re.match(patron, cadena)


# +----------------------------------------------------------------+
# |    Tabla de caracteres especiales para expresiones regulares   |
# +------------+---------------------------------------------------+
# | Símbolo    | Descripción                                       |
# +------------+---------------------------------------------------+
# | .          | Cualquier carácter excepto nueva línea            |
# | \d         | Dígito (equivale a [0-9])                         |
# | \D         | No dígito (equivale a [^0-9])                     |
# | \w         | Carácter de palabra (equivale a [a-zA-Z0-9_])     |
# | \W         | No carácter de palabra (equivale a [^a-zA-Z0-9_]) |
# | \s         | Espacio en blanco (equivale a [ \t\n\r\f\v])      |
# | \S         | No espacio en blanco (equivale a [^ \t\n\r\f\v])  |
# | \A         | Inicio de cadena                                  |
# | \Z         | Fin de cadena                                     |
# | \b         | Límite de palabra                                 |
# | \B         | No límite de palabra                              |
# | ^          | Inicio de línea                                   |
# | $          | Fin de línea                                      |
# | *          | 0 o más repeticiones                              |
# | +          | 1 o más repeticiones del patron previo            |
# | ?          | 0 o 1 repetición                                  |
# | {n}        | Exactamente n repeticiones                        |
# | {n,}       | n o más repeticiones                              |
# | {n,m}      | Entre n y m repeticiones                          |
# | \          | Carácter de escape                                |
# | []         | Conjunto de caracteres                            |
# | [^]        | Conjunto negado de caracteres                     |
# | |          | Alternativa (OR)                                  |
# | ()         | Agrupación y captura                              |
# +------------+---------------------------------------------------+




# re.findall(patron, string): Encuentra TODAS las coincidencias del patrón en la cadena de texto y devuelve
# una lista con ellas, si se encuentran, o una lista vacía en caso contrario.

# Ejemplo 1 findall()
texto = "este ES un TEXTO de Ejemplo CON 4tro palabras MAYUSCULAS"
# Buscar solo las palabras con mayusculas
patron = r"\b[A-Z]+\b"


coincidencias = re.findall(patron, texto)
print(coincidencias)





# re.sub(patron, reemplazo, string): Reemplaza todas las coincidencias del patrón en la cadena de texto con
# otra cadena especificada.

# Ejemplo 1 sub()
texto = "Hola, mi nombre es Carlos"
patron = r"Carlos"
reemplazo = "Diego"

nuevo_texto = re.sub(patron, reemplazo, texto)

print(nuevo_texto)



# Ejemplo 2 sub()
texto = "Aprender Cobol es muy facil, por eso Cocol es el mejor lenguaje de programación para aprender desde 0"
patron = r"Cobol"
reemplazo = "Python"

nuevo_texto = re.sub(patron, reemplazo, texto)

print(nuevo_texto)



# re.split(patron, string): Divide la cadena de texto en una lista de subcadenas, utilizando el patrón como
# separador.

# Ejemplo 1 split()
texto = "Hola, mi nombre es Carlos-Gomez"
patron = r"\s"

subcadenas = re.split(patron, texto)

print(subcadenas)