import { useEffect, useState } from 'react';

import './App.css';
import MyTimer from './components/MyTimer';
import MyUseReducer from './components/MyUseReducer';

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
      console.log('Closing timer..');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      console.log('Closing timer..');
    };
  }, []);

  return (
    <>
      <h1 className='text-6xl'>Hello</h1>

      {/* {show && <MyTimer />} */}
      <MyUseReducer />
    </>
  );
}

export default App;
