import React, { Component } from 'react'

type LifetimeProps = {

}

type LifetimeState = {
  name: string
}

class Lifetime extends Component<any, LifetimeState> {
  constructor(props: LifetimeProps) {
    super(props)
    console.log('父constructor');

    this.state = {
      name: '父组件'
    }
  }
  static getDerivedStateFromProps(a: any, b: any) {
    console.log('父getDerivedStateFromProps');
    return {
      name: a.name
    }
  }
  componentDidMount() {
    document.body.addEventListener('click',()=>{
      console.log('body');
      
    })
    console.log('父componentDidMount');

  }
  showldComponent() {
    console.log('父showldComponent');

  }

  // getSnapshotBeforeUpdate(prevProps:any, prevState:any){

  // }
    event1 = (e:any) => {
    console.log(e.nativeEvent.stopImmediatePropagation());

  }

  render() {
    console.log('父render');
    return (
      <div onClick={this.event1}>{this.state.name}
        <Children1  name='子组件' />
      </div>
    )
  }
}
type Children1Props = {
  name: string
}
type Children1State = {
  name?: string
}
class Children1 extends Component<Children1Props, Children1State> {
  constructor(props: Children1Props) {
    super(props)


    console.log('子constructor');

    this.state = {

    }
  }
  static getDerivedStateFromProps(a: any, b: any) {

    console.log('子getDerivedStateFromProps');
    return {
      name: a.name
    }
  }
  componentDidMount() {
    console.log('子componentDidMount');
  }
  showldComponent() {
    console.log('子showldComponent');
  }

  render() {
    console.log('子render');
    return (
      <div>children:{this.state.name}</div>
    )
  }
}


export default Lifetime

/*
父constructor
index.tsx:21 父getDerivedStateFromProps
index.tsx:36 父render
index.tsx:55 子constructor
index.tsx:63 子getDerivedStateFromProps
index.tsx:77 子render
index.tsx:69 子componentDidMount
index.tsx:27 父componentDidMount
*/