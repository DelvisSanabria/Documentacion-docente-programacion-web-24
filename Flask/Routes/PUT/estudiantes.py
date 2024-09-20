# Importamos Flask y las librerias necesarias para trabajar con la base de datos.

# Flask: Permite crear aplicaciones web que manejen solicitudes HTTP.
# request: Permite obtener los datos de la petición HTTP.
# redirect: Permite redireccionar la petición HTTP a unta ruta definida.
from flask import Flask, request, jsonify



# Importamos CORS para habilitar el acceso desde el frontend o desde cualquier dominio indicado.
from flask_cors import CORS
# Si no tenemos la libreria instalada, la instalamos con el siguiente comando: pip install flask-cors


# Importar la librería de la libreria flask_mysqldb el modulo MySQL 
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


# Habilitamos la app para que permita el acceso desde cualquier dominio.
CORS(app)




# Ruta para actualizar un estudiante por id y email usando querys
# http://localhost:1236/estudiante?id=1&email=algo@gmail.com
@app.route("/editar", methods=["PUT"])
def actualizarEstudiante():
    # Extraemos el id del estudiante a actualizar de las querys del URL
    query_params = request.args
    # Extraemos los datos del estudiante a actualizar del cuerpo de la petición
    formulario = request.json
    # Creamos un cursor
    cursor = mysql.connection.cursor()
    # Validamos que se hayan enviado los datos necesarios
    if(query_params["id"] and query_params["email"]):
        # Buscamos el estudiante en la base de datos
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s AND email = %s", (query_params["id"], query_params["email"]))
        # Extraemos el estudiante obtenido
        estudiante = cursor.fetchone()
        # Si el estudiante existe, lo actualizamos
        if(estudiante):
            # Actualizamos los datos del estudiante
            cursor.execute("UPDATE estudiantes SET nombre = %s, apellido = %s, edad = %s, email = %s, ciudad = %s, pais = %s, url_foto = %s WHERE id = %s AND email = %s", (formulario["nombre"], formulario["apellido"], int(formulario["edad"]), formulario["email"], formulario["ciudad"], formulario["pais"], formulario["url_foto"], query_params["id"], query_params["email"]))
            # Guardamos los cambios en la base de datos
            mysql.connection.commit()
            # Cerramos el cursor
            cursor.close()
            # Retornamos un mensaje de confirmación con el estado 200 (OK)
            return jsonify({"mensaje": "Estudiante actualizado correctamente", "estado": 200}), 200
        else:
            # Ceramos el cursor
            cursor.close()
            # Retornamos un mensaje de error con el estado 404 (Not Found)
            return jsonify({"mensaje": "No se encontro el estudiante", "estado": 404}), 404
    else:
        # Retornamos un mensaje de error con el estado 400 (Bad Request)
        return jsonify({"mensaje": "Faltan datos", "estado": 400}), 400








# Levantamos y escuchamos el servidor en modo de depuracion, en el puerto 1235.
if __name__ == '__main__':
    app.run(debug=True, port=1237)