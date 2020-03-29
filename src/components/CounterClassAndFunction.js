import React, { Component, useState } from "react"

export default class CounterClass extends Component {
    state = { counter: 0 }
    render() {
        const { counter } = this.state
        return (
            <div>
                <span>{counter}</span>
                <button onClick={() => this.setState({ counter: counter + 1 })}>+</button>
                <button onClick={() => this.setState({ counter: counter - 1 })}>-</button>
            </div>
        );
    }
}

export default function CounterFunction () {
    const [counter, setCount] = useState(0)
    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => setCount(counter + 1)}>+</button>
            <button onClick={() => this.setState(counter - 1)}>-</button>
        </div>
    )
}