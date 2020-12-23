import 'package:flutter/material.dart';
import 'tabs/Home.dart';
import 'tabs/Setting.dart';
import 'tabs/Category.dart';
import 'tabs/LoginForm.dart';
import 'dart:io';
class Tabs extends StatefulWidget{
  Tabs({Key key}) :super(key:key);
  _TabState createState()=>_TabState();
}



class _TabState extends State<Tabs>{
  int _currentIndex=0;
  List _pageList = [
    HomePage(),
    SettingPage(),
    CategoryPage(),
    LoginFormPage(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title: Text('用户中心'),
      ),
      body:_pageList[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (int index){
          setState(() {
            this._currentIndex = index;
          });
        },
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
              icon:Icon(Icons.home),
              title:Text('首页')
          ),
          BottomNavigationBarItem(
              icon:Icon(Icons.category),
              title:Text('分类')
          ),
          BottomNavigationBarItem(
              icon:Icon(Icons.settings),
              title:Text('设置')
          ),
          BottomNavigationBarItem(
              icon:Icon(Icons.settings),
              title:Text('我的')
          ),

        ],
      ),
    );
  }
}

