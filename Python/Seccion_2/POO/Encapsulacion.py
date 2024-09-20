"""
    ¿Qué es la encapsulación?
    La encapsulacion consiste en agrupar los atributos y métodos de una clase en una sola entidad,
    de manera que los atributos no puedan ser accedidos directamente desde fuera de la clase,
    sino que se accede a ellos a través de métodos. En pocas palabras, la encapsulación permite
    ocultar la implementación interna de una clase y exponer solo la interfaz pública.
"""



# Ejemplo de encapsulación
class Persona:
    def __init__(self, nombre, edad):
        # se utiliza el prefijo "__" para hacer que los atributos sean privados, es decir, que no puedan
        # ser accedidos directamente desde fuera de la clase sino que se accede a ellos a través de métodos
        # que la clase proporciona.
        
        self.__nombre = nombre  # Atributo privado
        self.__edad = edad      # Atributo privado

    # NOTA: debido a que los atributos son privados, se deben crear métodos para acceder y modificar 
    # los valores de los atributos.
    def obtener_nombre(self):
        return self.__nombre

    def obtener_edad(self):
        return self.__edad

    def reestablecer_nombre(self, nombre):
        self.__nombre = nombre

    def reestablecer_edad(self, edad):
        if edad > 0:
            self.__edad = edad
        else:
            print("La edad debe ser un número positivo.")

    def saludar(self):
        print(f"Hola, mi nombre es {self.__nombre} y tengo {self.__edad} años.")



# Instanciando la clase Persona para crear un objeto
persona = Persona("Diego", 28)


# Se intenta acceder directamente al atributo privado "__nombre" desde fuera de la clase
# y si se obtiene un error, se captura la excepción y se imprime el mensaje de error.
try:
    print(persona.__nombre)  # AttributeError: 'Persona' object has no attribute '__nombre' 
except Exception as error:
    print(f"Ocurrio un error al intentar acceder al atributo privado '__nombre' desde fuera de la clase: {error}")





# Se accede al atributo privado "__nombre" a través del método "obtener_nombre()" proporcionado por la clase Persona
print(persona.obtener_nombre())  # Diego
print(persona.obtener_edad())    # 28

# Se modifican los valores de los atributos privados "__nombre" y "__edad" a través de los métodos 
# "reestablecer_nombre()" y "reestablecer_edad()"
persona.reestablecer_nombre("Alonso")
persona.reestablecer_edad(30)


print(persona.obtener_nombre())  # Alonso
print(persona.obtener_edad())    # 30