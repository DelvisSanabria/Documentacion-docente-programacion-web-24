# En Python, las listas/arrays tienen una gran cantidad de métodos incorporados.


# Lista de prueba (array)
frutas = ["Manzana", "Pera", "Banana", "Naranja", "Banana"]
# print(f"\nLa lista original es:\n{frutas}")


# len(): permite obtener la cantidad de elementos en una lista.
# print(f"\nLa cantidad de elementos en la lista es: {len(frutas)}\n") # 5


# append(): permite agrega un elemento al final de la lista.
# frutas.append(input("Ingrese una fruta: ")) 

# print(f"Ahora la lista es:\n{frutas}")



# extend(): permite agregar multiples elementos AL FINAL de la lista.
# dulces = ["Chocolate", "Gomitas", "Galletas"]

# Mostramos la lista de dulces
# print(f"La lista de dulces es:\n{dulces}")

# Extendemos la lista de frutas en la lista de dulces
# dulces.extend(frutas)

# Imprimimos la lista extendida
# print(f"La lista de dulces extendida es:\n{dulces}") # ['Chocolate', 'Gomitas', 'Galletas', 'Manzana', 'Pera', 'Banana', 'Naranja', 'Banana']




# insert(index, value): permite insertar un elemento en una posición especifica.
# print(f"La lista de frutas original es:\n{frutas}")

frutas.insert(2, "Mango")

# Imprimimos la lista de frutas
# print(f"La lista de frutas luego de ejecutarse insert() es:\n{frutas}")



# remove(): permite eliminar el primer elemento de la lista que coincida con el valor dado.
frutas.remove("Banana")

# Imprimimos la lista de frutas luego de ejecutarse remove()
# print(f"La lista de frutas luego de ejecutarse remove() es:\n{frutas}")




# index(): devuelve la posición del primer elemento que coincida con el valor indicado, como un numero entero.

# Mostramos el indice del mango en la lista de frutas
# print(f"El indice del mango es: {frutas.index("Mango")}")

# print(f"Veamos:\n{frutas}") 


# count(): cuenta la cantidad de veces que se repite un elemento retornando un entero que indica la cantidad de coincidencias.
mercado = ["Carne","Verduras","Lacteos","P. Higiene","Galleta","Galleta","Frutas","Galleta","Galleta Mantequilla","Galleta"]
# print(f"hay: {mercado.count('Galleta')} galletas\nen la lista{mercado}")




# sort(): Ordena los elementos de la lista de forma ascendente (por defecto).
# Representacion visual del funcionamiento del algoritmo timsort utilizado por el metodo sort() de Python.
# https://www.youtube.com/watch?v=NVIjHj-lrT4
numeros = [7,1,8,24,64,900,3,325,50,9,105,206,357]
print(f"\nsort\nLos numeros sin orden son: {numeros}")

numeros.sort()
print(f"\nLos numeros ordenados son: {numeros}\n")


# Ejemplo 2 de sort()
letras = ["z","a","h","p","c","r","f"]
print(f"\nLas letras sin orden son: {letras}")

letras.sort()
print(f"\nLas letras en orden son: {letras}\n")


# Ejemplo 3 de sort()
palabras = ["zorro","ancla","hilo","perro","cactus","raton","foca"]
print(f"\nLas palabras sin orden son: {palabras}")

palabras.sort()
print(f"\nLas palabras en orden son: {palabras}\n")


# Ejemplo 4 de sort()
nombres = ["Guillermo","Diego", "Douglas", "Angel", "Carlos", "Saul","Yaneisis","Victor"]
print(f"\nLos nombres sin orden son: {nombres}")

# Usamos el parametro reverse para indicar la orientacion del orden.
nombres.sort(reverse=True)
print(f"\nLos nombres en orden descendente son: {nombres}\n")


# Ejemplo 5 de sort()
numeros = [7,1,8,24,64,900,3,325,50,9,105,206,357]
print(f"\nLos numeros sin orden son: {numeros}")

# Usamos el parametro reverse para indicar la orientacion del orden.
numeros.sort(reverse=True)
print(f"\nLos numeros en orden descendente son: {numeros}\n")




# reverse(): invierte el orden de los elementos en la lista.
listaNumeros = [1,2,3,4,5,6,7,8,9,0]
listaNombres = ["Pedro","Victor","Alfredo","Jesus","Francisco","Wilklert","Diego"]

listaNumeros.reverse()
listaNombres.reverse()


print(f"\nLista Numeros: {listaNumeros}")
print(f"\nLista Nombres: {listaNombres}")



# Extra: Ordenar una lista de utilizando 2 metodos.
# 1. sort()
# 2. reverse()

# Ordenamos la lista de numeros de forma ascendente
numeros = [1,5,8,12,3,7,9,4,6,2,10,11]
numeros.sort()
numeros.reverse()

print(f"\nLista de numeros ordenados de forma descendente: {numeros}\n")



# clear(): Elimina todos los elementos de la lista.
nombres = ["Pedro","Victor","Alfredo","Jesus"]
nombres.clear()

print(f"\nLa lista de nombres luego de ejecutarse clear() es: {nombres}\n")