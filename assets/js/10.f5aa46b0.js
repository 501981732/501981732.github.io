(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{264:function(e,a,t){"use strict";t.r(a);var n=t(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mongodb从入门到放弃"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb从入门到放弃","aria-hidden":"true"}},[e._v("#")]),e._v(" MongoDB从入门到放弃")]),e._v(" "),t("h2",{attrs:{id:"_1-初识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-初识","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.初识")]),e._v(" "),t("blockquote",[t("p",[e._v("安装配置见 之前配置")])]),e._v(" "),t("blockquote",[t("p",[e._v("show databases")])]),e._v(" "),t("blockquote",[t("p",[e._v("use demo-1(数据库名称 切换/创建数据库)")])]),e._v(" "),t("blockquote",[t("p",[e._v("db.dropDatabase()删除数据库")])]),e._v(" "),t("blockquote",[t("p",[e._v("show tables")])]),e._v(" "),t("blockquote",[t("p",[e._v("db.col.drop() 删除集合col")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("增删改查")]),e._v(" "),t("ul",[t("li",[e._v("增")])]),e._v(" "),t("blockquote",[t("p",[e._v("db.col.insert({title: 'MongoDB 教程', xxx}) 向col集合中插入数据")])]),e._v(" "),t("blockquote",[t("p",[e._v('3.2之后 db.col.insertOne({"a": 3}) 插入一条')])]),e._v(" "),t("blockquote",[t("p",[e._v("db.col.insertMany([{\"b\": 3}, {'c': 4}]) 插入多条")])]),e._v(" "),t("ul",[t("li",[e._v("删")])]),e._v(" "),t("blockquote",[t("p",[e._v("db.col.deleteMany({}) 删除全部文档")])]),e._v(" "),t("blockquote",[t("p",[e._v('db.col.deleteMany({ status : "A" })  删除status等于A的全部文档')])]),e._v(" "),t("blockquote",[t("p",[e._v('db.col.deleteOne( { status: "D" } )  删除status等于A的一个文档')])]),e._v(" "),t("blockquote",[t("p",[e._v("db.col.remove({})")])]),e._v(" "),t("ul",[t("li",[e._v("改")])]),e._v(" "),t("blockquote",[t("p",[e._v("3.2版本开始 db.collection.updateOne() 向指定集合更新单个文档")])]),e._v(" "),t("pre",[t("code",[e._v('  db.test_collection.updateOne({"name":"abc"},{$set:{"age":"28"}})\n')])]),e._v(" "),t("blockquote",[t("p",[e._v("db.collection.updateMany() 向指定集合更新多个文档")])]),e._v(" "),t("ul",[t("li",[e._v("查")])]),e._v(" "),t("blockquote",[t("p",[e._v("db.col.find().pretty()")])]),e._v(" "),t("blockquote",[t("p",[e._v("AND语句  db.col.find({key1:value1, key2:value2}).pretty()")])]),e._v(" "),t("blockquote",[t("p",[e._v('OR语句  db.col.find({$or:[{"key1":"2333"},{"title": "MongoDB 教程"}]}).pretty()')])]),e._v(" "),t("blockquote",[t("p",[e._v('连用  db.col.find({"likes": {$gt:50}, $or: [{"by": "2333"},{"title": "MongoDB 教程"}]}).pretty()')])]),e._v(" "),t("blockquote",[t("p",[e._v("db.collection.find(query, projection)")])]),e._v(" "),t("pre",[t("code",[e._v("  db.collection.find(query, {title: 1, by: 1}) // inclusion模式 指定返回的键，不返回其他键\n  \n  db.collection.find(query, {title: 0, by: 0}) // exclusion模式 指定不返回的键,返回其他键\n")])])]),e._v(" "),t("li",[t("p",[e._v("条件操作符实例")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$gt -------- greater than  >\n$gte --------- gt equal  >=\n$lt -------- less than  <\n$lte --------- lt equal  <=\n$ne ----------- not equal  !=\n$eq  --------  equal  =\n")])])]),t("pre",[t("code",[e._v('    db.col.find({"likes" : {$gt : 100}})  likes大于100    对应于SQL中的     Select * from col where likes > 100;\n    \n    db.col.find({likes : {$gte : 100}})  likes大于等于100    对应于SQL中的     Select * from col where likes >= 100;\n    \n    db.col.find({likes : {$lt :200, $gt : 100}})             对应于SQL中的   Select * from col where likes>100 AND  likes<200;\n')])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("limit 和 skip")]),e._v(" "),t("pre",[t("code",[e._v('  db.col.find({},{"title":1,_id:0}).limit(1).skip(2)   第一个 {} 放 where 条件，为空表示返回集合中所有文档。第二个 {} 指定那些列显示和不显示 （0表示不显示 1表示显示)\n')])])]),e._v(" "),t("li",[t("p",[e._v("sort 排序")]),e._v(" "),t("pre",[t("code",[e._v("  db.col.find().sort({KEY:1})  1 为升序排列，而-1是用于降序排列\n")])])]),e._v(" "),t("li",[t("p",[e._v("索引：高效查询 索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构")])]),e._v(" "),t("li",[t("pre",[t("code",[e._v("  db.COLLECTION_NAME.ensureIndex({KEY:1})    Key 值为你要创建的索引字段，1为指定按升序创建索引，如果你想按降序来创建索引指定为-1即可。\n")])])]),e._v(" "),t("li",[t("p",[e._v("聚合 (aggregate)主要用于处理数据(诸如统计平均值,求和等)，并返回计算后的数据结果。有点类似sql语句中的 count(*)。")]),e._v(" "),t("pre",[t("code",[e._v("  db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)\n")])]),e._v(" "),t("p",[e._v("eg:")]),e._v(" "),t("pre",[t("code",[e._v('  db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}]) ===>SQL\n  select by_user as _id, count(*) as num_tutorial from mycol group by by_user\n')])])])]),e._v(" "),t("h2",{attrs:{id:"_2-node链接操作mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-node链接操作mongodb","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. node链接操作mongoDB")]),e._v(" "),t("ul",[t("li",[e._v("npm install mongodb")])]),e._v(" "),t("h3",{attrs:{id:"插入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入数据","aria-hidden":"true"}},[e._v("#")]),e._v(" 插入数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var MongoClient = require(\'mongodb\').MongoClient;\nvar DB_CONN_STR = \'mongodb://localhost:27017/elm\'; # 数据库为 elm\n \nvar insertData = function(db, callback) {  \n    //连接到表 site\n    var collection = db.collection(\'site\');\n    //插入数据\n    var data = [{"name":"222","url":"www.222.com"},{"name":"333","url":"www.333.com"}];\n    collection.insert(data, function(err, result) { \n        if(err)\n        {\n            console.log(\'Error:\'+ err);\n            return;\n        }     \n        callback(result);\n    });\n}\n \nMongoClient.connect(DB_CONN_STR, function(err, db) {\n    console.log("连接成功！");\n    insertData(db, function(result) {\n        console.log(result);\n        db.close();\n    });\n});\n')])])]),t("h3",{attrs:{id:"查找数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找数据库","aria-hidden":"true"}},[e._v("#")]),e._v(" 查找数据库")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var MongoClient = require('mongodb').MongoClient;\nvar DB_CONN_STR = 'mongodb://localhost:27017/elm';    \n \nvar selectData = function(db, callback) {  \n  //连接到表  \n  var collection = db.collection('site');\n  //查询数据\n  var whereStr = {\"name\":'wm'};\n  collection.find(whereStr).toArray(function(err, result) {\n    if(err)\n    {\n      console.log('Error:'+ err);\n      return;\n    }     \n    callback(result);\n  });\n}\n \nMongoClient.connect(DB_CONN_STR, function(err, db) {\n  console.log(\"连接成功！\");\n  selectData(db, function(result) {\n    console.log(result);\n    db.close();\n  });\n});\n")])])]),t("h3",{attrs:{id:"更新数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新数据","aria-hidden":"true"}},[e._v("#")]),e._v(" 更新数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var MongoClient = require('mongodb').MongoClient;\nvar DB_CONN_STR = 'mongodb://localhost:27017/elm';    \n \nvar updateData = function(db, callback) {  \n    //连接到表  \n    var collection = db.collection('site');\n    //更新数据\n    var whereStr = {\"name\":'elm'};\n    var updateStr = {$set: { \"url\" : \"https://www.elm.com\" }};\n    collection.update(whereStr,updateStr, function(err, result) {\n        if(err)\n        {\n            console.log('Error:'+ err);\n            return;\n        }     \n        callback(result);\n    });\n}\n \nMongoClient.connect(DB_CONN_STR, function(err, db) {\n    console.log(\"连接成功！\");\n    updateData(db, function(result) {\n        console.log(result);\n        db.close();\n    });\n});\n")])])]),t("h3",{attrs:{id:"删除数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除数据","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var MongoClient = require('mongodb').MongoClient;\nvar DB_CONN_STR = 'mongodb://localhost:27017/runoob';    \n \nvar delData = function(db, callback) {  \n  //连接到表  \n  var collection = db.collection('site');\n  //删除数据\n  var whereStr = {\"name\":'elm'};\n  collection.remove(whereStr, function(err, result) {\n    if(err)\n    {\n      console.log('Error:'+ err);\n      return;\n    }     \n    callback(result);\n  });\n}\n \nMongoClient.connect(DB_CONN_STR, function(err, db) {\n  console.log(\"连接成功！\");\n  delData(db, function(result) {\n    console.log(result);\n    db.close();\n  });\n});\n")])])]),t("h2",{attrs:{id:"_3-mongoose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-mongoose","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. mongoose")]),e._v(" "),t("hr"),e._v(" "),t("blockquote",[t("p",[e._v("一般我们不直接用MongoDB的函数来操作MongoDB数据库 Mongose就是一套操作MongoDB数据库的接口.")])]),e._v(" "),t("h3",{attrs:{id:"schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema","aria-hidden":"true"}},[e._v("#")]),e._v(" Schema")]),e._v(" "),t("blockquote",[t("p",[e._v("一种以文件形式存储的数据库模型骨架，无法直接通往数据库端，也就是说它不具备对数据库的操作能力.可以说是数据属性模型("),t("em",[e._v("传统意义的表结构")]),e._v(")，又或着是“集合”的模型骨架")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* 定义一个 Schema */\nvar mongoose = require(\"mongoose\");\n\nvar TestSchema = new mongoose.Schema({\n    name : { type:String },//属性name,类型为String\n    age  : { type:Number, default:0 },//属性age,类型为Number,默认为0\n    time : { type:Date, default:Date.now },\n    email: { type:String,default:''}\n});\n")])])]),t("p",[e._v("上面这个 TestSchema包含4个属性 [name, age, time, email]")]),e._v(" "),t("h3",{attrs:{id:"model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[e._v("#")]),e._v(" Model")]),e._v(" "),t("blockquote",[t("p",[e._v("由Schema构造生成的模型，除了Schema定义的数据库骨架以外，还具有数据库操作的行为，类似于管理数据库属性、行为的类")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var db = mongoose.connect("mongodb://127.0.0.1:27017/test");\n\n// 创建Model\nvar TestModel = db.model("test1", TestSchema);\n')])])]),t("p",[e._v("test1 数据库中的集合名称, 不存在会创建.")]),e._v(" "),t("h3",{attrs:{id:"entity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entity","aria-hidden":"true"}},[e._v("#")]),e._v(" Entity")]),e._v(" "),t("blockquote",[t("p",[e._v("由Model创建的实体，使用save方法保存数据，Model和Entity都有能影响数据库的操作，但Model比Entity更具操作性")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var TestEntity = new TestModel({\n       name : "Lenka",\n       age  : 36,\n       email: "lenka@qq.com"\n});\nconsole.log(TestEntity.name); // Lenka\nconsole.log(TestEntity.age); // 36\n')])])]),t("h3",{attrs:{id:"游标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#游标","aria-hidden":"true"}},[e._v("#")]),e._v(" 游标")]),e._v(" "),t("blockquote",[t("p",[e._v("MongoDB 使用游标返回find的执行结果.客户端对游标的实现通常能够对最终结果进行有效的控制。可以限制结果的数量，略过部分结果，根据任意键按任意顺序的组合对结果进行各种排序，或者是执行其他一些强的操作。")])]),e._v(" "),t("h3",{attrs:{id:"objectid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objectid","aria-hidden":"true"}},[e._v("#")]),e._v(" ObjectId")]),e._v(" "),t("blockquote",[t("p",[e._v("存储在mongodb集合中的每个文档（document）都有一个默认的主键_id，这个主键名称是固定的，它可以是mongodb支持的任何数据类型，默认是ObjectId。")])]),e._v(" "),t("blockquote",[t("p",[e._v("ObjectId是一个12字节的 BSON 类型字符串。按照字节顺序，依次代表：")])]),e._v(" "),t("ul",[t("li",[e._v("4字节：UNIX时间戳")]),e._v(" "),t("li",[e._v("3字节：表示运行MongoDB的机器")]),e._v(" "),t("li",[e._v("2字节：表示生成此_id的进程")]),e._v(" "),t("li",[e._v("3字节：由一个随机数开始的计数器生成的值")])]),e._v(" "),t("h3",{attrs:{id:"node-js-中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-中","aria-hidden":"true"}},[e._v("#")]),e._v(" Node.js 中")]),e._v(" "),t("blockquote",[t("p",[e._v('package.json 中加入"mongoose": “*” 字段.npm install 安装依赖.')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var mongoose = require("mongoose");\nvar db = mongoose.connect("mongodb://localhost:27017/test");\n')])])]),t("p",[e._v("然后引用")]),e._v(" "),t("h1",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[e._v("#")]),e._v(" ====API====")]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var mongoose = require("mongoose");\nvar db = mongoose.connect("mongodb://localhost:27017/test");\n')])])]),t("h3",{attrs:{id:"db-数据库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-数据库操作","aria-hidden":"true"}},[e._v("#")]),e._v(" db - 数据库操作")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("挂接数据库连接事件,参数1: 也可以是error")]),e._v(" "),t("pre",[t("code",[e._v("db.connection.on(‘open’, callback);\n")])])])]),e._v(" "),t("h3",{attrs:{id:"schema-表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-表结构","aria-hidden":"true"}},[e._v("#")]),e._v(" Schema - 表结构")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("构造函数")]),e._v(" "),t("pre",[t("code",[e._v(" new mongoose.Schema( { name:{type:String}, age:{type:Number, default:10}  } )\n")])])])]),e._v(" "),t("p",[e._v("2.添加属性")]),e._v(" "),t("pre",[t("code",[e._v("    Schema.add( { name: ‘String’, email: ‘String’, age: ‘Number’ } )\n")])]),e._v(" "),t("p",[e._v("3.有时候Schema不仅要为后面的Model和Entity提供公共的属性，还要提供公共的方法")]),e._v(" "),t("pre",[t("code",[e._v("    Schema.method( ‘say’, function(){console.log(‘hello’);} )\n//这样Model和Entity的实例就能使用这个方法了\n")])]),e._v(" "),t("p",[e._v("4.添加静态方法")]),e._v(" "),t("pre",[t("code",[e._v("    Schema.static( ‘say’, function(){console.log(‘hello’);} )\n//静态方法，只限于在Model层就能使用\n")])]),e._v(" "),t("p",[e._v("5.追加方法")]),e._v(" "),t("pre",[t("code",[e._v("    Schema.methods.say = function(){console.log(‘hello’);};\n//静态方法，只限于在Model层就能使用\n")])]),e._v(" "),t("h3",{attrs:{id:"model-文档操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model-文档操作","aria-hidden":"true"}},[e._v("#")]),e._v(" model - 文档操作")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("构造函数, 参数1:集合名称, 参数2:Schema实例")]),e._v(" "),t("pre",[t("code",[e._v(" 构造函数, 参数1:集合名称, 参数2:Schema实例\n")])])])]),e._v(" "),t("p",[e._v("2.查询, 参数1忽略,或为空对象则返回所有集合文档")]),e._v(" "),t("pre",[t("code",[e._v("    model.find({}, callback);\n\nmodel.find({},field,callback);\n过滤查询,参数2: {‘name’:1, ‘age’:0} 查询文档的返回结果包含name , 不包含age.(_id默认是1)\n\nmodel.find({},null,{limit:20});\n过滤查询,参数3: 游标操作 limit限制返回结果数量为20个,如不足20个则返回所有.\n\nmodel.findOne({}, callback);\n查询找到的第一个文档\n\nmodel.findById(‘obj._id’, callback);\n查询找到的第一个文档,同上. 但是只接受 __id 的值查询\n")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[e._v("创建, 在集合中创建一个文档")]),e._v(" "),t("pre",[t("code",[e._v(" Model.create(文档数据, callback))\n")])])]),e._v(" "),t("li",[t("p",[e._v("更新,参数1:查询条件, 参数2:更新对象,可以使用MondoDB的更新修改器")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update(conditions, update, function(error)\n")])])]),e._v(" "),t("li",[t("p",[e._v("删除, 参数1:查询条件")]),e._v(" "),t("pre",[t("code",[e._v(" Model.remove(conditions,callback);\n")])])])]),e._v(" "),t("h3",{attrs:{id:"entity-文档操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entity-文档操作","aria-hidden":"true"}},[e._v("#")]),e._v(" Entity - 文档操作")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("构造函数, 其实就是model的实例")]),e._v(" "),t("pre",[t("code",[e._v(" new TestModel( { name:‘xueyou’, age:21 } );\n")])])]),e._v(" "),t("li",[t("p",[e._v("创建, 在集合中创建一个文档.")]),e._v(" "),t("pre",[t("code",[e._v(" Entity.save(callback);\n")])])])]),e._v(" "),t("h1",{attrs:{id:"修改器和更新器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改器和更新器","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改器和更新器")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"更新修改器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新修改器","aria-hidden":"true"}},[e._v("#")]),e._v(" 更新修改器:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("‘$inc’ 增减修改器,只对数字有效.下面的实例: 找到 age=22的文档,修改文档的age值自增1")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update({‘age’:22}, {’$inc’:{‘age’:1} }  );\n 执行后: age=23\n")])])]),e._v(" "),t("li",[t("p",[e._v("‘$set’ 指定一个键的值,这个键不存在就创建它.可以是任何MondoDB支持的类型.")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update({‘age’:22}, {’$set’:{‘age’:‘haha’} }  );\n 执行后: age=‘haha’\n")])])]),e._v(" "),t("li",[t("p",[e._v("‘$unset’ 同上取反,删除一个键")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update({‘age’:22}, {’$unset’:{‘age’:‘haha’} }  );\n 执行后: age键不存在\n")])])])]),e._v(" "),t("h3",{attrs:{id:"数组修改器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组修改器","aria-hidden":"true"}},[e._v("#")]),e._v(" 数组修改器:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("‘$push’ 给一个键push一个数组成员,键不存在会创建")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update({‘age’:22}, {’$push’:{‘array’:10} }  );\n 执行后: 增加一个 array 键,类型为数组, 有一个成员 10\n")])])]),e._v(" "),t("li",[t("p",[e._v("‘$addToSet’ 向数组中添加一个元素,如果存在就不添加")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update({‘age’:22}, {’$addToSet’:{‘array’:10} }  );\n 执行后: array中有10所以不会添加\n")])])]),e._v(" "),t("li",[t("p",[e._v("‘$each’ 遍历数组, 和 $push 修改器配合可以插入多个值")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update({‘age’:22}, {’$push’:{‘array’:{’$each’: [1,2,3,4,5]}} }  );\n 执行后: array : [10,1,2,3,4,5]\n")])])]),e._v(" "),t("li",[t("p",[e._v("‘$pop’ 向数组中尾部删除一个元素")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update({‘age’:22}, {’$pop’:{‘array’:1} }  );\n 执行后: array : [10,1,2,3,4]  tips: 将1改成-1可以删除数组首部元素\n")])])]),e._v(" "),t("li",[t("p",[e._v("‘$pull’ 向数组中删除指定元素")]),e._v(" "),t("pre",[t("code",[e._v(" Model.update({‘age’:22}, {’$pull’:{‘array’:10} }  );\n 执行后: array : [1,2,3,4]  匹配到array中的10后将其删除\n")])])])]),e._v(" "),t("h3",{attrs:{id:"条件查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件查询","aria-hidden":"true"}},[e._v("#")]),e._v(" 条件查询:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("$gt -------- greater than  >")])]),e._v(" "),t("li",[t("p",[e._v("$gte --------- gt equal  >=")])]),e._v(" "),t("li",[t("p",[e._v("$lt -------- less than  <")])]),e._v(" "),t("li",[t("p",[e._v("$lte --------- lt equal  <=")])]),e._v(" "),t("li",[t("p",[e._v("$ne ----------- not equal  !=")])]),e._v(" "),t("li",[t("p",[e._v("$eq  --------  equal  =")]),e._v(" "),t("p",[e._v("Model.find({“age”:{ “$get”:18 , “$lte”:30 } } );\n查询 age 大于等于18并小于等于30的文档")])])]),e._v(" "),t("h4",{attrs:{id:"或查询or"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#或查询or","aria-hidden":"true"}},[e._v("#")]),e._v(" 或查询OR:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("‘$in’ 一个键对应多个值")])]),e._v(" "),t("li",[t("p",[e._v("‘$nin’ 同上取反, 一个键不对应指定值")])]),e._v(" "),t("li",[t("p",[e._v("“$or” 多个条件匹配, 可以嵌套 $in 使用")])]),e._v(" "),t("li",[t("p",[e._v("“$not”    同上取反, 查询与特定模式不匹配的文档")]),e._v(" "),t("p",[e._v("Model.find({“age”:{ “$in”:[20,21,22,‘a’]} } );\n查询 age等于20或21或21或a的文档")]),e._v(" "),t("p",[e._v('Model.find({"$or" :  [ {‘age’:18} , {‘name’:‘xueyou’} ] });\n查询 age等于18 或 name等于’xueyou’ 的文档')])])]),e._v(" "),t("h3",{attrs:{id:"类型查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型查询","aria-hidden":"true"}},[e._v("#")]),e._v(" 类型查询:")]),e._v(" "),t("blockquote",[t("p",[e._v('null 能匹配自身和不存在的值, 想要匹配键的值 为null, 就要通过  “$exists” 条件判定键值已经存在\n"$exists" (表示是否存在的意思)')])]),e._v(" "),t("pre",[t("code",[e._v("Model.find(“age” :  { “$in” : [null] , “exists” : true  } );\n查询 age值为null的文档\n\nModel.find({name: {$exists: true}},function(error,docs){\n    //查询所有存在name属性的文档\n});\n\nModel.find({telephone: {$exists: false}},function(error,docs){\n  //查询所有不存在telephone属性的文档\n});\n")])]),e._v(" "),t("h3",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式","aria-hidden":"true"}},[e._v("#")]),e._v(" 正则表达式:")]),e._v(" "),t("blockquote",[t("p",[e._v("MongoDb 使用 Prel兼容的正则表达式库来匹配正则表达式")])]),e._v(" "),t("pre",[t("code",[e._v("find( {“name” : /joe/i } )  \n查询name为 joe 的文档, 并忽略大小写\n\nfind( {“name” : /joe?/i } )\n查询匹配各种大小写组合\n")])]),e._v(" "),t("h3",{attrs:{id:"查询数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询数组","aria-hidden":"true"}},[e._v("#")]),e._v(" 查询数组:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("‘$all’ 匹配数组中多个元素")]),e._v(" "),t("pre",[t("code",[e._v(" Model.find({“array”:[5,10]} );\n 查询 匹配array数组中 既有5又有10的文档\n")])])]),e._v(" "),t("li",[t("p",[e._v("‘$size’ 匹配数组长度")]),e._v(" "),t("pre",[t("code",[e._v('Model.find({“array”:{"$size" : 3} } );\n查询 匹配array数组长度为3 的文档\n')])])]),e._v(" "),t("li",[t("p",[e._v("‘$slice’ 查询子集合返回")]),e._v(" "),t("pre",[t("code",[e._v(' Model.find({“array”:{"$slice" : 10} } );\n 查询 匹配array数组的前10个元素\n \n Model.find({“array”:{"$slice" : [5,10] } } );\n 查询 匹配array数组的第5个到第10个元素\n \n Model.find({“array”:10} );\n 查询 array(数组类型)键中有10的文档,  array : [1,2,3,4,5,10]  会匹配到\n\n Model.find({“array[5]”:10} );\n 查询 array(数组类型)键中下标5对应的值是10,  array : [1,2,3,4,5,10]  会匹配到\n')])])])]),e._v(" "),t("h3",{attrs:{id:"where"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where","aria-hidden":"true"}},[e._v("#")]),e._v(" where")]),e._v(" "),t("blockquote",[t("p",[e._v("用它可以执行任意javacript语句作为查询的一部分,如果回调函数返回 true 文档就作为结果的一部分返回")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    find({"$where" : function(){\n        for( var x in this ){\n         //这个函数中的 this 就是文档\n        }\n        \n        if(this.x !== null && this.y !== null){\n            return this.x + this.y === 10 ? true : false;\n        }else{\n            return true;\n        }\n}  }  )\n')])])]),t("pre",[t("code",[e._v("    简化版本\n")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    find( {"$where" :  "this.x + this.y === 10" } )\n    find( {"$where" : " function(){ return this.x + this.y ===10; } " } )\n')])])])])}],!1,null,null,null);o.options.__file="mongoDB从入门到放弃.md";a.default=o.exports}}]);