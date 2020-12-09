import React, { useLayoutEffect, useState } from 'react';
import './App.css';


class Haha {
  static standardGreeting = "Hello, there"
  haha: string
  constructor(msg: string) {
    this.haha = msg
  }
  change(msg: string) {
    this.haha = msg
  }
}
let ha = new Haha('test')
console.log(7, ha)
ha.change('22')
console.log(7, ha)

const App = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render', value);

  return (
    <div onClick={() => setValue(0)}>
      value: {value}
    </div>
  );
};
export default App;
