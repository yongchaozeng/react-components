import React from 'react';
import { useTitle } from 'ahooks';
import logo from '../../logo.svg';
import './App.css';

console.log(71)

function Test() {
  useTitle('test',{restoreOnUnmount:true})

  return (
    <h1>test</h1>
  );
}

export default Test;
