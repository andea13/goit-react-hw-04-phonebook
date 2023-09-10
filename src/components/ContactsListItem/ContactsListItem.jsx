import {
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactsItemButton,
} from './ContactsListItem.styled';

export const ContactsListItem = ({ name, number, handleDeleteClick, id }) => {
  return (
    <ContactsItem>
      <ContactsItemName>{name}: </ContactsItemName>
      <ContactsItemNumber>{number}</ContactsItemNumber>
      <ContactsItemButton type="button" onClick={() => handleDeleteClick(id)}>
        Delete
      </ContactsItemButton>
    </ContactsItem>
  );
};
