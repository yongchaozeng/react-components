import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text('asd'),
          ),
          body: HomeContent()),
    );
  }
}

class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
        child: Container(
            child: Text('wenbeb'),
            height: 300.0,
            width: 300.0,
            decoration: BoxDecoration(
                color: Colors.yellow,
                border: Border.all(color: Colors.blue, width: 2.0))));
  }
}
