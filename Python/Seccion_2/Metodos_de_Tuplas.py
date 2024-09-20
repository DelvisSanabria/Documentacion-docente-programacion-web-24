"""
    A diferencia de las listas y los diccionarios, las tuplas son estructuras de datos inmutables en Python. 
    Debido a esto, los métodos disponibles para las tuplas son limitados.
"""


tupla = (1, 2, 3, 2, 4, 2)
tupla2 = ("Tres","Uno","Dos","Tres")

# count(): Devuelve el número de veces que aparece un elemento en la tupla.
print(tupla.count(2))  # Output: 3
print(tupla2.count("Tres"))  # Output: 2


# index(): Devuelve el índice de la primera aparición de un elemento en la tupla.
print(tupla.index(2))  # Output: 1
print(tupla2.index("Dos"))  # Output: 2