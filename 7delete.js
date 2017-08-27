
// //在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});
//删除  必须加where 容易把数据全部删除
var  sql = "delete from user where uid=9;";

pool.query(sql,function (err,rows) {
    console.log(rows)
});

