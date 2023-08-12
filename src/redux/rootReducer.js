import { combineReducers } from 'redux';
import { themeReducer } from './themeSlice';

const rootReducer = combineReducers({
    theme: themeReducer,
});

export default rootReducer;