def actualizarEstudiante(mysql, request, jsonify):
    query_params = request.args
    formulario = request.json
    cursor = mysql.connection.cursor()
    if(query_params["id"] and query_params["email"]):
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s AND email = %s", (query_params["id"], query_params["email"]))
        estudiante = cursor.fetchone()
        if(estudiante):
            cursor.execute("UPDATE estudiantes SET nombre = %s, apellido = %s, edad = %s, email = %s, ciudad = %s, pais = %s, url_foto = %s WHERE id = %s AND email = %s", (formulario["nombre"], formulario["apellido"], int(formulario["edad"]), formulario["email"], formulario["ciudad"], formulario["pais"], formulario["url_foto"], query_params["id"], query_params["email"]))
            mysql.connection.commit()
            cursor.close()
            return jsonify({"mensaje": "Estudiante actualizado correctamente", "estado": 200}), 200
        else:
            cursor.close()
            return jsonify({"mensaje": "No se encontro el estudiante", "estado": 404}), 404
    else:
        return jsonify({"mensaje": "Faltan datos", "estado": 400}), 400
