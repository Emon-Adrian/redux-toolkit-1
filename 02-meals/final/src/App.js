import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeals } from './features/meals/mealsSlice';
import SearchForm from './components/SearchForm';
import Meals from './components/Meals';
import Modal from './components/Modal';
function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const { meals, loading } = useSelector((store) => store.food);
  const { isOpen } = useSelector((store) => store.modal);

  // console.log(meals, loading);
  useEffect(() => {
    dispatch(getMeals(name));
  }, [name]);
  return (
    <main>
      {isOpen && <Modal />}
      <SearchForm name={name} setName={setName} />
      <section className='section'>
        {loading ? <div className='loading'></div> : <Meals meals={meals} />}
      </section>
    </main>
  );
}

export default App;
