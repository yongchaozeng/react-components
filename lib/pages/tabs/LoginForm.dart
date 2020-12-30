import 'package:flutter_app123/api.dart';
import 'package:flutter/material.dart';

class LoginFormPage extends StatefulWidget {
  @override
  _LoginFormState createState() => new _LoginFormState();
}

class _LoginFormState extends State<LoginFormPage> {
  TextEditingController _unameController = new TextEditingController();
  TextEditingController _pwdController = new TextEditingController();
  GlobalKey _formKey = new GlobalKey<FormState>();
  bool passwordVisible = false;
  bool _isShowClear = false;

  @override
  void initState() {
    // TODO: implement initState
    //设置焦点监听
//    _focusNodeUserName.addListener(_focusNodeListener);
//    _focusNodePassWord.addListener(_focusNodeListener);
    //监听用户名框的输入改变
    _unameController.addListener((){
      print(_unameController.text);

      // 监听文本框输入变化，当有内容的时候，显示尾部清除按钮，否则不显示
      if (_unameController.text.length > 0) {
        _isShowClear = true;
      }else{
        _isShowClear = false;
      }
      setState(() {

      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Form(
        key: _formKey,
        autovalidate: true,
        child: Padding(
            padding: EdgeInsets.fromLTRB(30.0, 20.0, 30.0, 20.0),
            child: Column(
              children: <Widget>[
                Align(
                    alignment: FractionalOffset(0.5, 0.0),
                    child: ClipOval(
                      child: Image.network(
                        'https://i0.hdslb.com/bfs/face/member/noface.jpg@72w_72h_1c.webp',
                        alignment: Alignment.bottomRight,
                      ),
                    )),
                TextFormField(
                    autofocus: true,
                    controller: _unameController,
                    decoration: InputDecoration(
                      labelText: "用户名",
                      hintText: "用户名或邮箱",
                      prefixIcon: Icon(Icons.person),
                      suffixIcon: (_isShowClear)
                          ? IconButton(
                              icon: Icon(Icons.clear),
                              onPressed: () {
                                // 清空输入框内容
                                _unameController.clear();
                              },
                            )
                          : null,
                    ),

                    // 校验用户名
                    validator: (v) {
                      return v.trim().length > 0 ? null : "用户名不能为空";
                    }),
                TextFormField(
                    controller: _pwdController,
                    decoration: InputDecoration(
                        prefixIcon: Icon(Icons.perm_identity),
//                        suffixIcon: Icon(
//                          Icons.remove_red_eye,
//                        ),
                        labelText: "密码",
                        hintText: "您的登录密码",
                        counterText: "counterText",
                        suffixIcon: IconButton(
                          icon: Icon(
                            passwordVisible
                                ? Icons.visibility
                                : Icons.visibility_off,
                            color: Theme.of(context).primaryColorDark,
                          ),
                          onPressed: () {
                            setState(() {
                              passwordVisible = !passwordVisible;
                            });
                          },
                        )),
                    obscureText: passwordVisible,
                    validator: (v) {
                      return v.trim().length > 5 ? null : "密码不能少于6位";
                    }),
                Padding(
                  padding: EdgeInsets.only(top: 40.0),
                  child: SizedBox(
                    width: 240,
                    child: RaisedButton(
                      child: Text("登录"),
                      color: Colors.blue,
                      highlightColor: Colors.blue[700],
                      colorBrightness: Brightness.dark,
//                splashColor: Colors.grey,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(6.0)),
                      onPressed: () async {
                        print('1');
                        await Api().login({'name': 12});

//                          if ((_formKey.currentState as FormState).validate()) {
//                            //验证通过提交数据
//                            print(_unameController.text);
//                          }
                      },
                    ),
                  ),
                ),
                Flex(
                  direction: Axis.horizontal,
                  children: <Widget>[
                    Expanded(
                        flex: 1,
                        child: FlatButton(
                          child: Center(
                            child: Text("忘记密码"),
                          ),
                          textColor: Colors.blue,
                          onPressed: () {
                            Navigator.pushNamed(context, "/forgotPsd");
                          },
                        )),
                    Expanded(
                        flex: 1,
                        child: FlatButton(
                          child: Text("注册"),
                          textColor: Colors.blue,
                          onPressed: () {
                            Navigator.pushNamed(context, "/register");
                          },
                        )),
                  ],
                ),
              ],
            )));
  }
}
