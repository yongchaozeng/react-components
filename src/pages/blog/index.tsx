import React, { Component, ComponentClass } from 'react'
import './index.less'

let isClear = false

type Chess = 'X' | 'O' | null
type BlogProps = {

}

type BlogState = {
    isX: boolean
    selectLog: Array<Array<Chess> | null>
    squeres: Array<Chess>
}

class Blog extends Component<BlogProps, BlogState> {
    constructor(props: BlogProps) {
        super(props)
        this.state = {
            isX: true,
            squeres: Array(9).fill(null),
            selectLog: [[]],
        }
    }

    cb(i: number) {
        if (this.state.squeres[i] != null) return
        let array = this.state.squeres.concat()
        array[i] = this.state.isX ? 'X' : 'O';
        let selectLog;

        if (isClear) {
            selectLog = this.state.selectLog.slice(0, this.state.squeres.filter(item => item != null).length + 1)
            isClear = false
        }else{
            selectLog = this.state.selectLog
        } 
        selectLog.push(array)
     

        this.setState(
            { squeres: array, selectLog: selectLog, isX: !this.state.isX }
        )
    }

    change(squeres: any, index: number) {
        isClear = true
        let isX = index % 2 === 0 ? true : false
        this.setState(
            { ...this.state, squeres, isX }
        )
    }

    renderSquare(i: number) {
        return (
            <div onClick={() => { this.cb(i) }}>
                <Square value={this.state.squeres[i]} > </Square>
            </div>
        )
    }

    render() {
        return (
            <>
                <div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
                <h1>{`当前选手${this.state.isX ? 'X' : 'O'}`}</h1>
                <ul>
                    {
                        this.state.selectLog.map((item, index) => {
                            if (index === 0) {
                                return <li onClick={() => { this.change(item, index) }} key={index}>{'开始'}</li>
                            }
                            return <li onClick={() => { this.change(item, index) }} key={index}>{`move ${index}步`}</li>
                        })
                    }
                </ul>
            </>

        )
    }
}
type SquareProps = {
    value: string | null
}
type SquareState = {
    value: string | null
}
class Square extends Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props)
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <div> {this.props.value}</div>
        )
    }
}
export default Blog