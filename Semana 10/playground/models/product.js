'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Product, {foreignKey: 'product_id', as: 'pro'})
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stok: DataTypes.INTEGER,
    pict_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};