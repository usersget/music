// const mysql = require('mysql');

// // 创建数据库连接池
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'mydb',
//     connectionLimit: 10
// });

// // 封装数据库查询方法
// const query = (sql, params) => {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((err, connection) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 connection.query(sql, params, (err, rows) => {
//                     if (err) {
//                         reject(err);
//                     } else {
//                         resolve(rows);
//                     }
//                     connection.release();
//                 });
//             }
//         });
//     });
// };

// module.exports = query;