import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByValue, increment, incrementByValue, type StateType } from "./redux";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState<number>(0);

  const dispatch = useDispatch();

  const count = useSelector((state: StateType) => state.count);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByValHandler = () => {
    dispatch(incrementByValue(val));
  };

  const decrementByValueHandler = () => {
    dispatch(decrementByValue(val));
  }

  return (
    <div className="container">
      <h2>Count : {count}</h2>
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Value"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
        />
        <div>
          <button disabled={val===0} onClick={incrementByValHandler}>Increment</button>
          <button disabled={val===0} onClick={decrementByValueHandler}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default App;
