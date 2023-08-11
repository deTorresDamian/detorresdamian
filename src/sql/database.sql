CREATE DATABASE libreria2;
USE libreria2;


CREATE TABLE socios (
    id_socios INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (50),
    apellido VARCHAR (50),
    fecha_nac VARCHAR (20),
    id_genero INT, 
    dni VARCHAR (50),
    direccion VARCHAR (50),
    localidad VARCHAR (50),
    id_provincia INT,
    telefono VARCHAR (50),
    email VARCHAR (50),
    fecha_alta VARCHAR (20),
    id_categoria INT
);

CREATE TABLE generos (
    id_genero INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    genero VARCHAR (50)
);

CREATE TABLE categorias (
    id_categoria INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR (50)
);

CREATE TABLE provincias (
    id_provincia INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    provincia VARCHAR (20)
);

CREATE TABLE libros (
    id_libro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (50),
    autor VARCHAR (50),
    editorial VARCHAR (50),
    genero_lit VARCHAR (50)
);

CREATE TABLE estado (
    id_estado INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR (20)
);

CREATE TABLE prestamos (
    id_prestamo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_libro INT,
    id_socios INT,
    fecha_ret VARCHAR (20),
    fecha_dev VARCHAR (20),
    id_estado INT
);


DESCRIBE estado;
DESCRIBE prestamos;
DESCRIBE libros;
DESCRIBE socios;
DESCRIBE categorias;
DESCRIBE generos;
DESCRIBE provincias;

/*INSERT INTO clientes (nombre, apellido) values ('Maria', 'Perez');
SELECT * FROM clientes;*/

