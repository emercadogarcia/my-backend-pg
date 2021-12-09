
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
    allowNull: true,
    field: 'materia_prima',
    defaultValue: 0,
  },
  clienteRazonsocial: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'cliente_razonsocial'
  },
  detalleMov: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'detalle_movimiento'
  },
  codigoUni: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'codigo_uni'
  },
  nordenProd: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'numero_orden_prod'
  },
  facturaDoc: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'factura_documento'
  },
  almacenSalreg: {
    allowNull: false,
    type: DataTypes.STRING(50),
    field: 'almacen_salida_reg'
  },
  regionalEntrega: {
    allowNull: true,
    type: DataTypes.STRING(50),
    field: 'regional_entrega'
  },
  saldoAnterior: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'saldo_anterior',
    defaultValue: 0,
  },
  importacionProd: {
    allowNull: true,
    type: DataTypes.REAL,
    field: 'importacion_producto',
    defaultValue: 0,
  },
  importMatprima: {
    allowNull: true,
    type: DataTypes.REAL,
    field: 'import_materia_prima',
    defaultValue: 0,
  },
  cantFabricada: {
    allowNull: true,
    type: DataTypes.REAL,
    field: 'cantidad_fabricada',
    defaultValue: 0,
  },
  cantLiberada: {
    allowNull: true,
    type: DataTypes.REAL,
    field: 'cantidad_liberada',
    defaultValue: 0,
  },
  devolucion: {
    allowNull: false,
    type: DataTypes.REAL,
    defaultValue: 0,
  },
  ventas: {
    allowNull: false,
    type: DataTypes.REAL,
    defaultValue: 0,
  },
  distribucionSuc: {
    allowNull: true,
    type: DataTypes.REAL,
    field: 'dist_sucursales',
    defaultValue: 0,
  },
  destruccion: {
    allowNull: true,
    type: DataTypes.REAL,
    defaultValue: 0,
  },
  saldoFinalprevio: {
    allowNull: true,
    type: DataTypes.REAL,
    field: 'saldo_final_previo',
    defaultValue: 0,
  },
  saldoFinal: {
    allowNull: false,
    type: DataTypes.REAL,
    field: 'saldo_final',
    defaultValue: 0,
  },
  usuarioAlta: {
    allowNull: true,
    type: DataTypes.STRING(15),
    field: 'usuario_alta',
    defaultValue:'ADMIN'
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
  static associate() {
    //asocciate
    //this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DATAXLS_TABLE,
      modelName: 'Dataxls',
      timestamps: false
    }
  }
}

 module.exports = { Dataxls, DataxlsSchema, DATAXLS_TABLE };
