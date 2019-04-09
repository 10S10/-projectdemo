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
  let sql = `INSERT INTO projectDB.\`user\`(ipaddress,username,password,salt,email,first_name,last_name,city,state,zip_code,country,createdAt,updatedAt) VALUES 
        ('127.0.0.1','shilpa123','cd0fa70434025418e645f428ecb06579','%$123','test@gmail.com','Shilpa','Patel','surat','gujarat','395003',500,'2019-04-09 21:40:38.000','2019-04-09 21:40:38.000'),
        ('127.0.0.1','ajay','d333df2e4205bb33bb0176b3c36b9b37','%456','test@gmail.com','Ajay','Patel','surat','gujarat','395003',500,'2019-04-09 21:40:38.000','2019-04-09 21:40:38.000'),
        ('127.0.0.1','ketan','4d1e6736081c5cd7a9f91adfb80feb7a','%$456&','test@gmail.com','Ajay','Patel','surat','gujarat','395003',500,'2019-04-09 21:40:38.000','2019-04-09 21:40:38.000')
        ;`

  return db.runSql(sql);
};

exports.down = function(db) {
  let sql = `delete FROM projectDB.\`user\`;`;

  return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
