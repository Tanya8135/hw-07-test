import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64d3d0d067b2662bf3dcc325.mockapi.io'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const resp = await axios.delete(`/contacts/${contactId}`);
      return resp.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
