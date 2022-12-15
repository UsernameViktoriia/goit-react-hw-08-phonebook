import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactSlice/operations';
import {
  ContactsWrapper,
  TitleContacts,
  TitlePhonebook,
} from './ContactsPage.styled';

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsWrapper>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </ContactsWrapper>
  );
}

export default WithAuthRedirect(ContactsPage, '/login');
