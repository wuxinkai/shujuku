var mysql= require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'test'
});

connection.connect();
var sql ='select * from guoji';  //查询语句
// err 错误对象
//  results 返回记录

// （1）查询数据库
connection.query(sql, function (error, results, fields) {
    if (error){
         console.log(error)
    }else {
        console.log(results);
        // console.log(fields)
        results.forEach(function (row) {
            console.log(row.name)
        })

    }
});
connection.end();
