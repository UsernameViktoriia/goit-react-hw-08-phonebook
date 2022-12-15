import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice/contactSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { userReducer } from './userSlice/userSlice';

const store = configureStore({
  reducer: {
    contactsData: contactReducer,
    filter: filterReducer,
    userData: userReducer,
  },
});

export default store;
