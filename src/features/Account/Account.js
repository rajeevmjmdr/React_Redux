import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmt,getUserAccount } from "./accountSlice";
import "./Account.css";
import { useState } from "react";

const Account = () => {
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();
  const [value = 0, setValue] = useState();
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    setValue(parseInt(event.target.value));
  };
  return (
    <div className="position">
      <h1 className="text-center">Account</h1>
      <div className="text-center">Amount: {amount}</div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
        <span className="value"></span>
        <button
          className="btn btn-primary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
         Decrement -
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
        <button
          className="btn btn-primary"
          aria-label="getUserAccount"
          onClick={() => dispatch(getUserAccount(1))}
        >
          Get USer
        </button>
      </div>
      <hr className="solid"></hr>
    </div>
  );
};
export default Account;
