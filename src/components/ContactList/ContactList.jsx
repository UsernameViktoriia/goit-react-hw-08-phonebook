import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsData.contacts);
  const isLoading = useSelector(state => state.contactsData.isLoading);
  const filter = useSelector(state => state.filter.filter);
  const filterContacts = () => {
    return (
      contacts?.filter(contact =>
        contact?.name?.toLowerCase()?.includes(filter?.trim()?.toLowerCase())
      ) ?? []
    );
  };
  return (
    <Contacts>
      {isLoading ? (
        <Loader />
      ) : (
        filterContacts().map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </Contacts>
  );
};
