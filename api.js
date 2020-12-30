var express = require('express');//引入express模块
var app = express();

//定义方法
app.get('/login',function(req,res){
    let result={
        err:0,
        msg:'ok',
        data:{
            "name":"huawei",
            "price":"1999",
            "title":"huawei huawei huawei",
            "id":"1"
        }
    }
    res.send(result)
});

//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000,function(){
    console.log('runing 3000...');
})