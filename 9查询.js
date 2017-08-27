
// //在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});
//条件查询 从表里找uid=2的
// var  sql = "select * from user where uid=2";
//条件查询
// var  sql = "select * from user where uid >=5";

//条件查询 只查询uid 和name
var  sql = "select uid,name from user where uid>=5";



pool.query(sql,function (err,rows) {
    console.log(rows)
});
