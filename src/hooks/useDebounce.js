import { useState, useEffect } from "react";

const useDebounce = (value, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const delayHandler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(delayHandler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
