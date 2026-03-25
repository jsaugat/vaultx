import { useState } from "react";
import { useEffect, useRef } from "react";

export const useDebounceValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = useRef();

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [value, delay]);

  return { debouncedValue };
};
