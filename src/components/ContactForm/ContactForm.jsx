import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm, Label, Input, Button } from "./ContactForm.styled";


export class Form extends Component {
  state = {
    name: '',
    number: '',
  }

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
    
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    })
  }
  
  render(){
    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name  
        </Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
          />
        <Label htmlFor={this.numberInputId}>
          Number
        </Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id={this.numberInputId}
          />
        <Button type='submit'>Add contact</Button>
      </ContactForm>
    )
  }
}