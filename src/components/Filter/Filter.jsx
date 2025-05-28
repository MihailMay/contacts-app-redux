import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name:
        <input
          type="text"
          onChange={e => dispatch(setFilter(e.target.value))}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default Filter;