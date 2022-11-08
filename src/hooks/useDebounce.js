import { useState, useEffect } from "react";

const useDebounce = (value, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);
  const [isDebounceDone, setIsDebounceDone] = useState(false);

  useEffect(() => {
    const delayHandler = setTimeout(() => {
      setIsDebounceDone(false);
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(delayHandler);
      setIsDebounceDone(true);
    };
  }, [value, delay]);

  return [debounceValue, isDebounceDone];
};

export default useDebounce;
