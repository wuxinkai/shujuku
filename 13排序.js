
//在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});
//1 order by 排序  从高到底
// var  sql = "select goods_id,goods_name,shop_price from goods order by shop_price desc;";

//2:按发布时间由早到晚排序
// var sql="select goods_id,goods_name,add_time from goods order by add_time;"

//3 cat_id接栏目由低到高排序,shop_price栏目内部按价格由高到低排序
// var sql="select goods_id,cat_id,goods_name,shop_price from goods order by cat_id ,shop_price desc;"

//4 limit 取出价格(shop_price)最高的前三名商品
// var sql="select goods_id,goods_name,shop_price from goods order by shop_price desc limit 3;"

//跳过前两行，从第三行开始取三条数据，  分页一般会用
// var sql="select goods_id,goods_name,click_count from goods order by click_count desc limit 2,3;"

//


pool.query(sql,function (err,rows) {
    console.log(rows)
});
