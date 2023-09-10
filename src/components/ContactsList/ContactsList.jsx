import PropTypes from 'prop-types';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactList } from './ContactsList.styled';
export const ContactsList = ({ contacts, handleDeleteClick }) => {
  return (
    <ContactList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem
          name={name}
          number={number}
          key={id}
          id={id}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};
