import { useEffect, useState } from "react";
import UseAlert from "../alerts/UseAlert";

const useCounter = (initial = 1) => {
  const [counter, setCounter] = useState(initial);

  const { alertInfo } = UseAlert();

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const increment = (max) => {
    counter < max
      ? setCounter(counter + 1)
      : alertInfo(`Hay sólo ${max} unidades de este producto`);
  };

  const decrement = () => {
    counter > 1
      ? setCounter(counter - 1)
      : alertInfo(`La cantidad a comprar no puede ser menor a 1`);
  };

  const reset = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, reset };
};

export default useCounter;
