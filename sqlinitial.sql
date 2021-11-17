CREATE TABLE task (
	id serial PRIMARY KEY,
	title VARCHAR ( 250 ) NOT NULL,
	completed boolean DEFAULT false
);

CREATE TABLE datosxls	{
  id serial PRIMARY KEY,
  fecha_alta DATE DEFAULT sysdate,
  fecha	DATE ,
  empresa	VARCHAR(50) NOT NULL,
  trimestre	VARCHAR(25) NOT NULL,
  regsanitario VARCHAR(30) NOT NULL,
  tipoproducto VARCHAR(15) NOT NULL,
  presentacion VARCHAR(50) NOT NULL,
  factorconv NUMBER,
  materiaprima NUMBER,
  clierazonsocial VARCHAR,
  codigouni VARCHAR,
  facturadoc VARCHAR,
  almacensalreg VARCHAR,
  regionalentrega VARCHAR,
  saldoanterior NUMBER,
  importacionprod NUMBER,
  importmatprima NUMBER,
  fabricacion NUMBER,
  devolucion NUMBER,
  ventas NUMBER,
  distsucursales NUMBER,
  bajadestruccion NUMBER,
  saldofinal NUMBER,
  usuario_alta VARCHAR(20)
};
