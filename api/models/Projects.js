'use strict'

const Model = require('trails/model')

/**
 * @module Projects
 * @description Users Projects
 */
module.exports = class Projects extends Model {

  static config (app, Sequelize) {
    return {
      options: {
        //underscored: true,
        classMethods: {
          //If you need associations, put them here
          associate: (models) => {
            //More information about associations here : http://docs.sequelizejs.com/en/latest/docs/associations/
            models.Projects.belongsTo(models.User, {
              targetKey: 'id',
              onDelete: 'CASCADE',
              onUpdate: 'NO ACTION',
              foreignKey: 'userid'
            });
            models.Projects.belongsTo(models.Categories, {
              targetKey: 'id',
              onDelete: 'CASCADE',
              onUpdate: 'NO ACTION',
              foreignKey: 'cid'
            });
          }
        }
      }
    }
  }

  static schema (app, Sequelize) {
    let { INTEGER, STRING, TEXT, DATE, literal } = Sequelize;
    return {
      userid: {
        type: INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      cid: {
        type: INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      project_title: {
        type: STRING,
        allowNull: false,
        defaultValue: ''
      },
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
