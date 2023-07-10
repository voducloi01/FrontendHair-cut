import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

const initState = {
  userName: '',
  password: '',
  token: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: reducers
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
