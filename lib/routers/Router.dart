import 'package:flutter/material.dart';
import 'package:flutter_app123/pages/ForgotPassword.dart';
import 'package:flutter_app123/pages/register.dart';

//配置命名路由信息
final routes = {
  //如果需要传参，那么在配置的时候加上{arguments}；如果不需要传参，则不用加{arguments}
  "/forgotPsd": (context, {arguments}) => ForgotPassword(),
  "/register": (context, {arguments}) => RegisterPage(),
};

//统一处理命名路由
var onGenerateRoute = (RouteSettings settings) {
  final String name = settings.name;
  final Function pageContentBuilder = routes[name];
  if (pageContentBuilder != null) {
    //能寻找到对应的路由
    if (settings.arguments != null) {
      //页面跳转前有传参
      final Route route = MaterialPageRoute(
          builder: (context) =>
              pageContentBuilder(context, arguments: settings.arguments));
      return route;
    } else {
      //页面跳转前没有传参
      final Route route =
          MaterialPageRoute(builder: (context) => pageContentBuilder(context));
      return route;
    }
  }
};
