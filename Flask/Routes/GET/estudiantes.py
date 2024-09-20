# Glosario de metodos de mysql:
# - mysql.connection.cursor(): Establece una conexión a la base de datos MySQL y crea un objeto de cursor el cual ejecutará las consultas SQL.
# - cursor.execute("aqui va la consulta"): Ejecuta una consulta SQL.
# - cursor.fetchall(): Recupera todos los resultados de la consulta SQL como una lista de tuplas (tuple).
# - cursor.fetchone(): Recupera el siguiente resultado de la consulta SQL como una tupla (tuple).
# - cursor.description: Devuelve una secuencia de secuencias que describen las columnas de la tabla.
# - cursor.close(): Cierra el cursor para liberar los recursos y evitar brechas de seguridad.


# Importamos Flask y las librerias necesarias para trabajar con la base de datos.

# Flask: Permite crear aplicaciones web que manejen solicitudes HTTP.
# request: Permite obtener los datos de la petición HTTP.
# jsonify: Permite convertir los datos recibidos a formato JSON.
# redirect: Permite redireccionar la petición HTTP a unta ruta definida.
# flash: Permite mostrar mensajes en la petición HTTP.

from flask import Flask, request, jsonify, redirect, flash




# Importar de la libreria flask_mysqldb el modulo MySQL 
# para permitir la conexión de una aplicación Flask a una base de datos MySQL.
from flask_mysqldb import MySQL



# Instanciamos Flask
app = Flask(__name__)



# Configuración de acceso a la base de datos
app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'grupo_15'



# Crear instancia de la clase MySQL que permitira interactuar con la base de datos.
# Pasamos como parametro la instancia de la aplicación Flask, en este caso 'app'.
mysql = MySQL(app)




# Se define la ruta raiz, en este caso la ruta redirecciona a la página principal de la aplicación web.
@app.route("/")
def index():
    # Con redirect podemos redireccionar la petición HTTP a una ruta definida.
    return redirect("http://127.0.0.1:5502/Flask/Views/index.html")




# En esta ruta retornamos un array de de arrays (donde cada array son los datos de un estudiante).
# para posteriormente ser tratados en el front-end
@app.route("/estudiantes", methods=["GET"])
# Se define la funcion que se ejecutara al llamar la ruta. 
# En este caso retornara los datos de TODOS los estudiantes de en la base de datos.
def obtenerEstudiantes():
    # Establecer una conexión a la base de datos MySQL utilizando el objeto  
    # llamado "mysql" que creamos previamente, para crear un objeto de cursor el cual 
    # ejecutará las consultas SQL.
    cursor = mysql.connection.cursor()
    # Un cursor es una herramienta para interactuar con la base de datos a través de código Python, 
    # permitiendo ejecutar comandos SQL como INSERT, UPDATE, DELETE y SELECT, así como recuperar 
    # y manipular los resultados de consultas SELECT en la base de datos.

    # Realizamos una consulta a la base de datos para obtener los datos de los estudiantes utilizando el cursor que creamos en el paso anterior.
    cursor.execute("SELECT * FROM estudiantes")

    # recuperar todos los resultados de la consulta SQL como una lista de tuplas (tuple).
    estudiantes = cursor.fetchall()

    # Cerramos el cursor para liberar los recursos y evitar brechas de seguridad.
    cursor.close()

    # Validamos que la lista de estudiantes no esté vacía, si no hay estudiantes en la base de datos
    # retornamos un mensaje de error.
    if len(estudiantes) == 0:
        # Preparamos una respuesta JSON con un mensaje de error.
        respuesta = jsonify({"mensaje": "No hay estudiantes en la base de datos."})

        # Agregamos un estado de respuesta HTTP 404 para indicar que no se encontraron recursos.
        respuesta.status_code = 404

        # Retornamos la respuesta JSON con el mensaje de error.
        return respuesta
    else:
        # convertimos la lista de tuplas "estudiantes" en una respuesta JSON con la función "jsonify" 
        # para retornarlo en la respuesta al cliente.
        respuesta = jsonify(estudiantes)

        # Agregamos una cabecera a la respuesta HTTP para permitir que los navegadores web 
        # soliciten recursos desde un dominio (Puerto) diferente, el '*' indica que cualquier 
        # dominio está permitido. Esto es útil si se espera que la API sea consumida por 
        # diferentes aplicaciones o servicios alojados en distintos dominios. 
        
        # Si el servidor no devuelve este encabezado, el navegador bloquea la respuesta para evitar posibles
        # vulnerabilidades de seguridad.
        respuesta.headers.add('Access-Control-Allow-Origin', '*')

        # Esto es un middleware que se utiliza para permitir que los navegadores web soliciten recursos
        # desde un dominio diferente al que sirve la API.

        # Retornamos la respuesta JSON con los datos de los estudiantes.
        return respuesta






# Ruta GET para obtener un array de objetos (donde cada objeto es un estudiante).
@app.route("/estudiantes_json", methods=["GET"])
def obtenerEstudiantes_json():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM estudiantes")
    estudiantes = cursor.fetchall()
    
    # Obtener los nombres de las columnas desde la base de datos
    nombres_columnas = [i[0] for i in cursor.description]
    # print(nombres_columnas)
    
    cursor.close()

    if len(estudiantes) < 1:
        respuesta = jsonify({"mensaje": "No hay estudiantes en la base de datos."})
        respuesta.status_code = 404
        return respuesta
    elif len(estudiantes) >= 1:
        # Convertir cada tupla en un diccionario usando los nombres de las columnas
        # La funcion general zip() toma elementos iterables (puede ser cero o más), los empareja y devuelve un iterador.
        lista_estudiantes = [dict(zip(nombres_columnas, estudiante)) for estudiante in estudiantes] # Esta linea se lee: "Por cada estudiante en estudiantes, crea un diccionario con los nombres de las columnas y los valores de cada estudiante"
        # Retornar el JSON con la lista de diccionarios
        respuesta = jsonify(lista_estudiantes)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        respuesta.status_code = 200
        return respuesta
    else:
        respuesta = jsonify({"mensaje": "Error inesperado."})
        respuesta.status_code = 500
        return respuesta


# Es importante manejar correctamente los estados de las respuestas HTTP.
# Para conocer mas sobre ellos visita: https://es.semrush.com/blog/codigos-de-estado-http/




# Rutas con parametros

# Ruta para retornar un estudiante por su ID
# En la URL se envia un parametro llamado "id" el cual debe ser un entero.
# Ejemplo: http://localhost:1234/estudiantes/1
@app.route("/estudiantes_json/<int:id>", methods=["GET"])
# Posterormente, la funcion de ruta recibe el parametro "id" que se envia en la URL.
def obtenerEstudiantePorId(id):
    # Creamos un cursor
    cursor = mysql.connection.cursor()

    # Ejecutamos una consulta SQL para obtener los datos del estudiante con el id enviado en la URL.
    # Usamos f-string para concatenar el valor de la variable "id" en la consulta SQL.
    # Sin embargo, esta forma de concatenar valores en una consulta SQL es insegura, ya que se puede vulnerar mediante inyección SQL.
    # cursor.execute(f"SELECT * FROM estudiantes WHERE id = {id}") 
    # Por lo que la forma mas segura es es la siguiente:
    cursor.execute("SELECT * FROM estudiantes WHERE id = %s", (id,))
    # En este caso, el parámetro ID se pasa como una tupla con un solo elemento (id,). 
    # La coma después de ID al final de la consulta indica que es una tupla de un solo elemento 
    # en lugar de simplemente el valor ID. 
    # Esto es necesario para que la función execute() pueda interpretar correctamente la tupla de parámetros.

    # Recuperamos el unico resultado que deberia devolver la consulta.
    estudiante = cursor.fetchone()

    # Validamos si el estudiante existe en la base de datos.
    if estudiante is None:
        # Cerramos el cursor
        cursor.close()
        # Preparamos una respuesta JSON con un mensaje de error.
        respuesta = jsonify({"mensaje": "No se encontró un estudiante con el ID proporcionado."})
        # Agregamos un estado de respuesta HTTP 404 para indicar que no se encontraron recursos.
        respuesta.status_code = 404
        # Retornamos la respuesta JSON con el mensaje de error.
        return respuesta
    elif estudiante is not None:
        # Recuperamos los nombres de las columnas de la tabla estudiantes.
        nombres_columnas = [i[0] for i in cursor.description]
        # Cerramos el cursor una vez que hemos terminado de trabajar con él.
        cursor.close()
        # Armamos el JSON con los datos del estudiante
        estudiante_dict = dict(zip(nombres_columnas, estudiante))
        # Convertimos el diccionario en una respuesta JSON
        respuesta = jsonify(estudiante_dict)
        # Agregamos una cabecera a la respuesta HTTP para permitir que los navegadores web soliciten recursos desde un dominio (Puerto) diferente.
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        # Agregamos un estado de respuesta HTTP 200 para indicar que la solicitud fue exitosa.
        respuesta.status_code = 200
        # Retornamos la respuesta JSON con los datos del estudiante.
        return respuesta


# Ruta para retornar un estudiante por su email
@app.route("/estudiantes_json/<string:email>", methods=["GET"])
def obtenerEstudiantePorEmail(email):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM estudiantes WHERE email = %s", (email,))
    estudiante = cursor.fetchone()
    if estudiante is None:
        cursor.close()
        respuesta = jsonify({"mensaje": "No se encontró un estudiante con el email proporcionado."})
        respuesta.status_code = 404
        return respuesta
    elif estudiante is not None:
        nombres_columnas = [i[0] for i in cursor.description]
        cursor.close()
        estudiante_dict = dict(zip(nombres_columnas, estudiante))
        respuesta = jsonify(estudiante_dict)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        respuesta.status_code = 200
        return respuesta


# Ruta para retornar todos los estudiantes de un pais especifico
@app.route("/estudiantes_json/pais/<string:pais>", methods=["GET"])
def obtenerEstudiantesPorPais(pais):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM estudiantes WHERE pais = %s", (pais,))
    estudiante = cursor.fetchall()
    if estudiante is None:
        cursor.close()
        respuesta = jsonify({"mensaje": "No se encontró un estudiante con el pais proporcionado."})
        respuesta.status_code = 404
        return respuesta
    elif estudiante is not None:
        nombres_columnas = [i[0] for i in cursor.description]
        cursor.close()
        estudiante_dict = [dict(zip(nombres_columnas, estudiante)) for estudiante in estudiante]
        respuesta = jsonify(estudiante_dict)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        respuesta.status_code = 200
        return respuesta





# Ruta con query strings

# Ruta para retornar un estudiante por su ID usando query strings
# En la URL se envia un query string con un par clave-valor que puede ser id y el valor es un entero, o, email y el valor es un string.
# Ejemplo 1: http://127.0.0.1:1234/estudiante?id=1
# Ejemplo 2: http://127.0.0.1:1234/estudiante?email=diego@lexpin.online
# Ejemplo 3: http://127.0.0.1:1234/estudiante?id=1&email=diego@lexpin.online
@app.route("/estudiante", methods=["GET"])
def EstudiantePorCorreoQuery():
    # Obtenemos el valor de las variables "ID" y "email" desde los parámetros de la consulta (query string)
    id, email = request.args.get('id'), request.args.get('email')

    # Creamos un cursor
    cursor = mysql.connection.cursor()

    # Validamos que se hayan enviado los datos necesarios
    if (id and email):
        # Ejecutamos la consulta
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s AND email = %s", (id, email))
        # Recuperamos los resultados
        estudiante = cursor.fetchone()
        # Validamos si el estudiante existe en la base de datos.
        if estudiante is None:
            # Cerramos el cursor
            cursor.close()
            # Preparamos una respuesta JSON con un mensaje de error.
            respuesta = jsonify({"mensaje": "No se encontró un estudiante que contenga el id y el email proporcionados."})
            # Agregamos un estado de respuesta HTTP 404 para indicar que no se encontraron recursos.
            respuesta.status_code = 404
            # Retornamos la respuesta JSON con el mensaje de error.
            return respuesta
        # Extraemos los nombres de las columnas
        nombres_columnas = [i[0] for i in cursor.description]
        # Cerramos el cursor
        cursor.close()
        # Creamos un diccionario con los datos del estudiante
        estudiante_dict = dict(zip(nombres_columnas, estudiante))
        # Retornamos el JSON con los datos del estudiante
        respuesta = jsonify(estudiante_dict)
        # Agregamos una cabecera a la respuesta HTTP para permitir que los navegadores web soliciten recursos desde un dominio (Puerto) diferente.
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        # Agregamos un estado de respuesta HTTP 200 para indicar que la solicitud fue exitosa.
        respuesta.status_code = 200
        # Retornamos la respuesta JSON con los datos del estudiante.
        return respuesta
    elif id:
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s", (id,))
        estudiante = cursor.fetchone()
        # Validamos si el estudiante existe en la base de datos.
        if estudiante is None:
            # Cerramos el cursor
            cursor.close()
            # Preparamos una respuesta JSON con un mensaje de error.
            respuesta = jsonify({"mensaje": "No se encontró un estudiante con el id proporcionado."})
            # Agregamos un estado de respuesta HTTP 404 para indicar que no se encontraron recursos.
            respuesta.status_code = 404
            # Retornamos la respuesta JSON con el mensaje de error.
            return respuesta
        nombres_columnas = [i[0] for i in cursor.description]
        cursor.close()
        estudiante_dict = (dict(zip(nombres_columnas, estudiante)))
        respuesta = jsonify(estudiante_dict)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        respuesta.status_code = 200
        return respuesta
    elif email:
        cursor.execute("SELECT * FROM estudiantes WHERE email = %s", (email,))
        estudiante = cursor.fetchone()
        # Validamos si el estudiante existe en la base de datos.
        if estudiante is None:
            # Cerramos el cursor
            cursor.close()
            # Preparamos una respuesta JSON con un mensaje de error.
            respuesta = jsonify({"mensaje": "No se encontró un estudiante con el email proporcionado."})
            # Agregamos un estado de respuesta HTTP 404 para indicar que no se encontraron recursos.
            respuesta.status_code = 404
            # Retornamos la respuesta JSON con el mensaje de error.
            return respuesta
        nombres_columnas = [i[0] for i in cursor.description]
        cursor.close()
        estudiante_dict = dict(zip(nombres_columnas, estudiante))
        respuesta = jsonify(estudiante_dict)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        respuesta.status_code = 200
        return respuesta
    else:
        # Ceramos el cursor por seguridad.
        cursor.close()
        # Si no se envian los datos necesarios, retornamos un mensaje de error.
        respuesta = jsonify({"mensaje": "No se enviaron los datos necesarios; se requiere el ID o el email del estudiante."})
        respuesta.status_code = 400
        return respuesta


# Iniciamos el servidor en el puerto 1234
if __name__ == "__main__":
    app.run(port=1234, debug=True)