"""
    ¿Que es la encriptación?
    Es el proceso de convertir información legible en un formato ilegible que solo puede ser leído por una persona o
    sistema que conozca la clave de desencriptación.

    ¿Para que se utiliza la encriptación?
    Se utiliza para proteger información sensible, como datos personales, información financiera, contraseñas, etc.

    ¿Que es la sal sintactica?
    Es un valor aleatorio que se añade a la contraseña antes de ser encriptada, para hacerla más segura.

    ¿Que es el hash?
    Es un valor único que se obtiene a partir de una cadena de texto, a través de un algoritmo de encriptación.
    
    ¿Que es el numero de iteraciones?
    Es el número de veces que se aplica un algoritmo de encriptación a una contraseña antes de ser retornarse como un hash.


    Para encriptar contraseñas en Python, se puede utilizar la librería hashlib, que permite generar hashes de contraseñas
    utilizando diferentes algoritmos de encriptación, como SHA-256, SHA-512, MD5, entre otros.

    ¿Como instalar la libreria hashlib?
    La librería hashlib viene incluida en la instalación de Python, por lo que no es necesario instalarla de forma adicional.

    Metodos de Strings necesarios para encriptar contraseñas:
        encode(): Método que permite convertir una cadena de texto a bytes.
        hexdigest(): Método que permite obtener el hash digest en formato hexadecimal.

    Metodos de la libreria hashlib:
        sha256(): Método que permite generar un objeto de hash SHA-256.
        sha512(): Método que permite generar un objeto de hash SHA-512.
        update(): Método que permite actualizar el hash con una cadena de texto.
        hexdigest(): Método que permite obtener el hash digest en formato hexadecimal.
"""

from os import system as cmd
import time as tm
import hashlib


def encriptarClave(password):
    # Generar un objeto de hash SHA-256
    hash_obj256 = hashlib.sha256(password.encode())

    
    # Obtener el hash digest en formato hexadecimal
    hash = hash_obj256.hexdigest()
    
    return hash


# Ejemplo de uso
claveSinEncriptar = "clave1234"
# claveEncriptada = encriptarClave(claveSinEncriptar)
# claveEncriptada2 = encriptarClave(claveSinEncriptar)
# claveEncriptada3 = encriptarClave(claveSinEncriptar)

# print(f"Contraseña 1 encriptada a 256: {claveEncriptada}")


# Generar un objeto de hash SHA-512
# def encriptarClave512(password):
#     hash_obj512 = hashlib.sha512(password.encode())
#     hash = hash_obj512.hexdigest()
#     return hash

# claveEncriptada512 = encriptarClave512(claveSinEncriptar)

# print(f"Contraseña encriptada a 512: {claveEncriptada512}")






# Comparar contraseñas encriptadas
def validarClave(password, claveEncriptada):
    # Generar un objeto de hash SHA-256
    hash_obj = hashlib.sha256(password.encode())

    # Obtener el hash digest en formato hexadecimal
    nuevaClaveEncriptada = hash_obj.hexdigest()

    # Comparar las contraseñas encriptadas
    if nuevaClaveEncriptada == claveEncriptada:
        print("Las contraseñas coinciden.")
    else:
        print("Las contraseñas no coinciden.")

# validarClave(input("Ingrese la contraseña: "), claveEncriptada)







# Hemos visto como crear y comparar un hash de una contraseña, pero en la práctica, 
# es recomendable añadir una sal sintáctica dinamica esto lo podemos hacer añadiendo 
# un valor aleatorio a la contraseña antes de encriptarla, para hacerla más segura.

# Sin embargo, existen librerías como bcrypt, que permiten añadir una sal sintáctica de 
# forma automática, sin necesidad de hacerlo manualmente.

# Como instalar la libreria bcrypt
# Para instalar la librería bcrypt, se puede utilizar el siguiente comando: pip install bcrypt


import bcrypt


miClave = "clave1234"

def encriptarBcrypt(password):
    # Convertir la contraseña a un string de bytes
    password = password.encode()
    
    # Encriptamos la contraseña con una sal sintáctica aleatoria
    # gensalt(ciclos, prefijo)
    # El numero minimo de ciclos es 4 y el maximo es 31
    # Los prefijos disponibles son: 2a, 2b.
    claveEncriptada = bcrypt.hashpw(password, bcrypt.gensalt()) # si no se especifica el numero de ciclos, por default son 12.
    claveEncriptada2 = bcrypt.hashpw(password, bcrypt.gensalt(5, b"2b"))
    
    # mostrar la contraseña encriptada 
    print(f"Contraseña 1 encriptada con bcrypt: {claveEncriptada}")
    print(f"Contraseña 2 encriptada con bcrypt: {claveEncriptada2}")
    
    return claveEncriptada



def validarBcrypt(password, hashed):
    # Convertir la contraseña a un string de bytes
    password = password.encode()
    
    # Verificar si la contraseña coincide con el hash
    if bcrypt.checkpw(password, hashed):
        print("Las contraseñas coinciden.")
    else:
        print("Las contraseñas no coinciden.")



claveEncriptadaBcrypt = encriptarBcrypt(miClave)
validarBcrypt(input("Ingrese la contraseña para verificar: "), claveEncriptadaBcrypt)