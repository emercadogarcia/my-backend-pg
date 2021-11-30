const Joi = require('joi');

const id = Joi.number().integer();
const fecha = Joi.date();
const empresa = Joi.string().min(3).max(70);
const trimestre = Joi.string().min(1).max(25);
const regsanitario = Joi.string().max(30);
const tipoproducto = Joi.string().max(20);
const presentacion = Joi.string().max(100);
const factrconv = Joi.number().integer().min(1);
const materiaPrima = Joi.number()
const clienteRazonsocial = Joi.string().max(50);
const codigoUni = Joi.string().max(20);
const nordenProd = Joi.string().max(20);
const facturaDoc = Joi.string().max(20);
const almacenSalreg = Joi.string().max(50);
const regionalEntrega = Joi.string().max(50);
const saldoAnterior = Joi.number();
const importacionProd = Joi.number();
const importMatprima = Joi.number();
const cantFabricada = Joi.number();
const cantLiberada = Joi.number();
const devolucion = Joi.number();
const ventas = Joi.number();
const distribucionSuc = Joi.number();
const destruccion = Joi.number();
const saldoFinal = Joi.number();


const categoryId = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createDataxlsSchema = Joi.object({
  fecha: fecha.required(),
  empresa: empresa.required(),
  trimestre: trimestre.required(),
  regsanitario: regsanitario.required(),
  tipoproducto: tipoproducto.required(),
  presentacion: presentacion.required(),
  factrconv: factrconv.required(),
});

const updateDataxlsSchema = Joi.object({
  fecha: fecha.required(),
  empresa: empresa.required(),
  trimestre: trimestre.required(),
  regsanitario: regsanitario.required(),
  tipoproducto: tipoproducto.required(),
  presentacion: presentacion.required(),
  factrconv: factrconv.required(),
});

const getDataxlsSchema = Joi.object({
  id: id.required(),
});

const queryDataxlsSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.number().integer(),
    then: Joi.required()
  })
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema }
