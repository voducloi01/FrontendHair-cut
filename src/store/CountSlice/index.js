import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducer';


const initState = 0


export const countSlice = createSlice({
  name: 'countValue',
  initialState: initState,
  reducers: reducers
});

export const { countValue } = countSlice.actions;

export default countSlice.reducer;
