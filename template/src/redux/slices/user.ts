import {createSlice} from '@reduxjs/toolkit';

export interface IUserSliceStore {
  isDarkTheme: boolean;
  isLoggedIn: boolean;
}

const initialState: IUserSliceStore = {
  isDarkTheme: false,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleTheme, login, logout} = userSlice.actions;

export default userSlice.reducer;
