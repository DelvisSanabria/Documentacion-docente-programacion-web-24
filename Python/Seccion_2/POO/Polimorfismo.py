"""
    ¿Qué es el polimorfismo?
    Consiste en la capacidad de una clase de tener varios métodos con el mismo nombre,
    pero con diferentes implementaciones, de manera que se pueda llamar al mismo método
    con diferentes parametros y obtener diferentes resultados. En otras palabras, el 
    polimorfismo permite que un objeto pueda comportarse de diferentes maneras según el 
    contexto en el que se encuentre.
"""



# Ejemplo 1 de polimorfismo

# Clase Base
class Ave:
    def volar(self):
        return "Algunas aves pueden volar\n"


# Clases Hijas
class Aguila(Ave):
    def volar(self):
        return "El águila puede volar muy alto\n"


class Pinguino(Ave):
    def volar(self):
        return "El pingüino no puede volar\n"


class Loro(Ave):
    def volar(self):
        return "El loro vuela bajo\n"


class Dodo(Ave):
    def volar(self):
        return "El dodo no podía volar, y ya está extinto\n"



# Para ver el polimorfismo en acción, creamos una lista de objetos de tipo Ave
# que en realidad son objetos de tipo Aguila, Pinguino, Loro y Dodo. 
# Luego, llamamos al método "volar()" de cada uno de ellos y obtenemos resultados diferentes.

aves = [Aguila(), Pinguino(), Loro(), Dodo()]
for ave in aves:
    print(ave.volar())





# Ejemplo 2 de polimorfismo

# Clase Base
class Forma:
    # Constructor de la clase
    def __init__(self, radio=None, lado=None, base=None, altura=None, tipo="Forma"): # Parámetros con valores por defecto por si no se reciben.
        self.radio = radio
        self.lado = lado
        self.base = base
        self.altura = altura
        self.tipo = tipo

    def area(self):
        # La palabra reservada "pass" se utiliza para indicar que la función no hace nada (Hasta que se defina)
        pass



class Circulo(Forma):
    def __init__(self, radio):
        super().__init__(radio=radio, tipo="Círculo")

    def area(self):
        return 3.14 * (self.radio ** 2)



class Cuadrado(Forma):
    def __init__(self, lado):
        super().__init__(lado=lado, tipo="Cuadrado")

    def area(self):
        return self.lado * self.lado



class Triangulo(Forma):
    def __init__(self, base, altura):
        super().__init__(base=base, altura=altura, tipo="Triángulo")

    def area(self):
        return (self.base * self.altura) / 2



class Rectangulo(Forma):
    def __init__(self, base, altura):
        super().__init__(base=base, altura=altura, tipo="Rectángulo")

    def area(self):
        return self.base * self.altura



# Creamos una lista de objetos de tipo Forma que en realidad son objetos de tipo Circulo, Cuadrado, Triangulo y Rectangulo.
# Ya que cada uno de estos objetos hereda de la clase Forma, el método "area()" y este se comportará de manera diferente 
# para cada uno de ellos.
formas = [Circulo(5), Cuadrado(4), Triangulo(3, 6), Rectangulo(4, 5)]


# Iteramos sobre la lista de formas y llamamos al método "area()" de cada una de ellas.
for forma in formas:
    print(f"El área de un {forma.tipo} es: {forma.area()}\n")