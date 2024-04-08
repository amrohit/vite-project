import { useEffect, useState } from 'react';

import './App.css';
import MyTimer from './components/MyTimer';
import MyUseReducer from './components/MyUseReducer';

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    console.log('callin an API');
    async function callApi() {
      setIsFetching(true);

      const timer = setTimeout(() => {
        setIsFetching(false);
        console.log('timer expired');
        // Promise.resolve().then((res) => {
        //   console.log('running promise', isFetching);
        // });
        clearTimeout(timer);
      }, 2000);

      const timer2 = setTimeout(() => {
        setIsFetching(false);
        console.log('timer expired');
        // Promise.resolve().then((res) => {
        //   console.log('running promise', isFetching);
        // });
        clearTimeout(timer2);
      }, 4000);

      console.log('calling fetch');

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      const data = await response.json();
      console.log('data received');
      setData(data);
      setIsFetching(false);
    }

    callApi();
  }, []);

  return (
    <>
      {/* <MyTimer />
    <MyUseReducer /> */}
      {console.log(' render')}
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
}

export default App;
