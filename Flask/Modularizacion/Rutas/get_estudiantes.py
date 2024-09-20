def index(redirect):
    return redirect("http://127.0.0.1:5502/Flask/Views/index.html")


def obtenerEstudiantes(mysql, jsonify):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM estudiantes")
    estudiantes = cursor.fetchall()
    cursor.close()
    if len(estudiantes) == 0:
        respuesta = jsonify({"mensaje": "No hay estudiantes en la base de datos."})
        respuesta.status_code = 404
        return respuesta
    else:
        respuesta = jsonify(estudiantes)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        return respuesta


def obtenerEstudiantes_json(mysql, jsonify):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM estudiantes")
    estudiantes = cursor.fetchall()
    nombres_columnas = [i[0] for i in cursor.description]
    cursor.close()
    if len(estudiantes) < 1:
        respuesta = jsonify({"mensaje": "No hay estudiantes en la base de datos."})
        respuesta.status_code = 404
        return respuesta
    elif len(estudiantes) >= 1:
        lista_estudiantes = [dict(zip(nombres_columnas, estudiante)) for estudiante in estudiantes]
        respuesta = jsonify(lista_estudiantes)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        respuesta.status_code = 200
        return respuesta
    else:
        respuesta = jsonify({"mensaje": "Error inesperado."})
        respuesta.status_code = 500
        return respuesta


def obtenerEstudiantePorId(mysql, jsonify, id):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM estudiantes WHERE id = %s", (id,))
    estudiante = cursor.fetchone()
    if estudiante is None:
        cursor.close()
        respuesta = jsonify({"mensaje": "No se encontró un estudiante con el ID proporcionado."})
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


def obtenerEstudiantePorEmail(mysql, jsonify, email):
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


def obtenerEstudiantesPorPais(mysql, jsonify, pais):
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


def EstudiantePorQuery(mysql, jsonify, request):
    id, email = request.args.get('id'), request.args.get('email')
    cursor = mysql.connection.cursor()
    if (id and email):
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s AND email = %s", (id, email))
        estudiante = cursor.fetchone()
        if estudiante is None:
            cursor.close()
            respuesta = jsonify({"mensaje": "No se encontró un estudiante que contenga el id y el email proporcionados."})
            respuesta.status_code = 404
            return respuesta
        nombres_columnas = [i[0] for i in cursor.description]
        cursor.close()
        estudiante_dict = dict(zip(nombres_columnas, estudiante))
        respuesta = jsonify(estudiante_dict)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        respuesta.status_code = 200
        return respuesta
    elif id:
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s", (id,))
        estudiante = cursor.fetchone()
        if estudiante is None:
            cursor.close()
            respuesta = jsonify({"mensaje": "No se encontró un estudiante con el id proporcionado."})
            respuesta.status_code = 404
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
        if estudiante is None:
            cursor.close()
            respuesta = jsonify({"mensaje": "No se encontró un estudiante con el email proporcionado."})
            respuesta.status_code = 404
            return respuesta
        nombres_columnas = [i[0] for i in cursor.description]
        cursor.close()
        estudiante_dict = dict(zip(nombres_columnas, estudiante))
        respuesta = jsonify(estudiante_dict)
        respuesta.headers.add('Access-Control-Allow-Origin', '*')
        respuesta.status_code = 200
        return respuesta
    else:
        cursor.close()
        respuesta = jsonify({"mensaje": "No se enviaron los datos necesarios; se requiere el ID o el email del estudiante."})
        respuesta.status_code = 400
        return respuesta