import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

const initState = {
  userName: '',
  password: '',
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: reducers
});

export const { getDataUser, loginUser } = userSlice.actions;

export default userSlice.reducer;
