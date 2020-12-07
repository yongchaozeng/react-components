import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useTitle } from 'ahooks';

import logo from '../../logo.svg';
import './App.css';


class Greeter {
  static standardGreeting = "Hello, there"
  greeting: string
  constructor(msg: string) {
    this.greeting = msg
  }
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    }
    else {
      return Greeter.standardGreeting;
    }
  }
}
let greeter1: Greeter;
greeter1 = new Greeter('23');
console.log(78,greeter1.greet());
let greeterMaker: typeof Greeter = Greeter;



let a: object = { a: 123 }

interface User {
  name: string
  age: number
}

const user = function (user: User) {

}

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

// function App() {
//   useTitle('app',{restoreOnUnmount:true})
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
