import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './Counter';

const CounterList = () => {
  const counters = useSelector((state) => state.counters);

  return (
    <div className="counter-list">
      {counters.map((counter) => (
        <Counter key={counter.id} counter={counter} />
      ))}
    </div>
  );
};

export default CounterList;
