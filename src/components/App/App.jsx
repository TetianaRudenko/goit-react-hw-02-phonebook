import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title } from "./App.styled";
import { Form } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }


  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.isInPhonebook(newContact)) {
      alert(`${newContact.name} is already in contacts`);

      return;
    } 

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

  };

  isInPhonebook = newContact => {
    const { contacts } = this.state;
    return contacts.find(({ name }) => name.toUpperCase() === newContact.name.toUpperCase())
      ? true
      : false;
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toUpperCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toUpperCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <Title> Phonebook </Title>
        <Form onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        
        <Title> Contacts </Title>
         <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </Container>);
  }
}
  

