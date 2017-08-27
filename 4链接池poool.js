/**
 链接非常消耗性能，
 连接池是一种，创建并管理链接的技术，
 减少链接时间
 简化编程模型
 资源受控制
 */
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'sudb' //集合名字
});
//xingming 查询表

pool.query('select * from xingming',function (err,rows) {
    console.log(rows)
})
