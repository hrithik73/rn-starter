import { combineReducers } from '@reduxjs/toolkit';
import theme from './slices/theme';

const rootReducer = combineReducers({
  theme: theme,
});

export default rootReducer;
