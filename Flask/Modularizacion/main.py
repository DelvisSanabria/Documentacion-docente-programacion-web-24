from flask import Flask, request, jsonify, redirect, flash
from flask_mysqldb import MySQL

# Instanciamos Flask
app = Flask(__name__)

# Configuración de acceso a la base de datos
app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'grupo_15'

mysql = MySQL(app)

import Rutas.get_estudiantes as GET
import Rutas.post_estudiantes as POST
import Rutas.put_estudiantes as PUT
import Rutas.delete_estudiantes as DELETE


# Rutas GET
@app.route("/")
def home():
    return GET.index(redirect)

@app.route("/estudiantes", methods=["GET"])
def get_estudiantes():
    return GET.obtenerEstudiantes(mysql, jsonify)

@app.route("/estudiantes_json", methods=["GET"])
def get_estudiantes_json():
    return GET.obtenerEstudiantes_json(mysql, jsonify)

@app.route("/estudiantes_json/<int:id>", methods=["GET"])
def get_estudiante_por_id(id):
    return GET.obtenerEstudiantePorId(mysql, jsonify, id)

@app.route("/estudiantes_json/<string:email>", methods=["GET"])
def get_estudiante_por_email(email):
    return GET.obtenerEstudiantePorEmail(mysql, jsonify, email)

@app.route("/estudiantes_json/pais/<string:pais>", methods=["GET"])
def get_estudiantes_por_pais(pais):
    return GET.obtenerEstudiantesPorPais(mysql, jsonify, pais)

@app.route("/estudiante", methods=["GET"])
def get_estudiante():
    return GET.EstudiantePorQuery(mysql, jsonify, request)


# Rutas POST
@app.route("/registrar", methods=["POST"])
def post_estudiante():
    return POST.registrar(mysql, request)


# Rutas PUT
@app.route("/editar", methods=["PUT"])
def put_estudiante():
    return PUT.actualizarEstudiante(mysql, request, jsonify)


# Rutas DELETE
@app.route("/estudiante", methods=["DELETE"])
def delete_estudiante():
    return DELETE.eliminarEstudiante(mysql, request, jsonify)


# Iniciamos el servidor en el puerto 1234
if __name__ == "__main__":
    app.run(port=1234, debug=True)