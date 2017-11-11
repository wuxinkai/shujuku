
//在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});

// 1查询出最新一行商品(以商品编号最大为最新,用子查询实现)
// var sql="select goods_id,goods_name from goods where goods_id =(select max(goods_id) from goods);"

//7.2:查询出编号为19的商品的栏目名称(用左连接查询和子查询分别)
// 7.3:用where型子查询把ecs_goods表中的每个栏目下面最新的商品取出来
var sql="select goods_id,goods_name,cat_id from goods where goods_id in (select max(goods_id) from goods group by cat_id);"

//3 order by 排序  从高到底用exists型子查询   exists是查看这个表对于的内容是否存在，存在就显示出来，不存在就不要
//goods.cat_id 到 category.cat_id的表中去查找内容， goods和 category id能对应上的都查出来，对应不上的不要
// var  sql ="select * from category where exists (select * from goods where goods.cat_id=category.cat_id);";

pool.query(sql,function (err,rows) {
    console.log(rows)
});
