import { useEffect, useRef, useState } from 'react';

export const useTimer = (defaultTimeVal = 3000) => {
  const [value, setValue] = useState(3000);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log('running', value);
      setValue((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(timerRef.current);
      console.log('unmounting MyTimer');
    };
  }, [value]);

  function stopTimer(arg) {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }
  

  return {
    value: value,
    stopIt: stopTimer,
  };
};
