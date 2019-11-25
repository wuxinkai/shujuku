
//在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});
//内链接 left join
//内连接是以两张表都有的共同部分数据为准,也就是左右连接的数据之交集.
// var sql=" select boy.hid, boy.bname, girl.hid ,girl.gname from boy inner join girl on boy.hid = girl.hid";

//left左链接 是把左边的内容都查出来， 对应右表  如果没有找到是null  换成right就是右链接
// var sql=" select boy.hid, boy.bname, girl.hid ,girl.gname from boy left join girl on boy.hid = girl.hid";
var sql=" select articles.title, category.id, from articles left join category on articles.category_id = category.id";


pool.query(sql,function (err,rows) {
    console.log(rows)
});
