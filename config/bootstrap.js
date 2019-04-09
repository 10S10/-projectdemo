/**
 * Trailpack bootstrap
 * (app.config.bootstrap)
 *
 * @see http://trailsjs.io/doc/config/bootstrap
 */

'use strict'

const DBMigrate = require('db-migrate');

module.exports = function(app){

  // run all migrations
  let dbm = DBMigrate.getInstance(true);
  //console.log('dbm.config',dbm.config)
  dbm.up((err)=>{
    if(err)
      throw err
    // else
    //   console.log(`all migrations run successfully.`)
  });
}