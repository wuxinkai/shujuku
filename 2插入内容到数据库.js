var mysql= require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456',
    database : 'sudb' // 集合
});

connection.connect();
var username = '吴亦凡2';
var password = 'wxk1234';
//表名字插入内容
var sql2 = "insert into user(username,password) values('"+username+"','"+password+"')" //'"+username+"' 要加单引号
connection.query(sql2, function (error, results, fields) {
    if (error){
        console.log(error)
    }else {
        console.log(results)

    }
});
connection.end();
/*
成功返回的数据
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 3,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
*/
