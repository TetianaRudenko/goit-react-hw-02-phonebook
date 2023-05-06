import PropTypes from 'prop-types';
import { ContactItem } from "../ContactItem/ContactItem";
import {  List, Item} from "./ContactList.styled";


export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDeleteContact={onDelete}
          />
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  onDelete: PropTypes.func.isRequired,
};