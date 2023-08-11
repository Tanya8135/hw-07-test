import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts, getIsLoading } from 'redux/selectors';
import { deleteContact, getContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import css from './ContactList.module.css';

export const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        {isLoading && <Loader />}
        <ul className={css.contactList}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.contactItem}>
              <span className={css.contactInfo}>{contact.name}:</span>
              <span className={css.contactInfo}>{contact.number}</span>
              <button
                type="button"
                className={css.btnItemDel}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
