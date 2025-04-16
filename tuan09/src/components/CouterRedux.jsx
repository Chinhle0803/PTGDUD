import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from '../store/counterReducer';

const CounterRedux = () => {
  const count = useSelector((state) => state.count); // ✅ Chỉ lấy state.count
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2> {/* ✅ count là number, không phải object */}
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
};

export default CounterRedux;