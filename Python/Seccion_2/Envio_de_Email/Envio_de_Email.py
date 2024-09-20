# De la Libreria smtplib (Simple Mail Transfer Protocol), se importa el modulo SMTP, que permite enviar correos electrónicos.
from smtplib import SMTP

# Del modulo email.message se importa la clase EmailMessage, que permite estructurar y manipular mensajes de correo electrónico.
from email.message import EmailMessage

from os import system as cmd
import time as tm


# Se define la funcion para enviar el correo.
# Esta recibe por parametros: destinatario, asunto, cuerpo del mensaje y opcionalmente el archivo adjunto.
def enviarCorreo(destinatario, asunto, cuerpo, adjunto=None):

    # Se configura los parámetros del servidor SMTP
    # Se define el servidor SMTP de Gmail, el puerto y el tiempo de espera.
    servidor_smtp = 'smtp.gmail.com'
    # Tambien puedes usar: smtp-mail.outlook.com, smtp.mail.yahoo.com.
    # Si es un dominio personalizado "mipagina.net" debes consultar con tu administrador de dominio para obtener 
    # la informacion del servidor SMTP correspondiente.
    puerto_smtp = 587 or 465
    # Para el puerto se usa el 587 o 465 ya que permiten el envio de correo cifrados mediante SSL/TLS.
    # a diferencia del puerto 25 y del puerto 2525 que es son los designados para el envio de correo no cifrado.


    # Se define el correo electronico del remitente o emisor.
    correo_emisor = 'diegorodriguez@lexpin.online'

    # Se define la contraseña del correo electronico del remitente o emisor.
    clave_emisor = 'gaph jmfa yyha lnax'
    # NOTA: la contraseña debe ser la misma que la de la cuenta de correo, o una clave de aplicacion, aunque se recomienda 
    # el uso de variables de entorno por seguridad.
    # Para obtener una contraseña de aplicacion en gmail sigue los pasos en el siguiente enlace
    # https://support.google.com/accounts/answer/185833?hl=es#:~:text=Una%20contrase%C3%B1a%20de%20aplicaci%C3%B3n%20es,la%20verificaci%C3%B3n%20en%20dos%20pasos.


    # Se crea una instancia de la clase EmailMessage, que permite estructurar y manipular mensajes de correo electrónico.
    mensaje = EmailMessage()

    # Se configura el objeto con los parametros configurados previamente.
    mensaje['From'] = correo_emisor
    mensaje['To'] = destinatario
    mensaje['Subject'] = asunto
    mensaje.set_content(cuerpo) # el cuerpo se recibe como un parametro en el llamado de la funcion enviarCorreo


    # Se intenta anexar el archivo adjunto
    try:
        # Utilizamos with para abrir el archivo adjunto en modo seguro, y leer su contenido.
        with open(adjunto, 'rb') as archivo:
            contenido_adjunto = archivo.read()
            # Preparamos el archivo adjunto que sera de MIME image/*
            mensaje.add_attachment(contenido_adjunto, maintype='application', subtype='octet-stream', filename=adjunto)
            # maintype='application': El tipo principal del archivo. 
            # En este caso, se especifica como 'application', que es un tipo general que abarca muchos formatos de archivo.
            
            # subtype='octet-stream': El subtipo del archivo, que indica que se trata de una secuencia de bytes genérica. 
            # Este subtipo se utiliza cuando el tipo de archivo no se puede clasificar más específicamente.

            # filename=adjunto: El nombre del archivo adjunto que se mostrará en el correo electrónico.

            print("Adjunto cargado")
    except Exception as e:
        print(f"Error al cargar el adjunto: {e}")


    # Conéctamos el servidor SMTP y envía el mensaje
    with SMTP(servidor_smtp, puerto_smtp) as servidor:
        servidor.starttls() # tls: Transport Layer Security, es un protocolo de seguridad que cifra los mensajes enviados.
        servidor.login(correo_emisor, clave_emisor) # Inicia sesión en el servidor SMTP
        servidor.send_message(mensaje) # Envía el mensaje
    print("¡Correo enviado exitosamente!")


# Se solicitan los datos del destinatario, asunto y cuerpo del mensaje al usuario desde la consola.

destinatario = input("Ingrese el correo del destinatario: ")
asunto = input("Ingrese el asunto del correo: ")
cuerpo = input("Ingrese el cuerpo del correo: ")

enviarAdjunto = input("¿Desea enviar un archivo adjunto? (s/n): ")
if enviarAdjunto.lower() == 's' or enviarAdjunto.lower() == 'si':
    adjunto = input("Ingrese la ruta del archivo a adjuntar: ")
else:    
    adjunto = None

# Indicamos al usuario que se esta enviando el correo.
print("Enviando correo, por favor espere...")


tm.sleep(2)
cmd('cls')

# Se llama a la funcion enviarCorreo con los datos ingresados por el usuario.
enviarCorreo(destinatario, asunto, cuerpo, adjunto)
