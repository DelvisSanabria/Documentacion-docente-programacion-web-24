# Importar Flask
from flask import Flask

# Ejecutar Flask
# NOTA: El argumento "__name__" es un parámetro que se utiliza para determinar la ubicación de la aplicación.
# Flask utiliza "__name__" que es una variable especial en Python, la cual se refiere al nombre del módulo(archivo)
# en el que se está ejecutando el código.
app = Flask(__name__)

#Definir ruta de prueba raiz/root (por default: GET)
@app.route('/grupo_15')
# Esta es la función de vista que manejará las solicitudes HTTP entrantes en la ruta definida.
# En este caso, la función simplemente devuelve un mensaje.
def index():
    print('Se recibio una peticion')
    return '<main><h1>Hola Mundo</h1><p>lorem ipsum dolor sit amet</p></main>'




@app.route('/error')
def error():
    print('Se recibio una peticion')
    return '<main><h1>Corre fuerte</h1><p>La computadora explotara en 5 seg</p></main>'





# Inicio de la aplicación en modo de depuración, en el puerto 7500 o el de tu preferencia (Asegurate de que no esté ocupado)
if __name__ == '__main__':
    app.run(debug=True, port=7500)

# NOTA: El modo de depuración (debug=True) proporciona información útil
# como la traza de pila en caso de errores, además de reiniciar el servidor 
# tras guardar cada cambio generado
