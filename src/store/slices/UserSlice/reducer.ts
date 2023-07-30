import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '@/store/slices/UserSlice';

const updateUser: CaseReducer<UserType, PayloadAction<UserType>> = (
  state,
  action,
) => ({
  ...state,
  email: action.payload.email,
  password: action.payload.password,
  token: action.payload.token,
});

export default {
  updateUser,
};
