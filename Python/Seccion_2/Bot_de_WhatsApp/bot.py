"""
    ¿Que es Pywhatkit?
    Es una libreria que nos permite enviar mensajes de WhatsApp a traves de Python.

    ¿Como instalar Pywhatkit?
    Se instala mediante la consola al ejecutar el comando: pip install pywhatkit


    # Metodos de Pywhatkit
    - sendwhatmsg(numero, mensaje, hora, minuto): Envia un mensaje de WhatsApp a un numero en especifico en una hora y minuto determinado.
    - sendwhatmsg_instantly(numero, mensaje): Envia un mensaje de WhatsApp a un numero en especifico de manera instantanea.
    - sendwhatmsg_to_group_instantly(id_De_Grupo, mensaje): Envia un mensaje a un grupo en especifico de manera instantanea.
    - sendwhatmsg_to_group(id_De_Grupo, mensaje, hora, minuto): Envia un mensaje a un grupo en especifico en una hora y minuto determinado.
    - sendwhat_image(numero/id_De_Grupo, imagen, mensaje, hora, minuto: Envia una imagen a un numero en especifico en una hora y minuto determinado.

"""

# Importamos las librerias necesarias
import pywhatkit as ws

# Enviar un mensaje de manera instantanea a un numero determinado
# ws.sendwhatmsg_instantly("+34682528048", "Hola, soy un bot de WhatsApp")


# Enviar un mensaje a un grupo en especifico de manera instantanea
# ws.sendwhatmsg_to_group_instantly("*****************", "Hola, soy un bot de WhatsApp creado en una clase en vivo")

# Para obtener el id del grupo debes de seguir los siguientes pasos:
# Si eres administrador del grupo, puedes obtener el id en el enlace de invitacion a nuevo miembros.
# El enlace tendra la siguiente estructura: https://chat.whatsapp.com/ID_De_Grupo
# Nosete que el id del grupo es el codigo que esta despues de la ultima barra inclinada (Suele ser un numero de 22 caracteres aprox.)

# Si no eres administrador del grupo, puedes obtener el id del grupo si la opcion de invitar a nuevos miembros esta habilitada para
# todos los participantes del grupo y seguie los pasos anteriores.



# ws.sendwhats_image("EiEhGoEqEpND06LiKAFCcg", "./Portada_curso.jpg", "Esta imagen y este texto fueron enviados desde el bot que hicimos en la clase en vivo, de python.")
# Para enviar la imagen, debes de tener la imagen en la misma carpeta donde se encuentra el archivo (bot.py en este caso)
# y ejecutar el archivo de Python desde la terminal o consola de comandos en la ruta donde se encuentra el archivo.
# Ademas de tener instalado el modulo pywin32, el cual se instala mediante el comando: pip install pywin32





def enviar_mensaje_instantaneo():
    numero = input("Ingrese el numero de telefono: ")
    mensaje = input("Ingrese el mensaje a enviar: ")
    ws.sendwhatmsg_instantly(numero, mensaje)

def enviar_mensaje_grupo_instantaneo():
    id_grupo = input("Ingrese el id del grupo: ")
    mensaje = input("Ingrese el mensaje a enviar: ")
    ws.sendwhatmsg_to_group_instantly(id_grupo, mensaje)

def enviar_imagen_numero():
    numero = input("Ingrese el numero de telefono: ")
    imagen = input("Ingrese la ruta de la imagen: ")
    mensaje = input("Ingrese el mensaje a enviar con la imagen: ")
    ws.sendwhats_image(numero, imagen, mensaje)

def enviar_imagen_grupo():
    id_grupo = input("Ingrese el id del grupo: ")
    imagen = input("Ingrese la ruta de la imagen: ")
    mensaje = input("Ingrese el mensaje a enviar con la imagen: ")
    ws.sendwhats_image(id_grupo, imagen, mensaje)


def menu():
    respuesta = input("Menu de opciones\n1)- enviar mensaje instantaneamente a un numero\n2)- enviar mensaje instantaneamente a un grupo\n3)- enviar imagen a un numero\n4)- enviar imagen a un grupo\n5)- Salir\nRespuesta: ")

    match respuesta:
        case "1":
            enviar_mensaje_instantaneo()
        case "2":
            enviar_mensaje_grupo_instantaneo()
        case "3":
            enviar_imagen_numero()
        case "4":
            enviar_imagen_grupo()
        case _:
            print("Opccion no valida")
            menu()
menu()