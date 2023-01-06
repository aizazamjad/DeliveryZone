import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: undefined,
  isLoggedIn: false,
  user: null,
};

const loginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setLogOut: state => {
      state.isLoggedIn = false;
      state.token = undefined;
      state.user = null;
    },
  },
});

export const {setLogIn, setLogOut} = loginSlice.actions;

export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;
export const selectEmail = state => state.userAuth.email;
export const selectPassword = state => state.userAuth.password;

export default loginSlice.reducer;
