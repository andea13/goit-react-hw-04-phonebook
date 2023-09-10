import React, { Component } from 'react';
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

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      contacts: localStorage.getItem('contact')
        ? JSON.parse(localStorage.getItem('contact'))
        : contact,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = contact => {
    const duplicate = this.state.contacts.find(
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

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = value => {
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteClick = deletedId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deletedId),
    }));
  };

  render() {
    const { onSubmit, getFilteredContacts, handleDeleteClick, handleChange } =
      this;
    const { filter } = this.state;
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
  }
}

export default App;
