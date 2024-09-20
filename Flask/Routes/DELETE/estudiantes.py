# Importamos Flask y las librerias necesarias para trabajar con la base de datos.

# Flask: Permite crear aplicaciones web que manejen solicitudes HTTP.
# request: Permite obtener los datos de la petición HTTP.
# redirect: Permite redireccionar la petición HTTP a unta ruta definida.
from flask import Flask, request, redirect, jsonify



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


# Eliminar estudiante por id usando querys
# http://localhost:1236/estudiante?id=1
# http://localhost:1236/estudiante?email=algo@gmail.com
# http://localhost:1236/?id=1&email=algo@gmail.com
@app.route("/estudiante", methods=["DELETE"])
def eliminarEstudiante():
    # Extraemos el id y/o el correo del estudiante a eliminar de las querys del URL
    query_params = request.args # Esta variable contendra los parametros extraidos de la URL como un diccionario, Ej: {id: 1, email: "algo@gmail.com"}

    # Creamos un cursor
    cursor = mysql.connection.cursor()
    
    # Validamos que se hayan enviado los datos necesarios
    if(query_params["id"] and query_params["email"]):

        # Validamos que el estudiante exista en la base de datos
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s AND email = %s", (query_params["id"], query_params["email"]))

        # Extraemos el estudiante obtenido
        estudiante = cursor.fetchone()

        # Si el estudiante existe, lo eliminamos
        if(estudiante):
            cursor.execute("DELETE FROM estudiantes WHERE id = %s AND email = %s", (query_params["id"], query_params["email"]))
            
            # Se utiliza commit para guardar los cambios en la base de datos.
            mysql.connection.commit()
            
            # Cerramos el cursor
            cursor.close()

            # Retornamos una respuesta con el código 200 (OK)
            return jsonify({"mensaje": "Estudiante eliminado"}), 200
        else:
            # Cerramos el cursor
            cursor.close()

            # Retornamos una respuesta con el código 404 (Not Found)
            return jsonify({"mensaje": "Estudiante no encontrado"}), 404

    elif(query_params["id"]):
        # Validamos que el estudiante exista en la base de datos
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s", (query_params["id"]))

        # Extraemos el estudiante obtenido
        estudiante = cursor.fetchone()

        # Si el estudiante existe, lo eliminamos
        if(estudiante):
            cursor.execute("DELETE FROM estudiantes WHERE id = %s", (query_params["id"]))
            
            # Se utiliza commit para guardar los cambios en la base de datos.
            mysql.connection.commit()
            
            # Cerramos el cursor
            cursor.close()

            # Retornamos una respuesta con el código 200 (OK)
            return jsonify({"mensaje": "Estudiante eliminado"}), 200
        else:
            # Cerramos el cursor
            cursor.close()

            # Retornamos una respuesta con el código 404 (Not Found)
            return jsonify({"mensaje": "Estudiante no encontrado"}), 404
    
    elif(query_params["email"]):
        # Validamos que el estudiante exista en la base de datos
        cursor.execute("SELECT * FROM estudiantes WHERE email = %s", (query_params["email"]))

        # Extraemos el estudiante obtenido
        estudiante = cursor.fetchone()

        # Si el estudiante existe, lo eliminamos
        if(estudiante):
            cursor.execute("DELETE FROM estudiantes WHERE email = %s", (query_params["email"]))
            
            # Se utiliza commit para guardar los cambios en la base de datos.
            mysql.connection.commit()
            
            # Cerramos el cursor
            cursor.close()

            # Retornamos una respuesta con el código 200 (OK)
            return jsonify({"mensaje": "Estudiante eliminado"}), 200
        else:
            # Cerramos el cursor
            cursor.close()

            # Retornamos una respuesta con el código 404 (Not Found)
            return jsonify({"mensaje": "Estudiante no encontrado en la base de datos"}), 404

    else:
        # Se cierra el cursor
        cursor.close()

        # Retornamos una respuesta con el código 400 (Bad Request)
        return "No se enviaron los datos necesarios para eliminar el estudiante", 400
    







# Levantamos y escuchamos el servidor en modo de depuracion, en el puerto 1235.
if __name__ == '__main__':
    app.run(debug=True, port=1236)