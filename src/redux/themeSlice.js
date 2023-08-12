import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: false,
    reducers: {
        toggleTheme: state => !state,
    },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;