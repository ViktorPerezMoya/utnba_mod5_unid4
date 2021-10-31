var mysql = require('mysql');
var util = require('util');

var pool =  mysql.createPool({
    connectionLimit: 10,
    database:   process.env.DB_DATABASE,
    host:       process.env.DB_HOST,
    user:       process.env.DB_USER,
    password:   process.env.DB_PASS
});

pool.query = util.promisify(pool.query);

module.exports = pool;