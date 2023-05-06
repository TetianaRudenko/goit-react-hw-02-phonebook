import PropTypes from 'prop-types';
import { ContactInfo, Button } from "./ContactItem.styled";

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <ContactInfo>{name}: </ContactInfo>
      <ContactInfo>{number}</ContactInfo>
      <Button
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};