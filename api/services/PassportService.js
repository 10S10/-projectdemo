'use strict'

const Service = require('trails/service')
const jwt = require('jsonwebtoken')

/**
 * @module PassportService
 * @description All passport services
 */
module.exports = class PassportService extends Service {

  constructor(app) {
     super(app)
     this.protocols = require('./protocols')
     this.passport = require('passport')
     this.passportLocalStrategy = require('passport-local').Strategy;
   }

   /**
    * Add middlewares
    */
   initLocalStrategy(){

     let { UserService } = this.app.services
     let   passportLocalStrategy = this.passportLocalStrategy

     this.passport.use(new passportLocalStrategy(async (username, password, done) => {

         try {

           let user = await  UserService.validatePassword(username, password)
           done(null, user);
         }
         catch (e) {
           done(e, false, {message: e.message});
         }
       }
     ));

     this.passport.serializeUser((user, done)=>{
       done(null, user.id);
     });

     this.passport.deserializeUser(async (userId, done)=>{

       try{

         let user = await  UserService.getProfile(userId)
         done(null, user);
       }
       catch(e){
         done(e);
       }
     });
   }

   /** Create JWT token for authentication
    *
    * @param user
    * @returns {*}
    */
   createToken(user) {

     const config = this.app.config.passport.strategies.jwt
     return jwt.sign(
       {
         user: user.toJSON ? user.toJSON() : user,
       },
       config.tokenOptions.secret,
       {
         algorithm: config.tokenOptions.algorithm,
         expiresIn: config.tokenOptions.expiresInSeconds,
         issuer: config.tokenOptions.issuer,
         audience: config.tokenOptions.audience
       }
     )
   }

   /**
    * Remove JWT token
    * @param token
    * @returns {Promise}
    */
   removeToken(token) {

     let { Token } = this.app.orm;

     return new Promise((resolve, reject) => {
       Token
         .destroy({where:{token}})
         .then(r => resolve(r))
         .catch(e => reject(e))
     })
   }
}
