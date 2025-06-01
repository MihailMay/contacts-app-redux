import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}:</span>
      <span className={styles.number}>{contact.number}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;