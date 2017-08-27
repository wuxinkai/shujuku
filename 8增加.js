
// //在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});
//单条数据
// var  sql = " insert into user (uid,name)values(6,'我的');";

//多条数据插入
// var  sql = " insert into user values(7,'我的7',20),(8,'我的8',20),(9,'我的9',20);";



pool.query(sql,function (err,rows) {
    console.log(rows)
});
