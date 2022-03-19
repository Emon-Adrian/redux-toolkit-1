import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => {
    // console.log(state);
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div>
        <h1>counter</h1>
        <p className='count'>{count}</p>
        <div className='buttons'>
          <button
            type='button'
            className='btn'
            onClick={() => dispatch(decrement())}
          >
            decrease
          </button>
          <button
            type='button'
            className='btn'
            onClick={() => dispatch(reset())}
          >
            reset
          </button>
          <button
            type='button'
            className='btn'
            onClick={() => dispatch(increment())}
          >
            increase
          </button>
        </div>
        <button
          type='button'
          className='btn'
          onClick={() => dispatch(incrementByAmount(3))}
        >
          increase by 3
        </button>
      </div>
    </div>
  );
}

export default App;
