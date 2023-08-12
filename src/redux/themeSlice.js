import { createSlice } from '@reduxjs/toolkit';

const themeStorage = localStorage.getItem('theme');

const themeSlice = createSlice({
    name: 'theme',
    initialState: themeStorage ? JSON.parse(themeStorage) : false,
    reducers: {
        toggleTheme: (state) => {
            const newTheme = !state;
            localStorage.setItem('theme', JSON.parse(newTheme));
            return newTheme;
        }
    },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;