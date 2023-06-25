const express = require('express');
const router = express.Router();
const db = require('../until/dbtwo');

// 查询数据
router.get('/', (req, res) => {
    let username = req.headers['username'];
    let password = req.headers['password'];
    const sql = 'SELECT * FROM users WHERE username=?';
    db.query(sql, [username], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data from database');
            return;
        }else{
            if (results.length>0){
                if (results[0].password == password){
                    res.json({
                        code: 200,
                        msg: results[0].username + "欢迎回来",
                        img: results[0].userimg,
                        title: results[0].username
                    });
                }else{
                    res.json({
                        code: 201,
                        msg: "用户名或密码错误"
                    });
                }
                
            }else{
                res.json({
                    code:500,
                    msg:"您还未注册"
                });
            }
            
        }
        
    });
});
//查询banner
router.get('/banner', (req, res) => {
    const sql = 'SELECT * FROM banner';
    db.query(sql, [], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data from database');
            return;
        } else {
            if (results.length > 0) {
                res.json({
                    code: 200,
                    msg: results
                });
            } else {
                res.json({
                    code: 500,
                    msg: "请求失败"
                });
            }

        }

    });
});
// 插入数据
router.post('/', (req, res) => {
    const { username, password } = req.body;
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const params = [username, password];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.json({
                code:500,
                msg:false,
                title:"注册失败请检查您的信息"
            })
            console.log(err)
            return;
        }

        res.json({
            code:200,
            msg:true,
            title:"恭喜您注册成功"
        });
    });
});

// 更新数据
// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const { name, age } = req.body;
//     const sql = 'UPDATE table_name SET name = ?, age = ? WHERE id = ?';
//     const params = [name, age, id];

//     db.query(sql, params, (err, results) => {
//         if (err) {
//             res.status(500).send('Error updating data in database');
//             return;
//         }

//         res.json(results);
//     });
// });

// 删除数据
// router.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     const sql = 'DELETE FROM table_name WHERE id = ?';
//     const params = [id];

//     db.query(sql, params, (err, results) => {
//         if (err) {
//             res.status(500).send('Error deleting data from database');
//             return;
//         }
//         res.json(results);
//     });
// });

module.exports = router;