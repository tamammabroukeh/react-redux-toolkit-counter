import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../app/counter/counterSlice";
import { useState } from "react";
const Counter = () => {
  const counter = useSelector((state: number) => state.counter.count);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="center">
      <section>
        <p>{counter}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(amount))}>
            increment by amount
          </button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
