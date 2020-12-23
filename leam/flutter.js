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