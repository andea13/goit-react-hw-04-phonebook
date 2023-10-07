import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormButton } from './PhonebookForm.styled';

const PhonebookForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;

    setInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!inputs.name.trim() || !inputs.number.trim()) {
      alert('Please fill in all the fields');
      return;
    }

    onSubmit(inputs);

    reset();
  };

  const reset = () => {
    setInputs({});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          value={inputs.name || ''}
          onChange={handleChange}
          type="text"
          name="name"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          value={inputs.number || ''}
          onChange={handleChange}
          type="tel"
          name="number"
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
