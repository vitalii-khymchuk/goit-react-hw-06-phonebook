import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: newContact => ({
        payload: { ...newContact, id: nanoid() },
      }),
    },
    deleteContact: {
      reducer: (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export { contactsSlice };
