-- Esto es un comentario en SQL


-- Para crear una base de datos usamos:
CREATE DATABASE nombre_de_la_bd



-- Para crear una tabla usamos CREATE TABLE nombre_de_la_tabla:

-- Tabla para almacenar usuarios
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    edad INT,
    -- En este caso el correo con la propiedad UNIQUE significa que sera un campo unico, es decir que no pueden haber dos correos iguales.
    correo VARCHAR(255) UNIQUE,
    telefono VARCHAR(20),
    clave VARCHAR(255),
    direccion VARCHAR(255),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

-- Tabla para almacenar productos
CREATE TABLE Productos(
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255),
    precio FLOAT(5,2) NOT NULL,
    fecha_registro TIMESTAMP,
    url_imagen VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);




-- Para insertar datos en una tabla usamos INSERT INTO nombre_de_la_tabla (columna1, columna2, columna3, ...) VALUES (valor1, valor2, valor3, ...)
INSERT INTO usuarios (nombre, apellido, edad, correo, telefono, clave, direccion)
VALUES ("Diego","Rodriguez", 28, "diego@gmail.com", "+584121234567", "admin123", "calle imaginaria, casa falsa 1");


-- Para insertar varios registros en la tabla usuarios seria de la siguiente manera:
INSERT INTO usuarios (nombre, apellido, edad, correo, telefono, clave, direccion)
VALUES 
("Diego","Rodriguez", 35, "diego.rodriguez@gmail.com", "+584121111111", "admin123", "calle imaginaria, casa falsa 1"),
("Maria","Perez", 22, "maria.perez2@example.com", "+584121111112", "maria2023", "avenida principal, edificio alfa 2"),
("Juan","Lopez", 27, "juan.lopez2@example.com", "+584121111113", "juan2023", "calle secundaria, apartamento beta 3"),
("Ana","Gomez", 23, "ana.gomez2@example.com", "+584121111114", "ana2023", "calle tercera, casa delta 4"),
("Carlos","Martinez", 36, "carlos.martinez2@example.com", "+584121111115", "carlos2023", "avenida cuarta, edificio gamma 5"),
("Lucia","Fernandez", 28, "lucia.fernandez2@example.com", "+584121111116", "lucia2023", "calle quinta, apartamento epsilon 6"),
("Pedro","Garcia", 31, "pedro.garcia2@example.com", "+584121111117", "pedro2023", "calle sexta, casa zeta 7"),
("Sofia","Hernandez", 29, "sofia.hernandez2@example.com", "+584121111118", "sofia2023", "avenida septima, edificio eta 8"),
("Miguel","Torres", 32, "miguel.torres2@example.com", "+584121111119", "miguel2023", "calle octava, apartamento theta 9"),
("Laura","Ramos", 30, "laura.ramos2@example.com", "+584121111120", "laura2023", "calle novena, casa iota 10"),
("Jorge","Diaz", 34, "jorge.diaz2@example.com", "+584121111121", "jorge2023", "avenida decima, edificio kappa 11"),
("Elena","Morales", 25, "elena.morales2@example.com", "+584121111122", "elena2023", "calle undecima, apartamento lambda 12"),
("Luis","Vega", 30, "luis.vega2@example.com", "+584121111123", "luis2023", "calle duodecima, casa mu 13"),
("Carmen","Mendoza", 29, "carmen.mendoza2@example.com", "+584121111124", "carmen2023", "avenida decimotercera, edificio nu 14"),
("Fernando","Soto", 33, "fernando.soto2@example.com", "+584121111125", "fernando2023", "calle decimocuarta, apartamento xi 15");



-- Para insertar datos en la tabla productos usamos:
INSERT INTO productos (nombre, precio, url_imagen)
VALUES ("Teclado Mecanico", 109.99, "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png?v=1")


-- Para insertar varios registros en una tabla seria de la siguiente manera:
INSERT INTO productos (nombre, descripcion, precio, url_imagen)
VALUES 
	('Monitor curvo 34"', "Monitor de alto rendiminento con amplio rango visual", 350, "https://m.media-amazon.com/images/I/612nzGG630L._AC_UF894,1000_QL80_.jpg"),
    ("Audifonos gamer", "audifonos con luces rgm bonitas", 65, "https://coolboxpe.vtexassets.com/arquivos/ids/213354/HP869WS_1.jpg?v=637891369349030000"),
    ("Mouse ergonómico ","Mouse comodo para trabajar",40,"https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-vertical/gallery/mx-vertical-gallery-04.png?v=1"),
    ("Microfono Elgato", "Mifrofono profesional para studio/podcast/streaming", 250, "https://m.media-amazon.com/images/I/61Qk5PH7nuL._AC_UF894,1000_QL80_.jpg");



-- En caso de editar una tabla para actualizar una columna usamos ALTER TABLE nombre_de_la_tabla y MODIFY COLUMN nombre_de_la_columna tipo_de_dato
    ALTER TABLE productos MODIFY COLUMN precio FLOAT(5,2);

-- En caso de añadir una columna usamos ALTER TABLE nombre_de_la_tabla y ADD COLUMN nombre_de_la_columna tipo_de_dato
    ALTER TABLE productos ADD COLUMN stock INT;

-- En caso de eliminar una columna usamos ALTER TABLE nombre_de_la_tabla y DROP COLUMN nombre_de_la_columna
    ALTER TABLE productos DROP COLUMN stock;



-- ¿Como se puede acceder a los datos de una tabla?

-- Para seleccionar todos los datos de una tabla usamos:

-- 1) SELECT: para seleccionar en base a un criterio de busqueda
-- 2) El criterio de busqueda lo podemos configurar en base a lo que deseemos obtener, por ejemplo "*" se usa para seleccionar todas las columnas

-- Por ejemplo:
SELECT * FROM productos;


-- Tambien podemos especificar las columnas excactas que deseamos obtener
-- Por ejemplo:
SELECT nombre FROM productos;




-- En SQL tambien encontramos condicionales, operadores logicos y operadores de comparacion
-- Estos son: 
-- Condicionales: WHERE, ORDER BY, GROUP BY, HAVING, LIMIT, BETWEEN, IN, LIKE
-- Operadores de comparacion: =, !=., <>, >, <, >=, <=
-- Operadores logicos: AND, OR, NOT
-- Operadores aritmeticos: +, -, *, /, %
-- Agrupacion: COUNT, SUM, AVG, MIN, MAX, ROUND
-- Alias: AS

-- Para seleccionar datos en base a una condicion usamos WHERE
-- Por ejemplo:
SELECT * FROM productos WHERE precio > 100;


-- Mas Ejemplos de uso:

-- Seleccionar el nombre, apellido y correo de todas las personas con edades entre 18 (IN) y 30 (IN). - Resuelto por: Victor
SELECT nombre, apellido, correo FROM usuarios WHERE edad >= 18 AND edad <= 30;


-- Seleccionar el id, nombre, apellido, edad, telefono de todas las personas cuyo nombre sea Victor o Diego o Jorge. - Resuelto por: Guillermo
SELECT id, nombre, apellido, edad FROM usuarios WHERE nombre = "Victor" OR nombre = "Diego" OR nombre = "Jorge";


-- Seleccionar el id, nombre, apellido, telefono de las personas con edad menor a 24 e id mayor a 8. - Resuelto por: Yaneisis
SELECT id, nombre, apellido, telefono FROM usuarios WHERE edad < 28 AND id > 8;


-- Seleccionar id, nombre, apellido, edad de todas las personas mayores a 24 ordenadas por nombre de manera ascendente.
SELECT id, nombre, apellido, edad FROM usuarios WHERE edad > 24 ORDER BY nombre ASC;



-- Agregamos una columna a la tabla usuarios llamada "estado" que sera de tipo varchar con longitud de 255 caracteres.
ALTER TABLE usuarios ADD COLUMN estado VARCHAR(255);


-- Actualizamos el estado de las personas con edades entre 25 y 28 a "activo" usando BETWEEN
UPDATE usuarios SET estado = "activo" WHERE edad BETWEEN 25 AND 28;



-- En SQL podemos utilizar listas de valores para realizar busquedas en base a una lista de valores, esto va de lamano con el operador IN.
-- Por ejemplo, para actualizar el pais de los usuarios con un apellido en especifico usamos:
UPDATE usuarios SET pais = "España" WHERE apellido IN ("Rodriguez", "Hernandez", "Diaz");

-- Esta consulta se lee: Actualiza la tabla usuarios y establece el pais a "España" donde el apellido del usuario sea uno de la lista ("Rodriguez", "Hernandez", "Diaz").


-- Actualizamos el pais de los usuarios con apellido "Gomez", "Martinez" y "Perez" y con edades entre 16 y 25.
UPDATE usuarios SET pais = "Colombia" WHERE apellido IN ("Gomez", "Martinez", "Perez") AND edad BETWEEN 16 AND 25;


-- Seleccionamos todos los usuarios con apellido "Martinez", "Gomez" y "Perez" y los ordenamos por pais de manera ascendente.
SELECT * FROM `usuarios` WHERE apellido IN ("Martinez", "Gomez", "Perez") ORDER BY pais ASC;


-- Podemos incluso realizar listas excluyentes, es decir, seleccionar todos los usuarios cuyo apellido no sea "Martinez", "Gomez" o "Perez".
SELECT * FROM `usuarios` WHERE apellido NOT IN ("Martinez", "Gomez", "Perez");






-- Para eliminar registros de una tabla usamos DELETE FROM nombre_de_la_tabla WHERE condicion
-- Por ejemplo:
DELETE FROM usuarios WHERE edad > 33;

-- Esta consulta se lee: Elimina de la tabla usuarios todos los registros donde la edad sea mayor a 33.





-- Para eliminar una tabla usamos DROP TABLE nombre_de_la_tabla
-- ATENCION: Esta accion es irreversible y elimina todos los datos de la tabla, solo en XAMPP podras visualizar una ventana de confirmacion.


-- Para eliminar una base de datos usamos DROP DATABASE nombre_de_la_bd
-- ATENCION: Esta accion es irreversible y elimina todos los datos de la base de datos, en esta ocasion no se muestra una ventana de confirmacion.














-- Relaciones y uniones de tablas

-- Existen diferentes tipos de relaciones entre tablas, las mas comunes son:
-- Uno a uno (1:1)
-- Uno a muchos (1:N)
-- Muchos a muchos (N:N)
-- Muchos a uno (N:1)





-- Uniones de tablas, en este apartado crearemos 3 tablas: estudiantes, cursos e inscripciones.

-- TABLA ESTUDIANTES
CREATE TABLE estudiantes (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(15) NOT NULL,
    apellido VARCHAR (30) NOT NULL,
    edad INT,
    email VARCHAR(50) NOT NULL UNIQUE,
    ciudad VARCHAR(20),
    pais VARCHAR(25) NOT NULL,
    registrado TIMESTAMP,
    PRIMARY KEY (id)
);


-- TABLA CURSOS
CREATE TABLE cursos(
    id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100),
    precio INT(10),
    metodologia VARCHAR(20),
    creado TIMESTAMP,
    PRIMARY KEY(id)
);


-- TABLA INSCRIPCIONES
CREATE TABLE inscripciones(
    id INT NOT NULL AUTO_INCREMENT,
    id_estudiante INT NOT NULL,
    id_curso INT NOT NULL,
    registrado TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(id_estudiante) REFERENCES estudiantes(id), 
    FOREIGN KEY(id_curso) REFERENCES cursos(id)
);



-- Cargamos las tablas con datos

-- ESTUDIANTES (50 registros)
INSERT INTO estudiantes (nombre, apellido, edad, email, ciudad, pais)
VALUES 
    ("Diego", "Rodriguez", 27, "diego@lexpin.online", "Segovia", "España"),
    ("Luis", "Zambrano", 28, "luis@lexpin.online", "Maracaibo", "Venezuela"),
    ("Eduardo", "Avila", 27, "eduardo@lexpin.online", "Maracaibo", "Venezuela"),
    ("Semiramis", "Hernandez", 28, "semiramis@lexpin.online", "Medellin", "Colombia"),
    ("Javier", "García", 25, "javier@example.com", "Buenos Aires", "Argentina"),
    ("Camila", "Martínez", 23, "camila@example.com", "Santiago", "Chile"),
    ("Diego", "Silva", 22, "diego@example.com", "Lima", "Perú"),
    ("Valentina", "López", 24, "valentina@example.com", "Bogotá", "Colombia"),
    ("Lucas", "Rodríguez", 26, "lucas@example.com", "Montevideo", "Uruguay"),
    ("Carlos", "Hernández", 27, "carlos@example.com", "Guatemala City", "Guatemala"),
    ("Laura", "Gómez", 25, "laura@example.com", "San Salvador", "El Salvador"),
    ("Mateo", "Díaz", 23, "mateo@example.com", "Tegucigalpa", "Honduras"),
    ("Ana", "Ramírez", 22, "ana@example.com", "Panamá City", "Panamá"),
    ("José", "Pérez", 24, "jose@example.com", "Quito", "Ecuador"),
    ("Renata", "Fernández", 26, "renata@example.com", "Asunción", "Paraguay"),
    ("Sofía", "González", 25, "sofia@example.com", "Managua", "Nicaragua"),
    ("Miguel", "Torres", 24, "miguel@example.com", "Tegucigalpa", "Honduras"),
    ("Isabella", "Morales", 23, "isabella@example.com", "San Salvador", "El Salvador"),
    ("Juan", "Cruz", 25, "juan@example.com", "Ciudad de México", "México"),
    ("Fernanda", "Dominguez", 26, "fernanda@example.com", "Buenos Aires", "Argentina"),
    ("Andrés", "Vargas", 24, "andres@example.com", "Lima", "Perú"),
    ("Valeria", "Alvarez", 23, "valeria@example.com", "Montevideo", "Uruguay"),
    ("Martín", "Suárez", 25, "martin@example.com", "Santiago", "Chile"),
    ("Paula", "Rojas", 22, "paula@example.com", "Bogotá", "Colombia"),
    ("Emilio", "Mendoza", 26, "emilio@example.com", "San José", "Costa Rica"),
    ("Natalia", "Castro", 24, "natalia@example.com", "Guatemala City", "Guatemala"),
    ("Alejandro", "Ortega", 23, "alejandro@example.com", "Panamá City", "Panamá"),
    ("Javier", "García", 24, "javiergarcia@example.com", "Córdoba", "Argentina"),
    ("Camila", "Martínez", 22, "camilamartinez@example.com", "Valparaíso", "Chile"),
    ("Diego", "Silva", 21, "diegosilva@example.com", "Trujillo", "Perú"),
    ("Valentina", "López", 23, "valentinalopez@example.com", "Cali", "Colombia"),
    ("Lucas", "Rodríguez", 25, "lucasrodriguez@example.com", "Punta del Este", "Uruguay"),
    ("Carlos", "Hernández", 26, "carloshernandez@example.com", "Antigua Guatemala", "Guatemala"),
    ("Laura", "Gómez", 24, "lauragomez@example.com", "Santa Tecla", "El Salvador"),
    ("Mateo", "Díaz", 22, "mateodiaz@example.com", "La Ceiba", "Honduras"),
    ("Ana", "Ramírez", 21, "anaramirez@example.com", "Chitré", "Panamá"),
    ("José", "Pérez", 23, "joseperez@example.com", "Cuenca", "Ecuador"),
    ("Renata", "Fernández", 25, "renatafernandez@example.com", "Encarnación", "Paraguay"),
    ("Sofía", "González", 24, "sofiagonzalez@example.com", "León", "Nicaragua"),
    ("Miguel", "Torres", 23, "migueltorres@example.com", "Comayagua", "Honduras"),
    ("Isabella", "Morales", 22, "isabellamorales@example.com", "Santa Ana", "El Salvador"),
    ("Juan", "Cruz", 24, "juancruz@example.com", "Puebla", "México"),
    ("Fernanda", "Dominguez", 25, "fernandadominguez@example.com", "Rosario", "Argentina"),
    ("Andrés", "Vargas", 23, "andresvargas@example.com", "Arequipa", "Perú"),
    ("Valeria", "Alvarez", 22, "valeriaalvarez@example.com", "Paysandú", "Uruguay"),
    ("Martín", "Suárez", 24, "martinsuarez@example.com", "Concepción", "Chile"),
    ("Paula", "Rojas", 21, "paularojas@example.com", "Bucaramanga", "Colombia"),
    ("Emilio", "Mendoza", 25, "emiliomendoza@example.com", "Heredia", "Costa Rica"),
    ("Natalia", "Castro", 23, "nataliacastro@example.com", "Flores", "Guatemala"),
    ("Alejandro", "Ortega", 22, "alejandroortega@example.com", "David", "Panamá");



-- CURSOS (10 registros)
INSERT INTO cursos (titulo, precio, metodologia) 
VALUES
    ('Desarrollo Web', 99, 'Online'),
    ('Introducción a la Inteligencia Artificial', 120, 'Online'),
    ('Fundamentos de Programación', 80, 'Presencial'),
    ('Aprendizaje Automático Avanzado', 150, 'Online'),
    ('Ciberseguridad y Ética', 110, 'Online'),
    ('Diseño de Interfaces de Usuario', 95, 'Presencial'),
    ('Desarrollo de Aplicaciones Móviles', 105, 'Online'),
    ('Cloud Computing Fundamentals', 90, 'Online'),
    ('Blockchain y Criptomonedas', 130, 'Online'),
    ('Análisis de Datos con Python', 100, 'Presencial');



-- INSCRIPCIONES (50 registros)
INSERT INTO inscripciones(id_estudiante, id_curso)
VALUES
    (1,1), -- Diego - Desarrollo Web
    (2,1), -- Luis - Desarrollo Web
    (3,2), -- Eduardo - Introducción a la Inteligencia Artificial
    (4,2), -- Semiramis - Introducción a la Inteligencia Artificial
    (5,3), -- Javier - Fundamentos de Programación
    (6,3), -- Camila - Fundamentos de Programación
    (7,4), -- Diego - Aprendizaje Automático Avanzado
    (8,4), -- Valentina - Aprendizaje Automático Avanzado
    (9,5), -- Lucas - Ciberseguridad y Ética
    (10,5), -- Carlos - Ciberseguridad y Ética
    (11,6), -- Laura - Diseño de Interfaces de Usuario
    (12,6), -- Mateo - Diseño de Interfaces de Usuario
    (13,7), -- Ana - Desarrollo de Aplicaciones Móviles
    (14,7), -- José - Desarrollo de Aplicaciones Móviles
    (15,8), -- Renata - Cloud Computing Fundamentals
    (16,8), -- Sofía - Cloud Computing Fundamentals
    (17,9), -- Miguel - Blockchain y Criptomonedas
    (18,9), -- Isabella - Blockchain y Criptomonedas
    (19,10), -- Juan - Análisis de Datos con Python
    (20,10), -- Fernanda - Análisis de Datos con Python
    (21,1), -- Andrés - Desarrollo Web
    (22,1), -- Valeria - Desarrollo Web
    (23,2), -- Martín - Introducción a la Inteligencia Artificial
    (24,2), -- Paula - Introducción a la Inteligencia Artificial
    (25,3), -- Emilio - Fundamentos de Programación
    (26,3), -- Natalia - Fundamentos de Programación
    (27,4), -- Alejandro - Aprendizaje Automático Avanzado
    (28,4), -- Javier - Aprendizaje Automático Avanzado
    (29,5), -- Camila - Ciberseguridad y Ética
    (30,5), -- Diego - Ciberseguridad y Ética
    (31,6), -- Valentina - Diseño de Interfaces de Usuario
    (32,1), -- ETC...
    (33,3),
    (34,2),
    (35,1),
    (36,2),
    (37,3),
    (38,4),
    (39,1),
    (40,2),
    (41,3),
    (42,4),
    (43,2),
    (44,1),
    (45,4),
    (46,3),
    (47,2),
    (48,1),
    (49,3),
    (50,4);





-- Usando LIKE para realizar busquedas en base a patrones de expresiones regulares
SELECT * FROM estudiantes
    WHERE email LIKE "%@lexpin.online";




/* Union de la tablas estudiantes e inscripciones */
SELECT nombre, apellido, edad, ciudad, pais, email, id_estudiante, id_curso, inscripciones.registrado, titulo, metodologia
	FROM estudiantes
    INNER JOIN inscripciones
    ON estudiantes.id = inscripciones.id_estudiante
	ORDER BY estudiantes.nombre ASC;







/* Union de las tablas estudiantes, cursos e inscripciones */
SELECT id_estudiante, nombre, apellido, edad, ciudad, pais, email, id_curso, inscripciones.registrado, titulo, metodologia
	FROM estudiantes
    INNER JOIN inscripciones 
    	ON estudiantes.id = inscripciones.id_estudiante
	INNER JOIN cursos 
    	ON inscripciones.id_curso = cursos.id
	ORDER BY estudiantes.nombre ASC;










-- Agregar la columna url_imagen a la tabla estudiantes
ALTER TABLE estudiantes ADD COLUMN url_imagen VARCHAR(255);

-- cargar la tabla estudiantes con datos de url_imagen en base al sexo del estudiante
UPDATE estudiantes
SET url_foto = CASE
    -- URLs para hombres
    WHEN nombre IN ('Diego', 'Luis', 'Eduardo', 'Javier', 'Lucas', 'Carlos', 'Mateo', 'José', 'Andrés', 'Martín', 'Emilio', 'Miguel', 'Juan', 'Alejandro')
        THEN 'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg'
    
    -- URLs para mujeres
    WHEN nombre IN ('Semiramis', 'Camila', 'Valentina', 'Laura', 'Ana', 'Renata', 'Sofía', 'Fernanda', 'Paula', 'Isabella', 'Valeria', 'Natalia')
        THEN 'https://img.freepik.com/foto-gratis/retrato-chica-linda-cabello-marron-renderizado-3d_1142-43502.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1718323200&semt=ais_user'
    
    -- URLs adicionales para hombres (por variabilidad)
    WHEN nombre IN ('Martín', 'Carlos')
        THEN 'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671122.jpg'
    
    -- URLs adicionales para mujeres (por variabilidad)
    WHEN nombre IN ('Paula', 'Renata')
        THEN 'https://img.freepik.com/fotos-premium/avatar-nina-dibujos-animados-diseno-personajes-3d-chica-linda_432516-5512.jpg'
    
    ELSE NULL
END;