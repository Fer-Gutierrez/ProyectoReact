import { useState } from "react";

const useCounter = initial => {
  const [counter, setCounter] = useState(initial);

  const increment = max => {
    console.log(max);
    console.log(counter);
    counter < max ? setCounter(counter + 1) : setCounter(max);
  };

  const decrement = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(1);
  };

  const reset = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, reset };
};

export default useCounter;
