import { useDispatch, useSelector } from "react-redux";
import { increment , incrementBYAmt} from "./rewardReducer";
import "./Reward.css";

const Reward = () => {
  const point = useSelector((state) => state.reward.point);
  const dispatch = useDispatch();
  
  return (
    <div className="position">
      <h1 className="text-center">Reward</h1>
      <div className="text-center">Reward Point: {point}</div>
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
          aria-label="Increment value by Amt"
          onClick={() => dispatch(incrementBYAmt(10))}
        >
          IncrementBy 10 +
         </button>
      </div>
      <hr className="solid"></hr>
    </div>
  );
};
export default Reward;
