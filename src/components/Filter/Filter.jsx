import { setStatusFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.filterBox}>
      <label className={css.subTitle}>Find contacts by Name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={event => dispatch(setStatusFilter(event.target.value))}
      />
    </div>
  );
};
