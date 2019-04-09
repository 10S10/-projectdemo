/**
 * Database Configuration
 * (app.config.database)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/database}
 */
module.exports = {

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Use the SQLite3 by default for development purposes.
   *
   * Set production connection info in config/env/production.js
   */
  stores: {

    /**
     * Define a store called "local" which uses SQLite3 to persist data.
     */
    /*
    sqlitedev: {
      database: 'dev',
      storage: './.tmp/dev.sqlite',
      host: '127.0.0.1',
      dialect: 'sqlite'
    }
    */

    projectLocal: {
      database: 'projectDB',
      username: 'root',
      password: 'root123',
      host: 'localhost',
      dialect: 'mysql',
      port: '3306'
    },
  },

  models: {
    defaultStore: 'projectLocal',
    migrate: 'alter'
  }
}
