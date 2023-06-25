var express = require('express');

const dbOperations = require('../until/music');
var router = express.Router();
router.get('/', function (req, res, next) {
    dbOperations.selectData((results) => {
        res.json(results);
    });
});
router.get('/inset', function (req, res, next) {
    const sqlpreams = ['cyt', 'testysa', '测试标题']

    dbOperations.insertData((results, sqlpreams) => {
        res.json(results);
    })
});
module.exports = router;