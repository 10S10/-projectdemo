'use strict'

const Controller = require('trails/controller')
const _ = require('lodash')
const validator = require('node-validator')

/**
 * @module AuthController
 * @description user authentication.
 */
module.exports = class AuthController extends Controller {
  /**
   * Check Login And generate JWT token
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async login(req, res) {

    let app = this.app;
    let model = req.body;

    let {
      UserService,
      PassportService
    } = this.app.services;
    let {
      jwt
    } = app.config.passport.strategies
    let {
      Token
    } = this.app.orm;

console.log(`model`,model)

    try {
      // Check user entry is available & validate password also
      let user = await UserService.checkUser(model.username, model.password)

      if (!jwt)
        return res.json({
          flag: false,
          data: {},
          message: `Please setup JWT strategy in Passport config`
        })

      // create jwt token
      let token = PassportService.createToken(user);

      let storedToken = await Token.create({
        token: token,
        userid: user.id
      })

      if (!storedToken)
        return res.json({
          flag: false,
          data: {},
          message: `Error while storing token`
        })

      res.json({
        flag: true,
        data: {
          user,
          token
        }
      });
    } catch (e) {
      // console.log(`e`,e)
      res.json({
        flag: false,
        data: {},
        message: e.message
      })
    }
  }

  /**
   *Logout and remove jwt token
   * @param req
   * @param res
   * @returns {Promise.<void>}
   */
  async logout(req, res) {

    let {
      authorization
    } = req.headers;
    let {
      PassportService
    } = this.app.services;

    let token = authorization ? authorization.substring(4) : null;

    try {

      if (token) {

        let removedToken = await PassportService.removeToken(token)
        if (!removedToken) {
          throw new Error(`Logout failed`)
        }
      }

      res.json({
        flag: true,
        message: `success`,
        code: 200
      })
    } catch (e) {
      res.json({
        flag: false,
        data: e,
        message: e.message,
        code: 500
      });
    }
  }


  async getProjectsList(req, res) {

    let {
      UserService,
      PassportService
    } = this.app.services;
    let model = req.body;

    try {
      // Check user entry is available & validate password also
      let projects = await UserService.getProjectsList(model)
      res.json({
        flag: true,
        data: projects
      });
    } catch (e) {    
      res.json({
        flag: false,
        data: {},
        message: e.message
      })
    }
  }
}
