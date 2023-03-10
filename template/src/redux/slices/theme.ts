import { createSlice } from '@reduxjs/toolkit';

export interface ThemeSlice {
  isDark: boolean;
}

const initialState: ThemeSlice = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      console.log('Toggle Theme called');
      state.isDark = !state.isDark;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
