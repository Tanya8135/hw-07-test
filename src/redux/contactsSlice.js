// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,

//   extraReducers: builder =>
//     builder

//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items = [...payload].reverse();
//       })

//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.items = [payload, ...state.items];
//         state.isLoading = false;
//       })

//       .addCase(deleteContact.fulfilled, (state, { payload }) => {
//         state.items = state.items.filter(item => item.id !== payload.id);
//         state.isLoading = false;
//       })

//       .addMatcher(
//         isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),
//         state => {
//           state.isLoading = true;
//           state.error = null;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           deleteContact.rejected
//         ),
//         (state, { payload }) => {
//           state.isLoading = false;
//           state.error = payload;
//         }
//       ),
// });

// export const contactsReducer = contactsSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsInitState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1);
    }
  }


});

export const contactsReducer = contactsSlice.reducer;
