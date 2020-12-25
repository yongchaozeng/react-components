import 'package:flutter/material.dart';

import 'pages/Tabs.dart';
import 'routers/Router.dart' as prefix0;
void main() {

  runApp(MyApp());
}

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home:Tabs(),
        onGenerateRoute: prefix0.onGenerateRoute
    );
  }
}

