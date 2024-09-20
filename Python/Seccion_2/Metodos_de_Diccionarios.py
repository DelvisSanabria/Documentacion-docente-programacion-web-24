"""
    Un diccionario es una estructura de datos que permite almacenar y organizar datos de manera flexible. 
    A diferencia de las listas/arrays, que se indexan con números enteros, los diccionarios se indexan 
    con claves y valores, estos pueden ser de cualquier tipo inmutable como cadenas de texto o números.
"""


from os import system as sys # desde el modulo os importar la funcion system como sys
import time as tm # importar tiempo como tm

persona = {
    "Nombre": "Guillermo",
    "Apellido": "Gonzalez",
    "País": "Venezuela",
    "Edad": 30,
    "Correo": "guillermo@mail.com",
    "Género": "Masculino",
    "Trabajo": "Programador",
    "Lenguajes": [["Python", "JavaScript"], "TypeScript", "CSS", "HTML", "SQL", "PHP"],
    "Hobbies": ["Leer", "Escribir", "Programar", "Ver series"],
    "Estudios": {
        "Primaria": "Escuela Jaimito",
        "Secundaria": "Liceo Pedrito",
        "Universidad": "Universidad Fulanito"
    },
    "Vehiculos": "Automovil",
    "Hijos":[
        {
            "Nombre": "Juan",
            "Edad": 10,
            "Hobbies": ["Jugar", "Dibujar", "Leer"]
        },
        {
            "Nombre": "Maria",
            "Edad": 5,
            "Hobbies": ["Cantar", "Bailar", "Jugar"]
        }
    ],
}


# get(key/clave): devuelve el valor asociado a la clave dada.

# Accediendo al Nombre de la persona
print(f"Hola {persona.get("Nombre")}") # Guillermo


# Accediendo a la Universidad de la persona
print(f"Estudió en la {persona.get("Estudios").get("Universidad")}") # Universidad Fulanito


# Accediendo al indice 1 de la lista de lenguajes
print(f"Su lenguaje favorito es: {persona.get("Lenguajes")[1]}") # JavaScript

# Accediendo al hobbie 2 de su primer hijo
print(f"El hobbie 2 de su primer hijo es: {persona.get("Hijos")[0].get("Hobbies")[1]}") # Dibujar



tm.sleep(2.5)
sys("cls")



# setdefault(key/clave, valor): si la clave no existe, la crea y le asigna el valor dado.
# Si la clave ya existe, sera sobrescrita por el nuevo valor.
# De esta manera setdefault() nos permite añadir nuevas propiedades a un diccionario/objeto o actualizar una existente.
# Modificamos el diccionario/objeto (Añadimos nueva propiedad)
persona.setdefault("Email2", "guillermogonzalez@correo.com")

# Accediendo al nuevo correo}
print(f"Nuevo correo: {persona.get("Email2")}") # Nuevo correo: "guillermogonzalez@correo.com"


# Otra forma de actualizar una propiedad
# Esto tambien permite añadir nuevas propiedades a un diccionario.
persona["Email2"] = "ggonzalez@mail.com"
persona["Cumpleaños"] = "15/05/1991"



# Podemos mostrar todo el diccionario con print() pero para ello debemos formatear el texto a JSON
# para que se vea mas ordenado.

# Importamos el modulo json
import json

# Mostramos el diccionario formateado a JSON con 4 espacios de indentación/tabulación
# El metodo dumps() convierte un diccionario/objeto a una cadena de texto en formato JSON.
print(json.dumps(persona, indent=2))





tm.sleep(1.5)
sys("cls")




# items(): devuelve una lista de tuplas de pares (clave, valor) en el diccionario/objeto "persona"
listaDePares = persona.items()

# Mostramos los elementos de la lista
print(f"\nLos items del diccionario son: {listaDePares}\n")


"""
    En este caso, listaDePares no es una lista, sino un objeto de tipo "dict_items", que es un tipo de vista 
    de diccionario que representa una lista de pares clave-valor(tuplas). 
    Para acceder al elemento en el índice 1, primero debemos convertir(formatear) listaDePares en una lista. 
    Luego podremos acceder al elemento en el índice 1 por ejemplo con la sintaxis de lista habitual. 
"""

tm.sleep(1.5)
sys("cls")

listaDePares = list( persona.items() )



# Mostramos la lista formateada
print(f"La estructura 'dict_items' formateada a lista es: {listaDePares}\n")

# Ahora accedemos con normalidad a los indices de la lista.
print(f"El indice 0 de la lista es: {listaDePares[0]}")
print(f"El indice 1 de la lista es: {listaDePares[1]}")
print(f"El indice 2 de la lista es: {listaDePares[2]}")
print(f"El indice 3 de la lista es: {listaDePares[3]}")
print(f"El indice 4 de la lista es: {listaDePares[4]}")
print(f"El indice 5 de la lista es: {listaDePares[5]}")
print(f"El indice 6 de la lista es: {listaDePares[6]}")
print(f"El indice 7 de la lista es: {listaDePares[7]}\n\n")





tm.sleep(1)


# Se puede visualizar a modo de matriz, de manera que modemos acceder a los
# valores de las tuplas en un determinado indice.
print(f"La clave del indice 7 es: {listaDePares[7][0]}")
print(f"El valor del sub-sub-indice 1 del indice 7 es: {listaDePares[7][1][0][1]}") # JavaScript
# Esto se debe a que el indice 7 es la clave "Lenguajes" y el sub-indice 1 es la lista de lenguajes que es una lista/array
# Podriamos decir que se representa en una matriz de 4 dimensiones donde: 
# - La primera dimension es el indice 7. listaDePares[7] = Lenguajes
# - La segunda dimension es el sub-indice 1. listaDePares[7][1] = [["Python", "JavaScript"], "TypeScript", "CSS", "HTML", "SQL", "PHP"]
# - La tercera dimension es el sub-sub-indice 0 que a su vez es el sub-sub-indice 1 de la segunda dimension. listaDePares[7][1][0] = ["Python", "JavaScript"]
# - La cuarta dimension es el valor de la tercera dimension. listaDePares[7][1][0][1] = JavaScript





# keys(): devuelve una vista iterable de las claves en el diccionario

persona = {
    "Nombre": "Mario",
    "Ciudad": "Caracas",
    "Edad": 30,
    "Correo": "mario@mail.com"
}

keysPersona = persona.keys()
print(keysPersona) # dict_keys(['Nombre', 'Ciudad', 'Edad', 'Correo'])

keysPersona = list(persona.keys())
print(keysPersona[0]) # Nombre
print(keysPersona[1]) # Ciudad
print(keysPersona[2]) # Edad
print(keysPersona[3]) # Correo




# values(): devuelve una vista iterable de los valores en el diccionario

persona = {
    "Nombre": "Mario",
    "Ciudad": "Caracas",
    "Edad": 30
}

valuesPersona = persona.values()
print(valuesPersona) # dict_values(['Mario', 'Caracas', 30])

valuesPersona = list(persona.values())
print(valuesPersona[0]) # Mario
print(valuesPersona[1]) # Caracas
print(valuesPersona[2]) # 30





# pop(key/propiedad/clave): elimina la clave dada y devuelve el valor asociado a ella, o un valor predeterminado si la clave no 
# está en el diccionario.
persona.pop("Ciudad")
print(persona) # {'Nombre': 'Mario', 'Edad': 30}






# popitem(): elimina y devuelve un par (clave, valor) aleatorio del diccionario
propEliminada = persona.popitem()

print(persona)
print(f"La propiedad eliminada es: {propEliminada}")




# update([other]): actualiza el diccionario con los pares clave-valor del otro diccionario o de una secuencia de pares clave-valor
persona2 = {"Telefono": 1234567, "Status":"Online"}
persona.update(persona2)
print(persona) # {'Nombre': 'Mario', 'Telefono': 1234567, 'Status': 'Online'}



# copy(): devuelve una copia superficial del diccionario, es decir una copia desvinculada del original.
# copiaPersona = persona # Esta copia esta vinculada al original, si se modifica la copia, se modifica el original y viceversa.

copiaPersona = persona.copy()

print(f"Original: {persona}") # Original: {'Nombre': 'Mario', 'Ciudad': 'Barquisimeto', 'Edad': 25, 'Telefono': 1234567, 'Status': 'Online'}
print(f"Copia: {copiaPersona}") # Copia: {'Nombre': 'Mario', 'Ciudad': 'Barquisimeto', 'Edad': 25, 'Telefono': 1234567, 'Status': 'Online'}



# clear(): elimina todos los elementos del diccionario
persona.clear()

print(f"Original: {persona}") # Original: {}
print(f"Copia: {copiaPersona}") # Copia: {'Nombre': 'Mario', 'Ciudad': 'Barquisimeto', 'Edad': 25, 'Telefono': 1234567, 'Status': 'Online'}