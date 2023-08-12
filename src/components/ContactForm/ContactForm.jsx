import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const filteredContact = useSelector(selectFilteredContacts);
  const isLoadingContacts = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (isLoadingContacts) {
      return;
    }

    const dublicateContact = filteredContact.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (dublicateContact) {
      alert(`${name} is already in contacts!`);
    } else {
      dispatch(addContact({ name, number }));
    }

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.contactFormBox}>
        <label className={css.subTitle}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            autoFocus="on"
          />
        </label>
        <label className={css.subTitle}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
          />
        </label>
      </div>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
