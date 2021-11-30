
const { datatype } = require('faker');
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
  materiaPrima: {
    type: DataTypes.REAL,
    allowNull: false,
    field: 'materia_prima'
  },
  clienteRazonsocial: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'cliente_razonsocial'
  },
  codigoUni: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'codigo_uni'
  },
  nordenProd: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'numero_orden_prod'
  },
  facturaDoc: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'factura_documento'
  },
  almacenSalreg: {
    allowNull: false,
    type: DataTypes.STRING(50),
    field: 'almacen_salida_reg'
  },
  regionalEntrega: {
    allowNull: false,
    type: DataTypes.STRING(50),
    field: 'regional_entrega'
  },
  saldoAnterior: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'saldo_anterior'
  },
  importacionProd: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'importacion_producto'
  },
  importMatprima: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'import_materia_prima'
  },
  cantFabricada: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'cantidad_fabricada'
  },
  cantLiberada: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'cantidad_liberada'
  },
  devolucion: {
    allowNull: false,
    type: DataTypes.REAL,
  },
  ventas: {
    allowNull: false,
    type: DataTypes.REAL,
  },
  distribucionSuc: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'dist_sucursales'
  },
  destruccion: {
    allowNull: false,
    type: DataTypes.REAL,
  },
  saldoFinal: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'ssaldo_final'
  },
  usuarioAlta: {
    allowNull: false,
    type: DataTypes.STRING(15),
    field: 'fecha_alta',
    defaultValue: Sequelize.NOW,
  },
  fechaAlta: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_alta',
    defaultValue: Sequelize.NOW,
  }

  // categoryId: {
  //   field: 'category_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: CATEGORY_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   OnDelete: 'SET NULL'
  // }
}

class Dataxls extends Model {
  static associate(models) {
    //asocciate
    //this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DATAXLS_TABLE,
      modelName: 'Datoxls',
      timestamps: false
    }
  }
}

 module.exports = { Dataxls, DataxlsSchema, DATAXLS_TABLE };

