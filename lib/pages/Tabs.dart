import 'package:flutter/material.dart';
import 'tabs/Home.dart';
import 'tabs/Setting.dart';
import 'tabs/Category.dart';


class Tabs extends StatefulWidget{
  Tabs({Key key}) :super(key:key);
  _TabState createState()=>_TabState();
}

class _TabState extends State<Tabs>{
  int _currentIndex=0;
  List _pageList = [
    HomePage(),
    SettingPage(),
    CategoryPage()
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title: Text('asd'),
      ),
      body:_pageList[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (int index){
          setState(() {
            this._currentIndex = index;
          });
        },
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
        ],
      ),
    );
  }
}

