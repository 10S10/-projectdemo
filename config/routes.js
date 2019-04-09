/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.helloWorld'
  },
  {
    method: 'GET',
    path: '/login',
    handler: 'ViewController.login'
  },
  {
    method: 'GET',
    path: '/home',
    handler: 'ViewController.home'
  },


  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  /**
     * Authcontroller route (login/logout)
     */
    {
      method: 'POST',
      path: '/api/v1/auth/login',
      handler: 'AuthController.login',

    },
    {
      method: 'GET',
      path: '/api/v1/auth/logout',
      handler: 'AuthController.logout'
    },
    {
      method: 'POST',
      path: '/api/v1/auth/projects',
      handler: 'AuthController.getProjectsList'
    }

]
