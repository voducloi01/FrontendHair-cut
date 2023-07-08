import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

const initState = [
  { 
    id: 1 ,
    userName: 'voducloi01',
    password: '123',
    status : '' ,
  } , {
    id : 2 ,
    userName: 'tienld',
    password: '123',
    status : '' ,
  }
];

export const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: reducers
});


export const { getDataUser, loginUser } = userSlice.actions;

export default userSlice.reducer;
