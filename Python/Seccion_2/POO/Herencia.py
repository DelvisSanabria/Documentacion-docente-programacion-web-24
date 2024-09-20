"""
    ¿Qué es la herencia?
    Consiste en la capacidad de una clase de heredar los atributos y métodos de otra clase,
    de manera que una clase hija pueda reutilizar el código de una clase padre. En pocas palabras,
    la herencia permite crear una jerarquía de clases en la que una clase hija hereda los atributos y
    métodos de una clase padre.


    - super() es una función que se utiliza para llamar a un método de la clase padre desde una clase hija.

    IMPORTANTE: Se debe seguir el orden de la jerarquía de clases al momento de llamar a la función super(),
    y enviar los argumentos necesarios para el constructor de la clase padre.
"""



# Ejemplo de herencia en Python: Para ese ejemplo realizaremos una jerarquía de clases de vehículos, de 4 niveles de herencia.

# Nivel 1: Clase Vehículo (Clase Padre)
class Vehiculo:
    def __init__(self, tipo, uso, color):
        self.tipo = tipo
        self.uso = uso
        self.color = color

    def avanzar(self):
        print(f"El vehículo está avanzando.")

    def frenar(self):
        print(f"El vehículo está frenando.")

    # __str__ es un método especial que se puede utilizar para devolver una representación en forma de cadena de texto de un objeto.
    def __str__(self):
        return f"Vehículo {self.tipo} de uso {self.uso} de color {self.color}."






# Nivel 2: Clase VehículoDeportivo (Clase Hija de Vehículo)
class VehiculoDeportivo(Vehiculo):
    def __init__(self, tipo, uso, color, velocidad_maxima):
        # Llamando al constructor de la clase padre
        super().__init__(tipo, uso, color)
        self.velocidad_maxima = velocidad_maxima

    def acelerar(self):
        print(f"El vehículo deportivo puede alcanzar hasta {self.velocidad_maxima} km/h. ¡Vroom, vroom!")






# Nivel 3: Clase Ferrari (Clase Hija de VehículoDeportivo)
class Ferrari(VehiculoDeportivo):
    def __init__(self, tipo, uso, color, velocidad_maxima, modelo, marca, precio):
        # Llamando al constructor de la clase padre
        super().__init__(tipo, uso, color, velocidad_maxima)
        self.modelo = modelo
        self.marca = marca
        self.precio = precio

    def acelerarAFondo(self):
        print(f"El {self.marca} {self.modelo} está acelerando a {self.velocidad_maxima} km/h. ¡Vroom, vroom!")





# Nivel 4: Clase FerrariDeColeccion (Clase Hija de Ferrari)
class FerrariDeColeccion(Ferrari):
    def __init__(self, tipo, uso, color, velocidad_maxima, modelo, marca, precio, serie):
        super().__init__(tipo, uso, color, velocidad_maxima, modelo, marca, precio)
        self.serie = serie

    def acelerarDeLujo(self):
        print(f"El {self.marca} {self.modelo} de la serie {self.serie} está acelerando a {self.velocidad_maxima} km/h. ¡De colección!")







# Instanciar un vehículo
vehiculo1 = Vehiculo("Automóvil", "Personal", "Rojo")
vehiculo1.avanzar()


# Instanciar un vehículo deportivo
vehiculoDeportivo1 = VehiculoDeportivo("Automóvil", "Deportivo", "Azul", 300)
vehiculoDeportivo1.acelerar()


# Instanciar un Ferrari
ferrari1 = Ferrari("Automóvil", "Deportivo", "Rojo", 350, "F8 Tributo", "Ferrari", 300000)
ferrari1.acelerarAFondo()


# Instanciar un Ferrari de colección
ferrariDeColeccion1 = FerrariDeColeccion("Automóvil", "Deportivo", "Amarillo", 400, "F40", "Ferrari", 1000000, "Limited Edition")
ferrariDeColeccion1.acelerarDeLujo()