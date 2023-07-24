import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmt } from "./counterSlice";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [value = 0, setValue] = useState();
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    setValue(parseInt(event.target.value));
  };
  return (
    <div className="counter_position">
      <div className="d-flex align-items-center justify-content-center">
        <button
          className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="value">{count}</span>
        <button
          className="btn btn-primary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="value"></span>
        <input
          type="text"
          onChange={inputChangeHandler}
          placeholder="Enter value "
        ></input>
        <button
          className="btn btn-primary"
          aria-label="Increment By Amount"
          onClick={() => dispatch(incrementByAmt(value))}
        >
          IncrementBY Amount
        </button>
      </div>
    </div>
  );
};
export default Counter;
