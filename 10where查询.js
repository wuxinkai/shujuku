
// //在数据库中，找寻我想要的语句
var mysql = require('mysql');
var pool = mysql.createPool  ({
    host     : 'localhost',
    user     : 'root',
    password : 'wxk123456', //密码
    database : 'test' //集合名字
});

//(1) 主键为32的商品   查询全部
// var  sql = "select * from goods where goods_id=32;";

//(2) 通过属性查询
//var sql="select goods_id,goods_name,shop_price from goods where goods_id=32;";

//(3) 不属第3栏目的所有商品
// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where cat_id!=3;";

//4 高于3000元的商品
// var sql ="select goods_id,cat_id,goods_name,shop_price  from goods where shop_price >3000;"

//5本店价格低于或等于100元的商品
// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where shop_price <=100;"

//6 查出cat_id =4 和查出cat_id=11的内容 (不许用or)
// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where cat_id in (4,11);";

//6取出100<=价格<=500的商品(不许用and)
// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where shop_price between 100 and 500;";

//7 cat_id不等于3  cat_id不等于11  (and,或not in分别实现)
// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where cat_id!=3 and cat_id!=11;";

// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where cat_id not in (3,11);"

//8 取出价格大于100且小于300,或者大于4000且小于5000的商品  （or 方法）
// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where shop_price>100 and shop_price <300 or shop_price >2500 and shop_price <5000;"

//9 取出cat_id=3 中  shop_price 大于1000 小于3000   并且 点击量大于5
// var sql="select goods_id,cat_id,goods_name,shop_price,click_count from goods where cat_id=3 and (shop_price <1000 or shop_price>3000) and click_count>5;"

//10 取出第1个栏目下面的商品(注意:1栏目下面没商品,但其子栏目下有)
// var sql="select goods_id,cat_id,goods_name,shop_price,click_count from goods where cat_id in (2,3,4,5);"

//11 取出名字以"诺基亚"开头的商品  模糊搜索 后面以百分号结尾 %  百分号是任意字符
// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where goods_name like '诺基亚%';"

// 12 取出名字为"诺基亚Nxx"的手机  --是占用两个字符
// var sql="select goods_id,cat_id,goods_name,shop_price  from goods where goods_name like '诺基亚N__';"

//13 取出名字不以"诺基亚"开头的商品
// var sql="select goods_id,cat_id,goods_name,shop_price from goods where goods_name not like '诺基亚%';"

//14 取出cat_id=3 栏目下面价格在1000到3000之间,并且点击量>5 "诺基亚"开头的系列商品
var sql="select goods_id,cat_id,goods_name,shop_price  from goods where cat_id=3 and shop_price>1000 and shop_price <3000 and click_count>5 and goods_name like '诺基亚%';"

pool.query(sql,function (err,rows) {
    console.log(rows)
});