import React, { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

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
    <div className={css.appBox}>
      <main>
        <button className={css.btnTheme} onClick={toggleTheme}>
          Theme: {darkTheme ? 'Light' : 'Dark'}
        </button>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2> Contacts</h2>
        <Filter />
        <ContactList />
      </main>
    </div>
  );
}
