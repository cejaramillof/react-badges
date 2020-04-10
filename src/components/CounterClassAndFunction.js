import React, { Component, useState, useCallback } from "react"

export class CounterClass extends Component {
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

const functions = new Set();
export function CounterFunction () {
    const [counter, setCount] = useState(0)
    const [anotherCounter, setAnotherCount] = useState(0)

    const handleIncrementClick = useCallback(() => setCount(counter + 1), [counter])

    // when use useCallback only create function again when change arguments
    const doSomething = useCallback(() => alert(10), [anotherCounter])

    functions.add(doSomething)
    functions.add(handleIncrementClick) // in each re-render will create again all functions

    console.log(functions)
    return (
        <div>
            <span>{counter}</span>
            <button onClick={handleIncrementClick}>+</button>
            <button onClick={() => setCount(counter - 1)}>-</button>
        </div>
    )
}