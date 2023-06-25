const express = require('express');
const router = express.Router();
const db = require('./dbtwo');

// 查询数据
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM table_name';
    db.query(sql, [], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data from database');
            return;
        }

        res.json(results);
    });
});

// 插入数据
router.post('/', (req, res) => {
    const { name, age } = req.body;
    const sql = 'INSERT INTO table_name (name, age) VALUES (?, ?)';
    const params = [name, age];

    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(500).send('Error inserting data into database');
            return;
        }

        res.json(results);
    });
});

// 更新数据
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    const sql = 'UPDATE table_name SET name = ?, age = ? WHERE id = ?';
    const params = [name, age, id];

    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(500).send('Error updating data in database');
            return;
        }

        res.json(results);
    });
});

// 删除数据
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM table_name WHERE id = ?';
    const params = [id];

    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(500).send('Error deleting data from database');
            return;
        }

        res.json(results);
    });
});

module.exports = router;