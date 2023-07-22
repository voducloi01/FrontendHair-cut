import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '@/store/slices/UserSlice';

const updateUser: CaseReducer<UserType, PayloadAction<UserType>> = (
  state,
  action,
) => ({
  ...state,
  userName: action.payload.userName,
  password: action.payload.password,
  token: action.payload.password,
});

export default {
  updateUser,
};
