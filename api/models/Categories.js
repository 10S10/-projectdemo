'use strict'

const Model = require('trails/model')

/**
 * @module Categories
 * @description Categories
 */
module.exports = class Categories extends Model {

  static config (app, Sequelize) {
    return {
      options: {
        //underscored: true,
      }
    }
  }

  static schema (app, Sequelize) {
    let { INTEGER, STRING, TEXT, DATE, literal } = Sequelize;
    return {
      category_name: {type: STRING, unique: true},
      createdAt: {
        type: DATE,
        field: 'createdAt',
        defaultValue: literal('NOW()'),
      },
      updatedAt: {
        type: DATE,
        field: 'updatedAt',
        defaultValue: literal('NOW()'),
      },
    }
  }
}
