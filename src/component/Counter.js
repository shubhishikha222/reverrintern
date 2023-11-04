import React from 'react';
import { useDispatch } from 'react-redux'
import { increaseCounter, decreaseCounter, resetCounter, removeCounter } from '../actions/counter1'

const Counter = ({ counter }) => {
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h3>{counter.name}</h3>
      <p>Value: {counter.value}</p>
      <button onClick={() => dispatch(increaseCounter(counter.id))}>Increase</button>
      <button onClick={() => dispatch(decreaseCounter(counter.id))}>Decrease</button>
      <button onClick={() => dispatch(resetCounter(counter.id))}>Reset</button>
      <button onClick={() => dispatch(removeCounter(counter.id))}>Delete</button>
    </div>
  );
};

export default Counter;
