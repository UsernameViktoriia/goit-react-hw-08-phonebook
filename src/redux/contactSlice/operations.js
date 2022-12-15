import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from '../../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await getContactsRequest();
      // При успішному запиті повертаємо проміс із даними
      return response;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      if (
        !thunkAPI
          .getState()
          .contactsData.contacts.find(
            cont => cont.name.toLowerCase() === contact.name.toLowerCase()
          )
      ) {
        const response = await addContactRequest(contact);
        return response;
      }
      alert(`${contact.name} is already in contacts`);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await deleteContactRequest(contactId);
      // При успішному запиті повертаємо проміс із даними
      return contactId;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
