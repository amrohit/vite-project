import { useReducer, useState } from 'react';

const formReducer = (state, action) => {
  return { ...state, [action.type]: action.payload };
};

const MyUseReducer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [formState, dispatch] = useReducer(formReducer, {
    firstName: '',
    lastName: '',
  });

  function onSubmit(event) {
    console.log(event);
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get('firstName'), data.get('lastName'));
    // backend
  }

  return (
    <div>
      <form method='POST' onSubmit={onSubmit} className='flex flex-col'>
        <input
          className='w-32 h-10 bg-yellow-600'
          type='text'
          name='firstName'
          value={formState.firstName}
          onChange={(event) =>
            dispatch({ type: 'firstName', payload: event.target.value })
          }
        />
        <input
          type='text'
          name='lastName'
          value={formState.lastName}
          onChange={(event) =>
            dispatch({ type: 'lastName', payload: event.target.value })
          }
        />
        <button className='w-auto h-auto bg-black hover:bg-stone-700 text-white p-5 rounded-md cursor-pointer'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default MyUseReducer;
