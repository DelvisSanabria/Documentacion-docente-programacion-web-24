def eliminarEstudiante(mysql, request, jsonify):
    query_params = request.args
    cursor = mysql.connection.cursor()
    if(query_params["id"] and query_params["email"]):
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s AND email = %s", (query_params["id"], query_params["email"]))
        estudiante = cursor.fetchone()
        if(estudiante):
            cursor.execute("DELETE FROM estudiantes WHERE id = %s AND email = %s", (query_params["id"], query_params["email"]))
            mysql.connection.commit()
            cursor.close()
            return jsonify({"mensaje": "Estudiante eliminado"}), 200
        else:
            cursor.close()
            return jsonify({"mensaje": "Estudiante no encontrado"}), 404
    elif(query_params["id"]):
        cursor.execute("SELECT * FROM estudiantes WHERE id = %s", (query_params["id"]))
        estudiante = cursor.fetchone()
        if(estudiante):
            cursor.execute("DELETE FROM estudiantes WHERE id = %s", (query_params["id"]))
            mysql.connection.commit()
            cursor.close()
            return jsonify({"mensaje": "Estudiante eliminado"}), 200
        else:
            cursor.close()
            return jsonify({"mensaje": "Estudiante no encontrado"}), 404
    elif(query_params["email"]):
        cursor.execute("SELECT * FROM estudiantes WHERE email = %s", (query_params["email"]))
        estudiante = cursor.fetchone()
        if(estudiante):
            cursor.execute("DELETE FROM estudiantes WHERE email = %s", (query_params["email"]))
            mysql.connection.commit()
            cursor.close()
            return jsonify({"mensaje": "Estudiante eliminado"}), 200
        else:
            cursor.close()
            return jsonify({"mensaje": "Estudiante no encontrado en la base de datos"}), 404
    else:
        cursor.close()
        return "No se enviaron los datos necesarios para eliminar el estudiante", 400