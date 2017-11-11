
// //在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});

var  sql = "select max(shop_price) from ecs_goods; ";


pool.query(sql,function (err,rows) {
    console.log(rows)
});
