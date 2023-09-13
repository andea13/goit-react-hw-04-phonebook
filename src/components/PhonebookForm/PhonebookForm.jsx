import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormButton } from './PhonebookForm.styled';

const PhonebookForm = ({ onSubmit }) => {
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');
  // const [name, setName]=useState('')

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);

    this.setState({
      [name]: value,
    });

    // setContactName(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!contactName.trim() || !number.trim()) {
      alert('Please fill in all the fields');
      return;
    }

    onSubmit({
      name: contactName.trim(),
      number: number.trim(),
    });

    reset();
  };

  const reset = () => {
    setContactName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          value={contactName}
          onChange={handleChange}
          type="text"
          name="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PhonebookForm;
