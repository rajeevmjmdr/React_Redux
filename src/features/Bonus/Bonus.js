import { useDispatch, useSelector } from "react-redux";
import { increment } from "./bonusSlice";
import "./Bonus.css";

const Bonus = () => {
  const point = useSelector((state) => state.bonus.point);
  const dispatch = useDispatch();
  
  return (
    <div className="position">
      <h1 className="text-center">Bonus</h1>
      <div className="text-center">Bonus Point: {point}</div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
         </button>
    
      </div>
      <hr className="solid"></hr>
    </div>
  );
};
export default Bonus;
