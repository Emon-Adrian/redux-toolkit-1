import { openModal } from '../features/modal/modalSlice';
import { useDispatch } from 'react-redux';

const Meals = ({ meals }) => {
  const dispatch = useDispatch();

  if (!meals) {
    return <h5 className='text-center'>no meals to display</h5>;
  }
  return (
    <div className='meals-container'>
      {meals.map((item) => {
        const { idMeal, strMealThumb: img, strMeal: name } = item;
        return (
          <article
            className='meal'
            key={idMeal}
            onClick={() => {
              dispatch(openModal(item));
            }}
          >
            <img src={img} alt={name} className='img meal-img' />
          </article>
        );
      })}
    </div>
  );
};
export default Meals;
