const pool = require('./bdconfig'); // 引入数据库连接池
const mysql = require('mysql2');
let inst = "INSERT INTO music_type (id,name) values (?,?)"

// 查询数据
function selectData(callback) {
    pool.query('SELECT * FROM music_type', (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        callback(results);
    });
}

// 插入数据
function insertData(callback, sqlpreams) {
    let mysqlli = mysql.format(inst, sqlpreams)
    console.log(mysqlli);
    pool.query(mysqlli, (error, results) => {
        if (error) {
            console.log(error)
        }
        callback(results);
    });
}

// 更新数据
function updateData(id, data, callback) {
    pool.query('UPDATE table_name SET ? WHERE id = ?', [data, id], (error, results) => {
        if (error) {
            throw error;
        }
        callback(results);
    });
}

// 删除数据
function deleteData(id, callback) {
    pool.query('DELETE FROM table_name WHERE id = ?', id, (error, results) => {
        if (error) {
            throw error;
        }
        callback(results);
    });
}

module.exports = {
    selectData,
    insertData,
    updateData,
    deleteData
};