// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: '',
// };

// const filterSlice = createSlice({
//   name: 'filters',
//   initialState,
//   reducers: {
//     addFilter(state, { payload }) {
//       state.value = payload;
//     },
//   },
// });

// export const { addFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setStatusFilter: (state, action) => {
      return (state = action.payload)
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
