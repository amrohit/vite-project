import { useEffect, useState } from 'react';
import { useTimer } from '../hooks/use-timer-hook';

const MyTimer = () => {
  const { value, stopIt } = useTimer(5000);

  return (
    <div>
      <h1 className='text-6xl'>{value.toString()}</h1>
      <button type='button' onClick={() => stopIt(5)}>
        Stop It
      </button>
    </div>
  );
};
export default MyTimer;
