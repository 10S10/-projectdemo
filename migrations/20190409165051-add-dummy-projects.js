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
  let sql = `INSERT INTO projectDB.projects(userid,cid,project_title,createdAt,updatedAt) VALUES 
        (1,1,'Content Management','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(2,1,'Content Writing','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(3,2,'Gaming','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(1,4,'Coding','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(2,5,'Finanance Management','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(3,6,'Products Management','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(1,1,'Songs','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(2,4,'School Management','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(3,4,'Students','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(1,2,'Songs ','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000') 
        ,(1,6,'Videography','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')
        ,(1,6,'Jwellery mangement','2019-04-09 21:44:43.000','2019-04-09 21:44:43.000')`

  return db.runSql(sql);
};

exports.down = function(db) {
  let sql = `delete FROM projectDB.projects`;

  return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
