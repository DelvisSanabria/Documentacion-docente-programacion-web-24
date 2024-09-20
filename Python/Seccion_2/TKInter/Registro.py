"""
    ¿Qué es TKInter?
    TKInter es una biblioteca estándar de Python para crear interfaces gráficas de usuario (GUI)
    que se basa en la biblioteca gráfica Tk. TKInter es multiplataforma y se puede utilizar en
    sistemas Windows, macOS y Linux.

    Modulos de TKInter
    TKInter se compone de varios módulos que proporcionan diferentes funcionalidades para la creación de interfaces gráficas.

    - tkinter: Este es el módulo principal de TKInter y proporciona las clases y funciones necesarias para crear y gestionar ventanas, widgets, eventos, etc.
    - tkinter.ttk: Este módulo proporciona widgets con un aspecto más moderno y nativo del sistema operativo.
    - tkinter.messagebox: Este módulo proporciona funciones para mostrar mensajes de alerta, información, error, etc.
    - ttk.Treeview: Este widget se utiliza para mostrar datos en forma de tabla con filas y columnas.

    metodos de tkinter
    - pack(): Este método se utiliza para colocar un widget en la ventana principal. 
        Se puede especificar la posición y el tamaño del widget con los argumentos padx y pady.
    - grid(): Este método se utiliza para colocar un widget en una cuadrícula (grid) dentro de la ventana principal.
    - place(): Este método se utiliza para colocar un widget en una posición específica de la ventana principal.
    - Label(titulo, texto): Este método se utiliza para crear una etiqueta con un texto en la ventana principal.
    - Entry(): Este método se utiliza para crear un campo de entrada de texto en la ventana principal.
        - get(): Este método se utiliza para obtener el texto ingresado en un campo de entrada.
        - delete(): Este método se utiliza para borrar el texto de un campo de entrada.
    - Button(): Este método se utiliza para crear un botón en la ventana principal.
    - Toplevel(): Este método se utiliza para crear una ventana secundaria (top-level window) en la aplicación.

    Metodos de tkinter.messagebox
    - showinfo(): Muestra un mensaje de información, es equivalente a un console.log() en JavaScript.
    - showwarning(): Muestra un mensaje de advertencia, es equivalente a un console.warn() en JavaScript.
    - showerror(): Muestra un mensaje de error, es equivalente a un console.error() en JavaScript.
    - askquestion(): Muestra un mensaje con una pregunta y devuelve la respuesta del usuario, es equivalente a un confirm() en JavaScript.
    

    Metodos de ttk.Treeview
    - heading(): Este método se utiliza para establecer el texto de la cabecera de una columna en la tabla.
    - insert(): Este método se utiliza para insertar un elemento en la tabla, es decir, una nueva fila con los valores especificados.
    - delete(): Este método se utiliza para eliminar un elemento de la tabla.
    - selection(): Este método se utiliza para obtener los elementos seleccionados en la tabla.
    - set(): Este método se utiliza para establecer el valor de una celda en la tabla.
    - column(): Este método se utiliza para configurar las propiedades de una columna en la tabla.
"""


# Importamos el módulo tkinter con el alias tk.
import tkinter as tk 

# Importamos la función messagebox del módulo tkinter, que nos permite mostrar mensajes de alerta, información, error, etc.
from tkinter import messagebox as message 

# Importamos el módulo ttk de tkinter, que nos permite crear widgets con un aspecto más moderno y nativo del sistema operativo.
from tkinter import ttk 



# Crear la ventana principal

# Se crea una instancia de la clase Tk, que representa la ventana principal de la aplicación, guardar esta ventana 
# en la variable root es una convención común en la programación con TKInter, ya que la ventana principal 
# es la raíz (o en ingles root) de la aplicación.

root = tk.Tk()


# Configurar la ventana principal
root.title("Registro de Productos") # Título de la ventana.
root.geometry("600x400") # Dimensiones de la ventana.
root.config(bg="#212020") # Color de fondo de la ventana.


#  Añadir etiquetas y campos de entrada para el nombre, categoría, precio y stock.

# Crear una etiqueta con el texto "Nombre del Producto"
#              tk.Label(Ventana, Texto)
label_nombre = tk.Label(root, text="Nombre del Producto") 
# Se coloca la etiqueta en la ventana principal con pack(), y se añade un espacio de 5 píxeles en la parte superior e inferior con pady=5 (padding-y = 5px).
label_nombre.pack(pady=5) 


# Crear un campo de entrada con la anchura de 30 caracteres.
#             tk.Entry(Ventana, ancho)
entry_nombre = tk.Entry(root, width=30) 
# Se coloca el campo de entrada en la ventana principal.
entry_nombre.pack(pady=5) 




# Crear una etiqueta con el texto "Categoría"
label_categoria = tk.Label(root, text="Categoría")
label_categoria.pack(pady=5)
entry_categoria = tk.Entry(root, width=30)
entry_categoria.pack(pady=5)


# Crear una etiqueta con el texto "Precio"
label_precio = tk.Label(root, text="Precio")
label_precio.pack(pady=5)
entry_precio = tk.Entry(root, width=30)
entry_precio.pack(pady=5)


# Crear una etiqueta con el texto "Stock"
label_stock = tk.Label(root, text="Stock")
label_stock.pack(pady=5)
entry_stock = tk.Entry(root, width=30)
entry_stock.pack(pady=5)



# Array para guardar los productos registrados
productos = []


def registrar_productos():
    # Obtener los valores ingresados en los campos de entrada.
    nombre = entry_nombre.get()
    categoria = entry_categoria.get()
    precio = entry_precio.get()
    stock = entry_stock.get()
    
    
    # Validar que los campos no estén vacíos.
    if nombre and categoria and precio and stock:
        try:
            # convertimos el precio y el stock a float e int respectivamente.
            precio = float(precio)
            stock = int(stock)
            
            # Se añade una tupla con los datos del producto a la lista productos.
            productos.append((nombre, categoria, precio, stock))
            
            # Se muestra un mensaje de información con el nombre del producto registrado.
            # showinfo(titulo, mensaje) muestra un mensaje de información, equivalente a un alert() en JavaScript.
            message.showinfo("Registro Exitoso", f"Producto '{nombre}' registrado correctamente.") 
            
            
            # Se limpian los campos de entrada.
            # delete(posicion_inicial, posicion_final) borra el texto en el campo de entrada.
            # tk.END es una constante que representa la posición final del texto en el campo de entrada.
            entry_nombre.delete(0, tk.END)
            entry_categoria.delete(0, tk.END)
            entry_precio.delete(0, tk.END)
            entry_stock.delete(0, tk.END)
        except ValueError: # Se captura la excepción ValueError si ocurre un error al convertir el precio o el stock.
            # Se muestra un mensaje de error si ocurre un error al convertir el precio o el stock.
            message.showerror("Error", "El precio y/o el stock deben ser números.")
    else: # Se muestra un mensaje de advertencia si hay campos vacíos.
        message.showwarning("Advertencia", "Todos los campos son obligatorios.")



# Boton para registrar productos
# Crear un botón con el texto "Registrar" y asignarle la función registrar_productos.
#              tk.Button(Ventana, Texto, Comando)
button_registrar = tk.Button(root, text="Registrar", command=registrar_productos)
button_registrar.pack(pady=5, ipadx=10, ipady=5) # Se coloca el botón en la ventana principal.




# creamos una funcion que nos permita visualizar los productos registrados
def visualizar_productos():
    # Crear una ventana secundaria para mostrar los productos registrados y colocarla superpuesta a la ventana principal.
    #             tk.Toplevel(Ventana_a_superponer)
    ventana_productos = tk.Toplevel(root)
    ventana_productos.title("Productos Registrados")
    ventana_productos.geometry("1280x720")

    # creamos la tabla en la que se mostraran los productos registrados
    #             ttk.Treeview(Ventana_donde_se_muestra, columnas=(nombres, de, las, columnas), show="headings")
    tabla = ttk.Treeview(ventana_productos, columns=("Nombre", "Categoría", "Precio", "Stock"), show="headings")

    # Configurar las columnas de la tabla.
    #             tabla.heading(columna, Texto)
    tabla.heading("Nombre", text="Nombre")
    tabla.heading("Categoría", text="Categoría")
    tabla.heading("Precio", text="Precio")
    tabla.heading("Stock", text="Stock")

    # Insertamos los valores registrados en el array de productos a la tabla
    for producto in productos:
        #            tabla.insert(padre, posicion, valores=(valores, de, la, fila))
        tabla.insert("", tk.END, values=producto)

    # Agregar la tabla a la ventana secundaria.
    # expand=True: permite que la tabla se expanda para llenar el espacio disponible.
    # fill=tk.BOTH: permite que la tabla se expanda tanto horizontal como verticalmente.
    tabla.pack(expand=True, fill=tk.BOTH)



# Boton para visualizar productos que se muestra solo cuando hay productos registrados
# if productos:
button_visualizar = tk.Button(root, text="Visualizar Productos", command=visualizar_productos)
button_visualizar.pack(pady=5, ipadx=10, ipady=5)




# Ejecutamos el buble principal de la aplicacion

# Este método se encarga de mostrar la ventana principal y de ejecutar el bucle principal de la aplicación, que se encarga de escuchar y procesar los eventos de la interfaz gráfica.
root.mainloop() 