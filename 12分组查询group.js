var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});

//1查出最贵的商品的价格
// var  sql = "select max(shop_price) from goods;";

//2查出最大(最新)的商品编号
// var sql="select max(goods_id) from goods;"

//3查出最便宜的商品的价格
// var sql="select min(shop_price) from goods;"

//4查询该店所有商品的库存总量
// var sql="select sum(goods_number) from goods;"

//5查询所有商品的平均价
// var sql="select avg(shop_price) from goods;"

//6查询该店一共有多少种商品
// var sql=" select count(*) from goods;";


//1查询该店的商品(market_price)比市场( shop_price)价所节省的价格
// var sql="select goods_id,goods_name,market_price-shop_price as j from goods ;";

//2查询每个商品所积压的货款(提示:库存*单价)
// var sql="select goods_id,goods_name,goods_number*shop_price  from goods"

//3 查询该店积压的总货款
// var sql="select sum(goods_number*shop_price) from goods;"




pool.query(sql,function (err,rows) {
    console.log(rows)
});
