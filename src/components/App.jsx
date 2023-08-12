import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/themeSlice';
import { selectTheme } from 'redux/selectors';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export function App() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectTheme);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('darkTheme');
      document.body.classList.remove('lightTheme');
    } else {
      document.body.classList.remove('darkTheme');
      document.body.classList.add('lightTheme');
    }
  }, [darkTheme]);

  return (
    <div className={css}>
      <main>
        <button
          className={css.btnTheme}
          onClick={() => dispatch(toggleTheme())}
        >
          Theme: {darkTheme ? 'Light' : 'Dark'}
        </button>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </main>
    </div>
  );
}
