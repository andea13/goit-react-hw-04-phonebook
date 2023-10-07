import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsFilter } from '../components/ContactsFilter/ContactsFilter';
import {
  PhonebookTitle,
  PhonebookContainer,
  ContactsContainer,
  ContactsTitle,
} from './App.styled';

let contact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(
      localStorage.getItem('contact')
        ? JSON.parse(localStorage.getItem('contact'))
        : contact
    );

    console.log('gets item');
  }, []);

  const onSubmit = contact => {
    const duplicate = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (duplicate) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...contact,
      id: nanoid(),
    };

    setContacts(contacts => {
      const newContacts = [...contacts, newContact];

      localStorage.setItem('contact', JSON.stringify(newContacts));
      return newContacts;
    });
  };

  const handleChange = value => {
    setFilter(value);
  };

  const getFilteredContacts = () => {
    console.log(filter);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteClick = deletedId => {
    console.log(contacts);

    setContacts(prevState => {
      const newFilter = prevState.filter(({ id }) => id !== deletedId);
      localStorage.setItem('contact', JSON.stringify(newFilter));
      return newFilter;
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        fontSize: 30,
        color: '#010101',
      }}
    >
      <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <PhonebookForm onSubmit={onSubmit} />
      </PhonebookContainer>
      <ContactsContainer>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsFilter value={filter} handleChange={handleChange} />
        <ContactsList
          contacts={getFilteredContacts()}
          handleDeleteClick={handleDeleteClick}
        />
      </ContactsContainer>
    </div>
  );
};

export default App;
