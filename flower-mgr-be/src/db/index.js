//引入
const mongoose = require('mongoose');

//连接函数
const connect = () => {
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017');
    //监听数据库开启
    mongoose.connection.on('open', () => {
        console.log('连接成功...');
    });
}

//调用函数
connect();
