'use strict'

const Model = require('trails/model')

/**
 * @module Token
 * @description to store user jwt token
 */
module.exports = class Token extends Model {

 static config () {

    return {
      options: {
        //underscored: true,
        classMethods: {
          //If you need associations, put them here
          associate: (models) => {
            //More information about associations here : http://docs.sequelizejs.com/en/latest/docs/associations/
            models.Token.belongsTo(models.User, {
              targetKey: 'id',
              onDelete: 'CASCADE',
              onUpdate: 'NO ACTION',
              foreignKey: 'userid'
            })
          }
        }
      }
    }
  }

  static schema (app, Sequelize) {

    let { INTEGER, DATE, literal, TEXT } = Sequelize

    return {
      userid: {
        type: INTEGER,
      },
      token: {
        type: TEXT
      },
      createdAt: {
        type:DATE,
        field: 'createdAt',
        defaultValue: literal('NOW()'),
      },
      updatedAt: {
        type:DATE,
        field: 'updatedAt',
        defaultValue: literal('NOW()'),
      },
    }
  }
}
