import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import css from './ContactList.module.css';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        {isLoading && <Loader />}
        <ul className={css.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.item}>
              <span className={css.contactInfo}>{contact.name}:</span>
              <span className={css.contactInfo}>{contact.number}</span>
              <button
                type="button"
                className={css.btnDelete}
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
