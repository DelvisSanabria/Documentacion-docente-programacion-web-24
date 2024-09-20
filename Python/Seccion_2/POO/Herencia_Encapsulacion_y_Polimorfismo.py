"""
    Vamos a construir un ejemplo completo de POO que involucra los conceptos de
    Herencia, Encapsulación y Polimorfismo.

    Para ello, definiremos una clase base Usuario con atributos 
    y métodos comunes.

    Luego crearemos las clases derivadas: Cliente, Vendedor y Administrador
    cada una con sus propios métodos y propiedades privadas y publicas adicionales.
"""




# Definición de la Clase padre Usuario
class Usuario:
    # Constructor de la clase Usuario
    def __init__(self, usuario, online, nombre, apellido, correo, clave):
        # Atributos de la clase Usuario
        
        # Atributos Públicos
        self.usuario = usuario # Atributo público
        self.online = online # Atributo público

        # Atributos Privados
        # NOTA: Los atributos pueden manejar la visibilidad de la
        # información mediante el uso del prefijo "__" para indicar que son privados.
        self.__nombre = nombre  # Atributo privado
        self.__apellido = apellido # Atributo privado
        self.__correo = correo    # Atributo privado
        self.__clave = clave # Atributo privado


    # Métodos para obtener los atributos privados 
    def obtener_nombre(self):
        return self.__nombre
    
    def obtener_apellido(self):
        return self.__apellido

    def obtener_correo(self):
        return self.__correo
    
    def obtener_clave(self):
        return self.__clave
    
    # Métodos para actualizar los atributos privados
    def actualizar_nombre(self, nombre):
        self.__nombre = nombre

    def actualizar_apellido(self, apellido):
        self.__apellido = apellido

    def actualizar_correo(self, correo):
        self.__correo = correo

    def actualizar_clave(self, clave):
        self.__clave = clave

    # Este metodo permite mostrar la información del usuario, recibiendo un parámetro
    # que indica si se desea mostrar la clave del usuario, si no se especifica este parametro, por defecto
    # se mostrará la clave como "*******"
    def mostrar_informacion(self, claveVisible=False):
        return f"Usuario: {self.usuario}\nNombre: {self.__nombre}\nApellido: {self.__apellido}\nCorreo: {self.__correo}\nClave: {self.__clave if claveVisible == True else "*******"}\nOnline: {self.online}"





# Clases Derivadas de Usuario

# Clase Cliente
class Cliente(Usuario):
    def __init__(self, usuario, online, nombre, apellido, correo, clave, telefono, direccion, ciudad, pais):
        super().__init__(usuario, online, nombre, apellido, correo, clave)
        self.__telefono = telefono  # Atributo privado
        self.__direccion = direccion  # Atributo privado
        self.__ciudad = ciudad  # Atributo privado
        self.__pais = pais  # Atributo privado

    # Métodos para obtener los atributos privados 
    def obtener_pais(self):
        return self.__pais

    def obtener_telefono(self):
        return self.__telefono
    
    def obtener_direccion(self):
        return self.__direccion
    
    def obtener_ciudad(self):
        return self.__ciudad
    
    # Métodos para actualizar los atributos privados
    def actualizar_pais(self, pais):
        self.__pais = pais
    
    def actualizar_telefono(self, telefono):
        self.__telefono = telefono

    def actualizar_direccion(self, direccion):
        self.__direccion = direccion

    def actualizar_ciudad(self, ciudad):
        self.__ciudad = ciudad

    def mostrar_informacion(self, claveVisible=False):
        return f"Cliente -> {super().mostrar_informacion(claveVisible)}\nTeléfono: {self.__telefono}\nDirección: {self.__direccion}\nCiudad: {self.__ciudad}\nPaís: {self.__pais}"



# Clase Vendedor
class Vendedor(Usuario):
    def __init__(self, usuario, online, nombre, apellido, correo, clave, ubicacion, whatsapp, instagram, comision=90):
        super().__init__(usuario, online, nombre, apellido, correo, clave)
        self.__ubicacion = ubicacion # Atributo público
        self.__whatsapp = whatsapp # Atributo público
        self.__instagram = instagram # Atributo público
        self.__comision = comision  # Atributo privado

    # Métodos para obtener los atributos privados
    def obtener_ubicacion(self):
        return self.__ubicacion
    
    def obtener_whatsapp(self):
        return self.__whatsapp
    
    def obtener_instagram(self):
        return self.__instagram
    
    def obtener_comision(self):
        return self.__comision
    

    # Métodos para actualizar los atributos privados
    def actualizar_ubicacion(self, ubicacion):
        self.__ubicacion = ubicacion
    
    def actualizar_whatsapp(self, whatsapp):
        self.__whatsapp = whatsapp
    
    def actualizar_instagram(self, instagram):
        self.__instagram = instagram

    def mostrar_informacion(self):
        return f"Vendedor -> {super().mostrar_informacion()}\nUbicación: {self.__ubicacion}\nWhatsapp: {self.__whatsapp}\nInstagram: {self.__instagram}\nComisión: {self.__comision}% de cada venta"




# Clase Administrador
class Administrador(Usuario):
    def __init__(self, usuario, online, nombre, apellido, correo, clave, nivel_acceso):
        super().__init__(usuario, online, nombre, apellido, correo, clave)
        self.__nivel_acceso = nivel_acceso  # Atributo privado

    def obtener_nivelDeAcceso(self):
        return self.__nivel_acceso

    def mostrar_informacion(self):
        return f"Administrador -> {super().mostrar_informacion()}\nNivel de Acceso: {self.__nivel_acceso}"



# Creamos las instancias de las clases Cliente, Vendedor y Administrador

# Instancia de Cliente
cliente1 = Cliente("Diego1", True, "Diego", "Rodriguez", "diegorodriguez@lexpin.online", "Diego_123", "+580111111111", "Calle Falsa 123", "Segovia", "España")
cliente2 = Cliente("Marcos2", False, "Marcos", "Rodríguez", "marcosrodriguez@lexpin.online", "Marcos@123", "+580222222222", "Avenida Siempre Viva", "Bogotá", "Colombia")
cliente3 = Cliente("Juan3", True, "Juan", "Pérez", "juanperez@lexpin.online", "Juan@123", "+580333333333", "Boulevard de los Sueños Rotos", "Buenos Aires", "Argentina")
cliente4 = Cliente("Ana4", False, "Ana", "Martínez", "anamartinez@lexpin.online", "Ana@123", "+580444444444", "Callejón Diagon", "Ciudad de México", "México")
cliente5 = Cliente("Luis5", True, "Luis", "Hernández", "luishernandez@lexpin.online", "Luis@123", "+580555555555", "Plaza Mayor", "Nueva York", "Estados Unidos")
cliente6 = Cliente("Carmen6", False, "Carmen", "López", "carmenlopez@lexpin.online", "Carmen@123", "+580666666666", "Rivendell", "Toronto", "Canadá")
cliente7 = Cliente("Miguel7", True, "Miguel", "García", "miguelgarcia@lexpin.online", "Miguel@123", "+580777777777", "Hogwarts", "Madrid", "España")
cliente8 = Cliente("Laura8", False, "Laura", "Gómez", "lauragomez@lexpin.online", "Laura@123", "+580888888888", "Mordor", "Roma", "Italia")
cliente9 = Cliente("Daniel9", True, "Daniel", "Sánchez", "danielsanchez@lexpin.online", "Daniel@123", "+580999999999", "Gotham", "París", "Francia")
cliente10 = Cliente("Diana10", False, "Diana", "Fernández", "dianafernandez@lexpin.online", "Diana@123", "+580101010101", "Metropolis", "Sídney", "Australia")




# Crear 5 Vendedores
vendedor1 = Vendedor("Pedro1", True, "Pedro", "Ramírez", "pedroramirez@lexpin.online", "Pedro@123", "Almacén Central", "+1234567890", "@vendedor1")
vendedor2 = Vendedor("Sofía2", False, "Sofía", "Romero", "sofiaromero@lexpin.online", "Sofia@123", "Sucursal Norte", "+0987654321", "@vendedor2")
vendedor3 = Vendedor("Alberto3", True, "Alberto", "Ruiz", "albertoruiz@lexpin.online", "Alberto@123", "Sucursal Sur", "+1122334455", "@vendedor3")
vendedor4 = Vendedor("Isabel4", False, "Isabel", "Torres", "isabeltorres@lexpin.online", "Isabel@123", "Oficina Principal", "+5566778899", "@vendedor4")
vendedor5 = Vendedor("Manuel5", True, "Manuel", "Jiménez", "manueljimenez@lexpin.online", "Manuel@123", "Punto de Venta", "+4433221100", "@vendedor5")



# Crear 2 Administradores
administrador1 = Administrador("Alonso1", True, "Alonso", "Rodriguez", "alonsorodriguez@lexpin.online", "Alonso123.", "Alto")
administrador2 = Administrador("Marta2", False, "Marta", "Navarro", "martanavarro@lexpin.online", "Marta@123", "Medio")





# Mostramos Información de Todos los Usuarios

# Función para mostrar la información de los usuarios de una lista
def mostrar_informacion_usuarios(usuarios):
    for usuario in usuarios:
        print(f"{"_"*40}\n{usuario.mostrar_informacion()}\n{"_"*40}\n")


# Listas de clientes, vendedores y administradores
clientes = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10]
vendedores = [vendedor1, vendedor2, vendedor3, vendedor4, vendedor5]
administradores = [administrador1, administrador2]



# Mostramos finalmente la información de los usuarios
print(f"{"*"*40}\n\tClientes:\n")
mostrar_informacion_usuarios(clientes)
print(f"{"*"*40}\n")


print(f"{"*"*40}\n\tVendedores:\n")
mostrar_informacion_usuarios(vendedores)
print(f"{"*"*40}\n")


print(f"{"*"*40}\n\tAdministradores:\n")
mostrar_informacion_usuarios(administradores)
print(f"{"*"*40}\n")