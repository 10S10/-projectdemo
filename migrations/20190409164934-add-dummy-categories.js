'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  let sql = `INSERT INTO projectDB.categories(category_name,createdAt,updatedAt) VALUES 
          ('Marketing','2019-04-09 21:43:35.000','2019-04-09 21:43:35.000')
          ,('Social','2019-04-09 21:43:35.000','2019-04-09 21:43:35.000')
          ,('Sports','2019-04-09 21:43:35.000','2019-04-09 21:43:35.000')
          ,('Technical','2019-04-09 21:43:35.000','2019-04-09 21:43:35.000')
          ,('Financial','2019-04-09 21:43:35.000','2019-04-09 21:43:35.000')
          ,('E-commerce','2019-04-09 21:43:35.000','2019-04-09 21:43:35.000');`

  return db.runSql(sql);
};

exports.down = function(db) {
  let sql = `delete FROM projectDB.categories`;

  return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
