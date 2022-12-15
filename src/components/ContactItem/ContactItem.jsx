import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';
import { deleteContact } from '../../redux/contactSlice/operations';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <Item>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <Button
        value={contact.id}
        onClick={() => {
          onDeleteContact(contact.id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
