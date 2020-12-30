import 'http.dart';

var http = DartHttpUtils();


class Api {
  login(data) async {
    return http.getParametersDio('/login') ;
  }
}