import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactSlice/operations';
// import { useDispatch, useSelector } from 'react-redux';

function ContactsPage() {
  const dispatch = useDispatch();
  //   const { error, contacts, isLoading } = useSelector(
  //     state => state.contactsData
  //   );

  //   useEffect(() => {
  //     dispatch(getContacts());
  //   }, [dispatch]);

  //   const onDelete = contactId => {
  //     dispatch(deleteContact(contactId));
  //   };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1
        style={{
          fontSize: 40,
          color: '#1251cc',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: 40,
          color: '#1251cc',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');
