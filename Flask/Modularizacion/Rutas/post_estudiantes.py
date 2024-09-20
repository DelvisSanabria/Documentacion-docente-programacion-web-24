def registrar(mysql, request):
    datos = request.json
    cursor = mysql.connection.cursor()
    cursor.execute(f"INSERT INTO estudiantes (nombre, apellido, edad, email, ciudad, pais, url_foto) VALUES ('{datos['nombre']}', '{datos['apellido']}', '{datos['edad']}', '{datos['email']}', '{datos['ciudad']}', '{datos['pais']}', '{datos['url_foto']}')")
    mysql.connection.commit()
    if cursor.rowcount == 0:
        cursor.close()
        respuesta = {
            "mensaje": "Error al registrar el estudiante; Verifique los datos ingresados e intente nuevamente"
        }
        return respuesta, 400
    cursor.close()
    respuesta = {
        "mensaje": "Estudiante registrado correctamente"
    }
    return respuesta, 201