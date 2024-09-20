"""

    ¿Que son Funciones de Tiempo?
    Son funciones que permiten trabajar con el tiempo en Python.
    Estas funciones provienen del módulo time, el cual es un módulo de Python que proporciona funciones para trabajar con el tiempo.
    Este modulo es parte de la biblioteca estándar de Python.

    Como por ejemplo:
        - sleep(number): Pausa la ejecución del programa durante un número de segundos.
        - time(): Devuelve el tiempo epoch (unix) actual, es decir, el número de milisegundos transcurridos desde el 1 de enero de 1970.
        - localtime(): Devuelve la hora local.
        - strftime(format, time): Convierte un objeto de tiempo en una cadena.

"""


# Importamos la libreria time que nos permitira realizar acciones con el reloj de la computadora  al proporcionar 
# varios métodos y funciones.
import time as tm # se utliiza as para darle un alias a la libreria, en este caso tm


# print("Hola, estamos aprendiendo que son funciones de tiempo, con Python, en Lexpin.")

# sleep(): Pausa la ejecución del programa durante el número especificado en segundos como numeros en flotantes (ej: 1 o 1.5). 
# Es útil para crear retrasos o introducir pausas en el flujo del programa.


# Ejemplo de uso:
# tm.sleep(3.25)
# print("Este mensaje se esta mostrando luego de transcurrir 3.25 segundos")
# tm.sleep(5) 
# print("Este mensaje se esta mostrando luego de transcurrir 5 segundos mas")



# Nos preparamos para limpiar la consola
from os import system
system("cls")


# localtime():  Devuelve el tiempo local actual como una estructura de tiempo (objeto time.struct_time) 
# que contiene varios atributos como año, mes, día, hora, minutos, segundos, etc.

tiempoActual = tm.localtime() 
print("El tiempo actual es: ", tiempoActual) # El tiempo actual es:  time.struct_time(tm_year=2024, tm_mon=7, tm_mday=6, tm_hour=15, tm_min=0, tm_sec=0, tm_wday=0, tm_yday=249, tm_isdst=0)



# Separamos las propiedades en mensajes individuales

print(f"El año actual es: {tiempoActual.tm_year}")
print(f"El mes actual es: {tiempoActual.tm_mon}")
print(f"El día actual es: {tiempoActual.tm_mday}")
print(f"La hora actual es: {tiempoActual.tm_hour}")
print(f"Los minutos actuales son: {tiempoActual.tm_min}")
print(f"Los segundos actuales son: {tiempoActual.tm_sec}")
print(f"Es el dia {tiempoActual.tm_wday} de la semana")
print(f"Es el dia {tiempoActual.tm_yday} del año")
print(f"El horario actual es de verano: {tiempoActual.tm_isdst}" if tiempoActual.tm_isdst == 1 else "El horario actual no es de verano" if tiempoActual.tm_isdst == 0 else "El horario de verano/invierno no esta definido en el pais actual")


"""
    +------------------------------------------------------------+
    |           Propiedades de la estructura de tiempo           |
    +------------+-----------------------------------------------+
    | Propiedad  | Descripción                                   |
    +------------+-----------------------------------------------+
    | tm_year    | Año (por ejemplo, 2024).                      |
    | tm_mon     | Mes del año (1-12).                           |
    | tm_mday    | Día del mes (1-31).                           |
    | tm_hour    | Hora (0-23).                                  |
    | tm_min     | Minuto (0-59).                                |
    | tm_sec     | Segundo (0-61, permite 60 y 61 para segundos  |
    |            | intercalares).                                |
    | tm_wday    | Día de la semana (0-6, donde 0 es lunes).     |
    | tm_yday    | Día del año (1-366, donde 1 es 1 de enero).   |
    | tm_isdst   | Horario de verano (1 si está en efecto, 0 si  |
    |            | no, -1 si no se sabe).                        |
    +------------+-----------------------------------------------+
"""




# Obteniendo el tiempo actual epoch/unix:
tiempoEpoch = tm.time()
print("El tiempo actual en ms es: ", tiempoEpoch) # El tiempo actual en ms es:  1659809200.0






# Formatear horas y fechas: strftime(format, time)

""" 
    strftime(formato, estructura): Convierte una estructura de tiempo (time.struct_time) en una cadena de caracteres formateada según el 
    formato especificado. El formato debe seguir una sintaxis especial para representar diferentes componentes del tiempo, como %Y para el año 
    completo, %m para el mes en numero y %h para el mes en iniciales, %d para el día, %H para la hora en formato de 24 horas, %M para los minutos, %S para los segundos.
"""


"""
    +------------------------------------------------------------------+
    |                     Formatos de strftime                         |
    +------+-----------------------------------------------------------+
    | Formato | Descripción                                            |
    +---------+--------------------------------------------------------+
    | %d      | Día del mes en formato numérico con ceros iniciales.   |
    |         | Ejemplo: "01"                                          |
    +---------+--------------------------------------------------------+
    | %m      | Mes en formato numérico con ceros iniciales.           |
    |         | Ejemplo: "01"                                          |
    +---------+--------------------------------------------------------+
    | %h      | Iniciales del mes en inglés.                           |
    |         | Ejemplo: "Jan"                                         |
    +---------+--------------------------------------------------------+
    | %Y      | Año en formato de cuatro dígitos.                      |
    |         | Ejemplo: "2022"                                        |
    +---------+--------------------------------------------------------+
    | %H      | Hora en formato de 24 horas con ceros iniciales.       |
    |         | Ejemplo: "09"  o  "14"                                 |
    +---------+--------------------------------------------------------+
    | %I      | Hora en formato de 12 horas con ceros iniciales.       |
    |         | Ejemplo: "09"                                          |
    +---------+--------------------------------------------------------+
    | %M      | Minutos en formato numérico con ceros iniciales.       |
    |         | Ejemplo: "05"                                          |
    +---------+--------------------------------------------------------+
    | %S      | Segundos en formato numérico con ceros iniciales.      |
    |         | Ejemplo: "30"                                          |
    +---------+--------------------------------------------------------+
    | %a      | Nombre abreviado en ingles del día de la semana.       |
    |         | Ejemplo: "Mon"                                         |
    +---------+--------------------------------------------------------+
    | %A      | Nombre completo del día de la semana.                  |
    |         | Ejemplo: "Monday"                                      |
    +---------+--------------------------------------------------------+
    | %b      | Nombre abreviado del mes.                              |
    |         | Ejemplo: "Jan"                                         |
    +---------+--------------------------------------------------------+
    | %B      | Nombre completo del mes en inglés.                     |
    |         | Ejemplo: "January"                                     |
    +---------+--------------------------------------------------------+
    | %c      | Fecha y hora utilizando el formato local.              |
    +---------+--------------------------------------------------------+
    | %p      | Tiempo horario: "AM" o "PM" según la hora.             |
    +---------+--------------------------------------------------------+
    | %j      | Día del año en formato numérico.                       |
    |         | Ejemplo: "001"                                         |
    +---------+--------------------------------------------------------+
    | %w      | Número del día de la semana (0=domingo, 6=sábado).     |
    |         | Ejemplo: "0"                                           |
    +---------+--------------------------------------------------------+
    | %x      | Fecha utilizando el formato local.                     |
    |         | Ejemplo: "01/01/22"                                    |
    +---------+--------------------------------------------------------+
    | %X      | Hora utilizando el formato local.                      |
    |         | Ejemplo: "15:00:00"                                    |
    +---------+--------------------------------------------------------+
    | %Z      | Nombre de la zona horaria.                             |
    |         | Ejemplo: "EST"                                         |
    +---------+--------------------------------------------------------+
    | %y      | Año en formato de dos dígitos.                         |
    |         | Ejemplo: "22"                                          |
    +---------+--------------------------------------------------------+
"""



tm.sleep(5)
system("cls")


tiempoActual = tm.localtime()
horaActual = tm.strftime("%I:%M:%S %p",tiempoActual)
fechaActual = tm.strftime("%A %d/%B/%y %Z",tiempoActual)
print(f"La hora actual es: {horaActual} y la fecha actual es: {fechaActual}") # La hora actual es: 03:00:00 PM y la fecha actual es: 06/Jul/2024