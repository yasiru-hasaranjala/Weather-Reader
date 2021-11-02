const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'DB',
    password: 'qwer1234A',
    multipleStatements: true
});

module.exports = pool.promise();