'use strict'

const Policy = require('trails/policy')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

/**
 * @module PassportPolicy
 * @description passport policy
 */
module.exports = class PassportPolicy extends Policy {

  /**
   * JWT policy to check if token is valid or not
   * @param req
   * @param res
   * @param next
   * @returns {*}
   */
  async jwt(req, res, next) {

    let {Token} = this.app.orm;
    let {authorization} = req.headers;
    let {secret} = this.app.config.passport.strategies.jwt.tokenOptions

    try {

      if (!authorization || authorization.length < 5) {
        throw new Error('Please provide valid authorization')
      }

      let token = authorization.substring(4)
      let storedToken = await Token.findOne({where: {token}})
      if (!storedToken) {
        throw new Error('Invalid token')
      }
      let decodedToken = jwt.verify(token, secret)

      if (!decodedToken) {
        throw new Error('Invalid token')
      }
      let {user} = decodedToken;
      req.user = user;
      req.data = {token: {user}}
      next()
    }
    catch (e) {
      if (e.message && (e.message).trim() == 'jwt expired')
        res.status(401).json({
          flag: false,
          data: e,
          message: `Your session is expired, Please login again to continue!`,
          code: 1000
        });
      else
        res.status(401).json({flag: false, data: e, message: `Token you have provided is not valid, Might be you are logout Please login again`, code: 1000});
    }
  }
}
