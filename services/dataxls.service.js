const faker = require('faker');
const { Op } = require('sequelize');
const boom = require('@hapi/boom');
// const pool = require('../libs/postgres.pool'); // se cambia por ORM
//const sequelize = require('../libs/sequelize'); /// para sql directo
const { models } = require('../libs/sequelize');

class DataXlsService {

  constructor(){}

  async create(data) {
    const newDataLoad = await models.Dataxls.create(data);
    return newDataLoad;
  }

  async find(query) {
    // const query = 'SELECT * FROM task';
    // const [data] = await sequelize.query(query);  //ya no usamos metada ya que contiene mas datos
    // return data;
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if ( limit && offset ) {
      options.limit = limit;
      options.offset = offset;
    }

    const { price } = query;
    if (price) {
      options.where.price = price;
    }
    const { price_min, price_max } = query;
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }

    const products = await models.Product.findAll( options );
    return products;
  }

  async findOne(id) {
    const products = await models.Product.findByPk(id, {
      include: ['category']
    });
    return products;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = DataXlsService;
