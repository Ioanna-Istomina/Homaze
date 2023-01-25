
import { useDispatch, useSelector } from 'react-redux';
import s from './ContractsFilter.module.css';
import { BiSearch } from 'react-icons/bi';
import { filterAction } from 'redux/actions';
import { filterSelector } from 'redux/selectors';



function ContractsFilter() {

    const dispatch = useDispatch();
    const filter = useSelector(state => filterSelector(state));
 
    const changeFilter = ev => {
      const inputValue = ev.currentTarget.value;
      dispatch(filterAction(inputValue));
    };

    return (
        <form className={s.searchForm}>
        <label className={s.formLabel}>
          <input
            type="text"
            placeholder="Search Customer"
            value={filter}
            onChange={changeFilter}
            className={s.formInput}
          />
          <BiSearch className={s.icon}/>
        </label>
      </form>
    );
}

export default ContractsFilter;