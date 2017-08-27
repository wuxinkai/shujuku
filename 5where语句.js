 //在数据库中，找寻我想要的语句
 var mysql = require('mysql');
 var pool = mysql.createPool  ({
     host     : 'localhost',
     user     : 'root',
     password : 'wxk123456', //密码
     database : 'test' //集合名字
 });
 var  sql = 'select * from user where age=60';
 // var  sql = 'select * from user where id<3';

 // 1表示真可以查询所有 0表示假什么都查不出来
 // var  sql = 'select * from user where 1';

 // 取出明年的年龄  age都加1
 var  sql = 'select uid,name,age+1 from user where 1';

 pool.query(sql,function (err,rows) {
     console.log(rows)
 });

 //数字可以不加单引号
 //列与值要严格对应

 //插入内容 insert   into user (uid,name,age)values(1,'小米',20);
 //查询内容 select * from user;
 //查看表结构  desc user;

 //update user set  name='小米' where name='大米';