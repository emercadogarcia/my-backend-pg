
const { Model, DataTypes, Sequelize } = require('sequelize');

//const { CATEGORY_TABLE } = require('./category.model');

const DATAXLS_TABLE = 'dataxls';

const DataxlsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE
  },
  trimestre: {
    type: DataTypes.STRING(25),
    allowNull:false,
  },
  empresa: {
    type: DataTypes.STRING(70),
    allowNull:false,
  },
  regsanitario: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  tipoproducto: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  presentacion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  factorconv: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  materiaprima: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  fechaAlta: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_alta',
    defaultValue: Sequelize.NOW,
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    OnDelete: 'SET NULL'
  }
}

class Product extends Model {
  static associate(models) {
    //asocciate
    this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }

  module.exports = { Product, ProductSchema, PRODUCT_TABLE };

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


