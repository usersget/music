/*
 * @Author: cyt
 * @Date: 2023-06-23 13:59:07
 * @LastEditors: cyt 2720914944@qq.com
 * @LastEditTime: 2023-06-24 21:28:27
 * @FilePath: \eduid-express\routes\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by cyt 2720914944@qq.com All Rights Reserved.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
