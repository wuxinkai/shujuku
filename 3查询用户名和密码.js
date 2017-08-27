var mysql= require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456',
    database : 'sudb'
});

connection.connect();
//（3）查询数据库是否有username 和 password
var username = '吴亦凡';
var password = 'wxk1235';
var sql3 = "select * from user where username=? and password=?"
connection.query(sql3,[username,password], function (error, results, fields) {
    console.log(error, results, fields)
    if (error){
        console.log(error)
    }else {
        if(results.length>0){
            console.log('有这个账号')
        }else {
            console.log("没有这个账户")
        }

    }
});

connection.end();  //使用完成后断开数据库
// fields 返回字段  也就是列
/*
 [ FieldPacket {
 catalog: 'def',  //数据库
 db: 'sudb',  //哪个表
 table: 'student',
 orgTable: 'student',
 name: 'id',
 orgName: 'id',
 charsetNr: 63,
 length: 11,
 type: 3,
 flags: 16899,
 decimals: 0,
 default: undefined,
 zeroFill: false,
 protocol41: true },
 FieldPacket {
 catalog: 'def',
 db: 'sudb',
 table: 'student',
 orgTable: 'student',
 name: 'name',
 orgName: 'name',
 charsetNr: 33,
 length: 150,
 type: 253,
 flags: 0,
 decimals: 0,
 default: undefined,
 zeroFill: false,
 protocol41: true },
 FieldPacket {
 catalog: 'def',
 db: 'sudb',
 table: 'student',
 orgTable: 'student',
 name: 'age',
 orgName: 'age',
 charsetNr: 63,
 length: 11,
 type: 3,
 flags: 0,
 decimals: 0,
 default: undefined,
 zeroFill: false,
 protocol41: true } ]

 Process finished with exit code 0

*/

