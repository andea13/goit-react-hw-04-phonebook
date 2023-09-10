import { FilterLabel, FilterInput } from './ContactsFilter.styled';
import PropTypes from 'prop-types';

export const ContactsFilter = ({ value, handleChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </FilterLabel>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
