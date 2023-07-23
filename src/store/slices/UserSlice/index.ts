import { createSlice } from '@reduxjs/toolkit';
import reducers from '@/store/slices/UserSlice/reducer';

export interface UserType {
  email: string;
  password: string;
  token: string;
}

const initState = {
  email: '',
  password: '',
  token: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: reducers,
});

// Action creators are generated for each case reducer function
export const { updateUser } = counterSlice.actions;

export default counterSlice.reducer;
