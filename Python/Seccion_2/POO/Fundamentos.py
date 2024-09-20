"""
    ¿Que es la OOP (Object Oriented Programming) o Programación Orientada a Objetos?
    La programación orientada a objetos es un paradigma de programación que se basa en el uso de clases y objetos
    para organizar y estructurar el código de una manera más eficiente y reutilizable para la creación de aplicaciones
    y programas.


    ¿Que problemas resuelve la POO?
    - La programación orientada a objetos resuelve problemas de organización y estructuración del código, ya que 
        permite dividir un programa en clases y objetos, de manera que cada clase se encargue de una parte del 
        programa y se pueda reutilizar el código en diferentes partes del programa.
    - También resuelve problemas de mantenimiento y escalabilidad del código, ya que permite modificar y añadir 
        nuevas funcionalidades al programa de manera más sencilla y eficiente.

    ¿Cuando implementar la POO?
        La programación orientada a objetos se recomienda implementar en programas y aplicaciones que requieran una 
        estructura y organización del código más compleja, como aplicaciones web, aplicaciones móviles, videojuegos, 
        sistemas de gestión, etc.


    ¿Cuales son los conceptos fundamentales de la POO?
        - Clases: Una clase es una plantilla que define los atributos y métodos que tendrán los objetos de esa clase.
        - Objetos: Un objeto es una instancia de una clase, es decir, es una representación concreta de la clase.
        - Atributos o Propiedades: Son las características que definen un objeto, como su nombre, edad, color, etc.
        - Métodos: Los métodos son las funciones o acciones que puede realizar un objeto.
        
        - Herencia: La herencia consiste en la capacidad de una clase de heredar los atributos y métodos de otra clase,
            de manera que una clase hija pueda reutilizar el código de una clase padre.
        
        - Encapsulación: La encapsulación consiste en agrupar los atributos y métodos de una clase en una sola entidad,
            de manera que los atributos no puedan ser accedidos directamente desde fuera de la clase, sino que se accede 
            a ellos a través de métodos.
        
        - Polimorfismo: El polimorfismo consiste en la capacidad de una clase de tener varios métodos con el mismo nombre,
            pero con diferentes implementaciones, de manera que se pueda llamar al mismo método con diferentes argumentos 
            y obtener diferentes resultados.
"""


# Ejemplo de una clase
class Persona:
    # Constructor
    def __init__(self, nombre, edad):
        # Propiedades
        self.nombre = nombre
        self.edad = edad
        
    # Método
    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")



# Instanciando una clase para crear un objetos
Usuario1 = Persona("Diego", 28)
Usuario2 = Persona("Juan", 25)
Usuario3 = Persona("Luis", 26)



# Accediendo a los atributos y métodos de los objetos
print(Usuario1.nombre) # Salida: Diego
print(Usuario1.edad) # Salida: 28
Usuario1.saludar() # Salida: Hola, mi nombre es Diego y tengo 28 años.

print(Usuario2.nombre) # Salida: Juan
print(Usuario2.edad) # Salida: 25
Usuario2.saludar() # Salida: Hola, mi nombre es Juan y tengo 25 años.

print(Usuario3.nombre) # Salida: Luis
print(Usuario3.edad) # Salida: 26
Usuario3.saludar() # Salida: Hola, mi nombre es Luis y tengo 26 años.


# Estos son los conceptos básicos de la programación orientada a objetos en Python, en los siguientes archivos 
# se explicaran la herencia, encapsulación y polimorfismo.