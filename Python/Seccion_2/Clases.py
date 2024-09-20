"""
    ¿Que es una Clase?
    Una clase es una estructura que puede contener atributos y métodos que se utilizan para definir un objeto,
    es decir, una instancia de la clase. Los atributos o propiedades son las características del objeto, mientras
    que los métodos son las funciones o acciones que puede realizar el objeto.

    En pocas palabras, una clase es un molde a partir del cual se crean objetos.

    ¿Como se definen las clases en Python?
    Se definen utilizando la palabra clave "class" seguida del nombre de la clase y dos puntos (:) que indican el inicio del scope de la clase.
    Dentro de la clase, se pueden definir los atributos y los métodos, y luego se puede crear uno o varios 
    objetos de esa clase conocidos como instancias, los cuales tendrán los mismos atributos y métodos definidos en la misma.

    Cada objeto creado a partir de una clase tendrá las mismas propiedades y métodos definidos en la clase(molde), 
    pero cada objeto tendrá sus propios valores para esas propiedades.
"""

# Ejemplo de una clase en Python


# Es importante mencionar que el nombre de la clase debe comenzar con una letra mayúscula,
# y si el nombre de la clase está compuesto por varias palabras, cada palabra debe comenzar con una letra mayúscula (camelCase)
# con la finalidad de seguir las convenciones de nombres de Python.
class Persona:
    # El constructor de la clase se crea utilizando la palabra clave "def" seguido de "__init__()" y dentro de los parentesis, 
    # los parametros que se recibiran.
    # __init__ es un método especial que se utiliza para inicializar los atributos de la clase, es decir, para asignar valores recibidos
    # como parametros a los atributos de la clase.

    # Constructor de la clase
    def __init__(self, paramNombre, paramEdad):
        # self (Equivalente a "this" en JavaScript) es una referencia al objeto actual que se está creando a partir de la clase, es decir, 
        # a la instancia en creación.
        # Al utilizar self, se puede acceder a los atributos y métodos de la instancia de 
        # la clase en la que se está trabajando. Permitiendo acceder al los valores entre los diferentes metodos de la clase.
        
        # Atributos o propiedades de la clase
        self.nombre = paramNombre
        self.edad = paramEdad
    
    # Metodos de la clase
    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")

    def despedirse(self):
        print(f"Adios, es hora de irme.")




# Ejemplo de como instanciar una clase en Python
persona1 = Persona("Diego", 25)
persona2 = Persona("Guillermo", 30)


print(f"Nombre: {persona1.nombre}") # Nombre: Diego
print(f"Edad: {persona1.edad}") # Edad: 25
persona1.saludar() # Hola, mi nombre es Diego y tengo 25 años.
persona1.despedirse() # Adios, es hora de irme.


print(f"Nombre: {persona2.nombre}") # Nombre: Guillermo
print(f"Edad: {persona2.edad}") # Edad: 30
persona2.saludar() # Hola, mi nombre es Guillermo y tengo 30 años.
persona2.despedirse() # Adios, es hora de irme.



# __dict__ es un atributo especial que se puede utilizar para obtener un diccionario con los atributos de una instancia de una clase.
print("\n\n",persona1.__dict__) # {'nombre': 'Diego', 'edad': 25}
print(persona2.__dict__) # {'nombre': 'Guillermo', 'edad': 30}





# Extencion de clases, crearemos dos nuevas clases una llamada "Estudiante" y otra llamada "Profesor" que heredaran 
# de la clase "Persona" los atributos y metodos que esta tiene, adenas de agregar nuevos atributos y metodos propios de cada clase.


# Clase Estudiante
class Estudiante(Persona): #Se envia como parametro la clase de la que se heredaran los atributos y metodos

    # Constructor de la clase Estudiante
    def __init__(self, paramNombre, paramEdad, paramCarrera):
        # super() se utiliza para llamar al constructor de la clase madre, en este caso, de la clase "Persona", y
        # se le envian los parametros que recibe el constructor de la clase "Estudiante" a la clase "Persona".
        super().__init__(paramNombre, paramEdad)

        # Atributo propio de la clase Estudiante
        self.carrera = paramCarrera
    
    # Metodo propio de la clase Estudiante
    def estudiar(self):
        print(f"Estoy estudiando la carrera de {self.carrera}")


# Clase Profesor
class Profesor(Persona):

    # Constructor de la clase Profesor
    def __init__(self, paramNombre, paramEdad, paramMateria):
        super().__init__(paramNombre, paramEdad)

        # Atributo propio de la clase Profesor
        self.materia = paramMateria
    
    # Metodo propio de la clase Profesor
    def darClases(self):
        print(f"Estoy enseñando la materia de {self.materia}")




# Creando 2 estudiantes
estudiante1 = Estudiante("Victor", 20, "Ingenieria en Sistemas")
estudiante2 = Estudiante("Douglas", 24, "Ingenieria en Informatica")


# Creando 2 profesores
profesor1 = Profesor("Carlos", 35, "Matematicas")
profesor2 = Profesor("Diego", 28, "Programacion")



# Llamamos las propiedades y metodos heredados de la clase Persona heredados por la clase Estudiante
print(f"\nNombre: {estudiante1.nombre}") # Nombre: Victor
print(f"Edad: {estudiante1.edad}") # Edad: 20
estudiante1.saludar() # Hola, mi nombre es Victor y tengo 20 años.
estudiante1.despedirse() # Adios, es hora de irme.

# Llamamos las propiedades y metodos propios de la clase Estudiante
print(f"Carrera: {estudiante1.carrera}") # Carrera: Ingenieria en Sistemas
estudiante1.estudiar() # Estoy estudiando la carrera de Ingenieria en Sistemas



# Llamamos las propiedades y metodos heredados de la clase Persona heredados por la clase Profesor
print(f"\nNombre: {profesor1.nombre}") # Nombre: Carlos
print(f"Edad: {profesor1.edad}") # Edad: 35
profesor1.saludar() # Hola, mi nombre es Carlos y tengo 35 años.
profesor1.despedirse() # Adios, es hora de irme.

# Llamamos las propiedades y metodos propios de la clase Profesor
print(f"Materia: {profesor1.materia}") # Materia: Matematicas
profesor1.darClases() # Estoy enseñando la materia de Matematicas