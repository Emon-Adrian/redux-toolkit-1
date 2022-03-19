import { closeModal } from '../features/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const Modal = () => {
  const dispatch = useDispatch();
  const { singleMeal } = useSelector((store) => store.modal);
  const { strMealThumb: img, strArea: area, strMeal: name } = singleMeal;
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <img src={img} alt={name} className='img modal-img' />
        <h4>{name}</h4>
        <p>{area}</p>
        <button
          className='btn close-btn'
          type='button'
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          close modal
        </button>
      </div>
    </aside>
  );
};
export default Modal;
