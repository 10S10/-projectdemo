'use strict'

const Model = require('trails/model')

/**
 * @module User
 * @description main User table
 */
module.exports = class User extends Model {
static config(app, Sequelize) {
    return {
      options: {

        classMethods: {

        },

        //underscored: true,
        hooks:{
          beforeCreate: (values,options) =>{
            //console.log("before create values",values);

            //values.created_at=Sequelize.literal('NOW()')
            //values.password=crypto.createHash('md5').update("xTrEm35A1t"+values.password).digest('hex');
          },
          beforeUpdate: (values,options) =>{
            //values.updated_at=Sequelize.literal('NOW()')
          }
        }
      }
    }
  }

  static schema(app, Sequelize) {

    let { STRING, INTEGER, DATE, literal, BOOLEAN } = Sequelize

    return {
      ipaddress: { type: STRING, allowNull: false, defaultValue: '' },
      username: {
        type: STRING,
        allowNull: false,
        //unique: true
      },
      password: { type: STRING, allowNull: false, defaultValue: '' },
      salt: { type: STRING, allowNull: false, defaultValue: '' },
      email: { type: STRING, allowNull: false, defaultValue: '' },
      first_name: { type: STRING, allowNull: false, defaultValue: ''},
      last_name: { type: STRING, allowNull: false, defaultValue: '' },
      city: { type: STRING, allowNull: false, defaultValue: '' },
      state: { type: STRING, allowNull: false, defaultValue: '' },
      zip_code: { type: STRING, allowNull: false, defaultValue: '' },
      country: { type: INTEGER, allowNull: false, defaultValue: '500' },
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
