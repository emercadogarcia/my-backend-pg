CREATE TABLE task (
	id serial PRIMARY KEY,
	title VARCHAR ( 250 ) NOT NULL,
	completed boolean DEFAULT false
);

CREATE TABLE datosxls	(
  id serial PRIMARY KEY,
  fecha_alta TIMESTAMP,
  fecha	DATE ,
  empresa	VARCHAR(50) NOT NULL,
  trimestre	VARCHAR(25) NOT NULL,
  regsanitario VARCHAR(30) NOT NULL,
  tipoproducto VARCHAR(15) NOT NULL,
  presentacion VARCHAR(50) NOT NULL,
  factorconv DECIMAL,
  materiaprima DECIMAL,
  clierazonsocial VARCHAR(50),
  codigouni VARCHAR(20),
  facturadoc VARCHAR(20),
  almacensalreg VARCHAR(50),
  regionalentrega VARCHAR(50),
  saldoanterior DECIMAL,
  importacionprod DECIMAL,
  importmatprima DECIMAL,
  fabricacion DECIMAL,
  devolucion DECIMAL,
  ventas DECIMAL,
  distsucursales DECIMAL,
  bajadestruccion DECIMAL,
  saldofinal DECIMAL,
  usuario_alta VARCHAR(20)
);


