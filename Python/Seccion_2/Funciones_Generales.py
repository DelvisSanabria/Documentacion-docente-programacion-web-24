"""
    ¿Qué son las funciones generales?
    Son funciones que se pueden utilizar en cualquier parte de un programa de Python.
    Algunas de estas funciones son built-in, es decir, están disponibles en Python sin necesidad de importar módulos.

    Algunas de estas funciones son:
"""



# Funciones generales en Python para la transformación de datos

# str(any): Convierte un objeto en una cadena.
print(str(123))  # Salida: '123'

# int(str): Convierte un número o cadena en un entero.
print(int('123'))  # Salida: 123

# bool(number, str): Convierte un valor en booleano.
print(bool(0))  # Salida: False
print(bool(1))  # Salida: True

# dict(): Crea un nuevo diccionario.
print(dict(a=1, b=2, nombre="diego"))  # Salida: {'a': 1, 'b': 2, 'nombre': 'diego'}

# float(str): Convierte un número o cadena en un número de punto flotante.
print(float('3.14'))  # Salida: 3.14

# list(): Crea una lista.
print(list((1, 2, 3)))  # Salida: [1, 2, 3]

# tuple(): Crea una tupla.
print(tuple([1, 2, 3]))  # Salida: (1, 2, 3)



"""
    +------------------------------------------------------------------------------------+
    |       Tabla de funciones generales en Python para la transformación de datos       |
    +-------------------+----------------------------------------------------------------+
    | Nombre            | Descripción                                                    |
    +-------------------+----------------------------------------------------------------+
    | bool()            | Convierte un valor en booleano.                                |
    | dict()            | Crea un nuevo diccionario.                                     |
    | float()           | Convierte un número o cadena en un número de punto flotante.   |
    | str()             | Convierte un objeto en una cadena.                             |
    | int()             | Convierte un número o cadena en un entero.                     |
    | list()            | Crea una lista.                                                |
    | tuple()           | Crea una tupla.                                                |
    | float()           | Convierte un número o cadena en un número de punto flotante.   |
    +-------------------+----------------------------------------------------------------+
"""




#  Otras funciones generales en Python


# max(numbers/list[number]/str/list[str]): Devuelve el elemento más grande.
print(max(5, 10, 3))  # Salida: 10

valores = [5, 10, 9, 20, 150, 3000, 2999, 1500, 985, 2]
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
nombres = ['Juan', 'Pedro', 'Ana', 'Maria', 'Luis', 'Carlos']
print(max(valores))  # Salida: 3000
print(max(letras))  # Salida: 'j'
print(max(nombres))  # Salida: 'Pedro'


# min(numbers/list[number]/str/list[str]): Devuelve el elemento más pequeño.
print(min(5, 10, 3))  # Salida: 3

print(min(valores))  # Salida: 2
print(min(letras))  # Salida: 'a'
print(min(nombres))  # Salida: 'Ana'



# sum(number/list[number]): Devuelve la suma de los elementos.
print(sum([1, 2, 3, 4, 5]))  # Salida: 15
print(sum(valores))  # Salida: 8680



# round(number): Redondea un número al entero más cercano.
# Redondeo al entero más bajo: .0 a .4
# Redondeo al entero más alto: .5 a .9
print(round(3.4))  # Salida: 3
print(round(3.5))  # Salida: 4




# sorted(list[number]/list[str]): Devuelve una lista ordenada.
print(sorted([3, 1, 2]))  # Salida: [1, 2, 3]
print(sorted([3, 1, 2], reverse=True))  # Salida: [3, 2, 1]
print(sorted(['c', 'a', 'b']))  # Salida: ['a', 'b', 'c']
print(sorted(['c', 'a', 'b'], reverse=True))  # Salida: ['c', 'b', 'a']
print(sorted(nombres))  # Salida: ['Ana', 'Carlos', 'Juan', 'Luis', 'Maria', 'Pedro']
print(sorted(nombres, reverse=True))  # Salida: ['Pedro', 'Maria', 'Luis', 'Juan', 'Carlos', 'Ana']



# len(str/list/dict/tuple): Devuelve la longitud de un objeto.
print(len("Hola"))  # Salida: 4
print(len([1, 2, 3]))  # Salida: 3
print(len({'a': 1, 'b': 2}))  # Salida: 2
print(len((1, 2, 3)))  # Salida: 3



# type(any): Devuelve el tipo de un objeto.
print(f"El tipo de dato es: {type(5)}")  # Salida: <class 'int'>
print(f"El tipo de dato es: {type('Hola')}")  # Salida: <class 'str'>
print(f"El tipo de dato es: {type([1, 2, 3])}")  # Salida: <class 'list'>
print(f"El tipo de dato es: {type({'a': 1, 'b': 2})}")  # Salida: <class 'dict'>
print(f"El tipo de dato es: {type((1, 2, 3))}")  # Salida: <class 'tuple'>
print(f"El tipo de dato es: {type(True)}")  # Salida: <class 'bool'>
print(f"El tipo de dato es: {type(3.14)}")  # Salida: <class 'float'>
print(f"El tipo de dato es: {type(None)}")  # Salida: <class 'NoneType'>




# range(): Devuelve una secuencia de números.
# range(limite): Devuelve una secuencia de números desde 0 hasta el límite.
print(list(range(5)))  # Salida: [0, 1, 2, 3, 4]

# range(inicio, limite): Devuelve una secuencia de números desde el inicio hasta el límite.
print(list(range(2, 6)))  # Salida: [2, 3, 4, 5]

# range(inicio, limite, incremento): Devuelve una secuencia de números desde el inicio hasta el límite con un incremento.
print(list(range(0, 10, 2)))  # Salida: [0, 2, 4, 6, 8]





# map(funcion, lista): Aplica una procedimiento previamente definido a cada elemento de una lista y 
# devuelve una nueva lista con los resultados obtenidos.

# Definimos una lista de números
miLista = [1,2,3,4,5,6,7,8,9,10]

# Ejemplo de map() sin una funcion Lambda(anonima) (en este caso con una funcion definida)
# Definimos una función que multiplica por 3 un número

def multiplicarPor3(parametro):
    return parametro * 3

# Definimos una variable que se llenara con los elementos procesados por la función map()
# y formateamos a tipo "list" para poder mostrarlo en consola.

# Nombre_de_Variable  map(funcion_a_usar, lista_a_trabajar)
resultadosSinLambda = map(multiplicarPor3, miLista)

# print( list(miLista) )
# print( list(resultadosSinLambda) )

# Realizamos el mismo ejemplo, pero en esta ocasion usamos map con una funcion Lambda.

# Definimos una variable que se llenara con los elementos procesados por la función map() y la funcion Lambda en su interior.
resultadosConLambda = map(lambda parametro: parametro * 3, miLista)

print(f"La lista Original es: {list(miLista)}")
print(f"La lista Resultante es: {list(resultadosConLambda)}")







# filter(funcion, lista): Crea una lista con los elementos de otra lista que cumplen cierta condición.

# Definimos una lista de numeros
numeros = [3,5,8,10,12,13,15,16,17,18,19,20]

# Definimos una función que devuelve True si el número es par
def esPAr(parametro):
    return (parametro % 2) == 0


# Formateamos como lista/array y usamos filter para crear una lista con los números pares de la lista numeros
numerosPares = filter(esPAr, numeros)

print(f"La lista Original es: {list(numeros)}")
print(f"La lista de numeros pares es: {list(numerosPares)}")

# Realizamos el mismo ejemplo, pero en esta ocasion usamos filter con una funcion Lambda, en esta ocasion capturamos los números impares.

# Definimos una variable que se llenara con los elementos procesados por la función filter() y la funcion Lambda en su interior.
numerosImparesConLambda = filter(lambda parametro: parametro % 2 == 1, numeros)

print(f"La lista de numeros impares es: {list(numerosImparesConLambda)}")







# abs(number): Devuelve el valor absoluto de un número.
print(abs(-5))  # Salida: 5
print(abs(5))  # Salida: 5
print(abs(-3.14))  # Salida: 3.14





# all(list): Devuelve True si todos los elementos de un iterable son verdaderos.
print(all([True, True, False]))  # Salida: False
print(all([True, True, True]))  # Salida: True




# any(): Devuelve True si algún elemento de un iterable es verdadero.
print(any([False, False, True]))  # Salida: True
print(any([False, False, False]))  # Salida: False





# eval(str): Evalúa una cadena como una expresión matemática.
print(eval('2 + 2'))  # Salida: 4
print(eval('3 / 2 + ((5*2) - 9)'))  # Salida: 2.5

entrada = input("Ingrese una expresión matemática: ")
print(eval(entrada))




# hex(): Convierte un número en una cadena hexadecimal.
# El prefijo '0x' indica que el número está en hexadecimal, por lo tanto el valor exadecimal de 255 es 'ff'.
print(hex(255))  # Salida: '0xff' / en hexadecimal es 'ff'
print(hex(12))  # Salida: '0xc' / en hexadecimal es 'c'
print(hex(15))  # Salida: '0xf' /

# Caracteres hexadecimales:
# 0 1 2 3 4 5 6 7 8 9 A B C D E F




# enumerate(list): Devuelve un objeto iterable que produce tuplas de índice/valor para cada elemento de una lista.
miLista = ["Uva", "Pera", "Manzana", "Coco", "Limon", "Mango", "Fresa"]
enumerar = enumerate(miLista)
print(list(enumerar))  # Salida: [(0, 'Uva'), (1, 'Pera'), (2, 'Manzana'), (3, 'Coco'), (4, 'Limon'), (5, 'Mango'), (6, 'Fresa')]



"""
    +------------------------------------------------------------------------------------+
    |             Tabla de funciones generales en Python (Las mas comunes)               |
    +-------------------+----------------------------------------------------------------+
    | Nombre            | Descripción                                                    |
    +-------------------+----------------------------------------------------------------+
    | max()             | Devuelve el elemento más grande.                               |
    | min()             | Devuelve el elemento más pequeño.                              |
    | sum()             | Devuelve la suma de los elementos.                             |
    | round()           | Redondea un número al entero más cercano.                      |
    | sorted()          | Devuelve una lista ordenada.                                   |
    | len()             | Devuelve la longitud de un objeto.                             |
    | type()            | Devuelve el tipo de un objeto.                                 |
    | range()           | Devuelve una secuencia de números.                             |
    | map()             | Aplica una función a cada elemento de una lista.               |
    | filter()          | Crea una lista con los elementos que cumplen cierta condición. |
    | abs()             | Devuelve el valor absoluto de un número.                       |
    | all()             | Devuelve True si todos los elementos de un iterable son True.  |
    | any()             | Devuelve True si algún elemento de un iterable es True.        |
    | eval()            | Evalúa una cadena como una expresión de Python.                |
    | hex()             | Convierte un número en una cadena hexadecimal.                 |
    | enumerate()       | Devuelve un objeto iterable que produce tuplas de índice/valor |
    +-------------------+----------------------------------------------------------------+
"""
