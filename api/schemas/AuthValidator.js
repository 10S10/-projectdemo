const Joi = require('joi');

module.exports = class AuthValidator {

  login() {

    return Joi.object().keys({
      username : Joi.string().required()
        .error(new Error('Username is required!')),
      password: Joi.string().required()
        .error(new Error('Password is required!'))
    })
  }

  getProjectsList(){

    return Joi.object().keys({
      start : Joi.number(),
      limit : Joi.number(),
      sort : Joi.toString(),
      order:Joi.any().valid(['asc','desc']),
    })
  }
}