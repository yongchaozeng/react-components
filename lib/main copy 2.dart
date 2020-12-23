import 'package:flutter/material.dart';

void main() {
  runApp(Myapp());
}

class Myapp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text('data111'),
          ),
          body: HomeContent()),
          theme:ThemeData(
            primarySwatch: Colors.yellow
          )
    );
  }
}

class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
        child: Text(
      'asdas11d', // 文本
      textDirection: TextDirection.ltr, //水平布局
      style: TextStyle(fontSize: 40, color: Colors.yellow),
    ));
  }
}
