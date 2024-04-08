import { useEffect, useState } from 'react';

import './App.css';
import MyTimer from './components/MyTimer';
import MyUseReducer from './components/MyUseReducer';

function App() {

  const [value, setValue] = useState(false);

  function changeState() {
    setValue(true);
  }

  return (
    <>
      {console.log('rendered!')}
      <button onClick={changeState}>Click</button>
    </>
  );
}

export default App;
