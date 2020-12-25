/**
 *  对话框
 * RaisedButton(
  child: Text('切换'),
  onPressed: () {
    showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text('提示'),
            content: Text('确认删除吗？'),
            actions: <Widget>[
              FlatButton(child: Text('取消'),onPressed: (){},),
              FlatButton(child: Text('确认'),onPressed: (){},),
            ],
          );
        });
  },
)
 *
 
 自定义弹窗
 Dialog(
  child: MyDialog(),
);
*/

//http://www.ptbird.cn/flutter-form-textformfield.html 表单聚焦和提示
// https://blog.csdn.net/mengks1987/article/details/85108128 弹窗
// https://www.cnblogs.com/leiting/p/10834130.html ajax dio
//https://www.cnblogs.com/maqingyuan/p/13656283.html http
//http://www.cainiaoxueyuan.com/xcx/17525.html token状态
//https://www.jianshu.com/p/874f98dd2eda 图片上传
//https://zhuanlan.zhihu.com/flutter 知乎 flutter