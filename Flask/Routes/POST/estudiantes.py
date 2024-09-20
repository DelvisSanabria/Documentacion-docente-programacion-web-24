# Importamos Flask y las librerias necesarias para trabajar con la base de datos.

# Flask: Permite crear aplicaciones web que manejen solicitudes HTTP.
# request: Permite obtener los datos de la petición HTTP.
# redirect: Permite redireccionar la petición HTTP a unta ruta definida.
from flask import Flask, request, redirect



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


# Para establecer una lista blanca de dominios permitidos, se debe pasar una lista de dominios como parametro.
    # app,recursos =  {s} : {origenes}
# CORS(app, resources={r"/registrar/*": {"origins": ["http://localhost:3000", "http://localhost:5502"]}})



@app.route("/registrar", methods=["POST"])
def registrar():
    # Se extraen los datos provenientes del formulario en el front-end
    
    # # # Extraccion en variables individuales
    # nombre = request.json["nombre"]
    # apellido = request.json["apellido"]

    # # # Extraccion en variables agrupadas
    # edad, correo, ciudad, pais, foto = request.json["edad"], request.json["email"], request.json["ciudad"], request.json["pais"], request.json["foto_url"]

    # Creamos un diccionario con los datos del estudiante
    datos = request.json


    # Creamos un cursor para insertar el estudiante
    cursor = mysql.connection.cursor()

    # Ejecutamos la consulta
    cursor.execute(f"INSERT INTO estudiantes (nombre, apellido, edad, email, ciudad, pais, url_foto) VALUES ('{datos['nombre']}', '{datos['apellido']}', '{datos['edad']}', '{datos['email']}', '{datos['ciudad']}', '{datos['pais']}', '{datos['url_foto']}')")
    # cursor.execute("INSERT INTO estudiantes (nombre, apellido, edad, email, ciudad, pais, url_foto) VALUES (%s, %s, %s %s, %s, %s, %s)", (datos["nombre"], datos["apellido"], datos["edad"], datos["email"], datos["ciudad"], datos["pais"], datos["url_foto"]))

    # Guardamos los cambios en la base de datos
    mysql.connection.commit()
    
    # Validamos que el estudiante se haya registrado correctamente
    if cursor.rowcount == 0:
        # Cerramos el cursor
        cursor.close()

        # Preparamos la respuesta
        respuesta = {
            "mensaje": "Error al registrar el estudiante; Verifique los datos ingresados e intente nuevamente"
        }

        # Retornamos la respuesta
        return respuesta, 400

    # Cerramos el cursor
    cursor.close()

    # Preparemos la respuesta
    respuesta = {
        "mensaje": "Estudiante registrado correctamente"
    }

    # Retornamos la respuesta
    return respuesta, 201






# Levantamos y escuchamos el servidor en modo de depuracion, en el puerto 1235.
if __name__ == '__main__':
    app.run(debug=True, port=1235)