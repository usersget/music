const mysql = require('mysql2');

// 创建连接池
const pool = mysql.createPool({
    host: '114.115.145.123',
    user: 'root',
    password: '123456',
    database: 'uni_app',
    connectionLimit: 20, // 设置连接池的最大连接数
});

// 封装查询方法
function query(sql, params, callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            callback(err, null);
            return;
        }

        connection.query(sql, params, (queryErr, results) => {
            connection.release(); // 释放连接

            if (queryErr) {
                callback(queryErr, null);
                return;
            }

            callback(null, results);
        });
    });
}

module.exports = {
    query
};