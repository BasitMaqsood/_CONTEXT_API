import React, { useReducer } from 'react';

const initialstate = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'reset':
            return initialstate
        default:
            return state

    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialstate);
    return (
        <div>
            <div>First Count - {count.firstCounter}</div>
            <div>Second Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment By 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement By 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment By 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement By 5</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2 By 1</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2 By 1</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default CounterTwo;