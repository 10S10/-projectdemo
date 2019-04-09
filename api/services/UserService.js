'use strict'

const Service = require('trails/service')
const async = require('async')
const _ = require('lodash')
const moment = require('moment')

/**
 * @module UserService
 * @description All User services
 */
module.exports = class UserService extends Service {

  /**
   * Validate password
   * @param username
   * @param password
   * @returns {Promise.<TResult>}
   */
  validatePassword(userid,password){

    let { sequelize } = this.app.orm.User

    let sql = `select * from user where md5(CONCAT(md5('${password}'),salt))=password and id=${userid}`
    return sequelize
      .query(sql,
        {
          bind: [],
          type: sequelize.QueryTypes.SELECT
        })
      .then((result)=> {
        if(_.isEmpty(result))
          throw new Error('Password does not match!')
        return result[0]
      })
  }

  /**
   * Check user is exist or not
   * @param username
   * @param password
   * @returns {Promise.<TResult>}
   */
  checkUser(username,password){

    return this
    .userExists({username})
    .then(async(user)=>{

      let matchPassword = await this.validatePassword(user.id,password)
      return _.omit(user,'password')
    })
  }

  /**
   * Check User Exists
   * @param criteria - Object {email:abc.com,id:1}
   * @returns {*}
   */
  userExists(criteria){

    let { User } = this.app.orm;

    return User
      .findOne({where:criteria})
      .then(user=>{
        if(_.isEmpty(user))
          throw new Error(`User not found!`)
        return user.toJSON()
      })
  }

  /**
   * get list of projects
   * @param fields
   * @returns {Promise.<TResult>|*}
   */
  getProjectsList(fields){
    let {sequelize} = this.app.orm.Projects
    let offsetCond = ``, orderSql = ``

    if (fields.sort && fields.order) {
      orderSql = ` ORDER BY '${fields.sort}' ${fields.order}`
    }
    else {
      orderSql = ` ORDER BY 'createdAt' DESC`
    }

    if (fields.limit)
      offsetCond = ` ${offsetCond} LIMIT ${fields.limit}`

    if (_.has(fields, 'start'))
      offsetCond = `${offsetCond} OFFSET ${fields.start}`

    let sql = `
          select p.*,u.username,c.category_name from projects p
          join categories c on c.id=p.cid
          join user u on u.id=p.userid
          ${orderSql} ${offsetCond}
        `
    return sequelize
      .query(sql,
        {
          bind: [],
          type: sequelize.QueryTypes.SELECT
        })
      .then((result) => {
        if (_.isEmpty(result))
          throw new Error('No projects found!')
        return result
      })
  }
}
