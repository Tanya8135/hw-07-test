import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <div>
      <main>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2> Contacts</h2>
        <Filter />
        <ContactList />
      </main>
    </div>
  );
}
