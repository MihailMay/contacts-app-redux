import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span>{contact.name}: {contact.number}</span>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;