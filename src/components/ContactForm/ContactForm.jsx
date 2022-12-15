import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { Form, Label, Input, LabelSpanStyle } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice/operations';
import { Button } from 'components/Button/Button';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contactsData);
  const dispatch = useDispatch();

  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        cont => cont.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      Notiflix.Notify.info(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ number, name }));
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label className="input-group">
        <LabelSpanStyle>Name</LabelSpanStyle>
        <Input
          type="text"
          name="name"
          onChange={onChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label className="input-group">
        <LabelSpanStyle>Number</LabelSpanStyle>
        <Input
          type="tel"
          name="number"
          onChange={onChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
