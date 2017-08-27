
// //在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});
//修改 user 这个表的 name=‘大米’  修改成name=‘小米’
// var  sql = "update user set  name='小米' where name='大米';";

var  sql = "update user set  name='老米', age='40' where name='小米';"; //多条件

pool.query(sql,function (err,rows) {
     console.log(rows)
});
//修改哪一个where  不加where 定位会把所有表内容，修改成一样的值；
//update user set  name='小米' where name='大米';