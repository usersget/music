const mysql = require('mysql2');

// 创建连接池
const pool = mysql.createPool({
    host: '114.115.145.123',
    user: 'dxx',
    password: '123456',
    database: 'uni_app',
    connectionLimit: 20, // 调整连接池大小根据需求
});

module.exports = pool;