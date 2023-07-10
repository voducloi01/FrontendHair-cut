const updateUser = (state, action) => {
  return {
    ...state,
    userName: action.payload.userName,
    password: action.payload.password,
    token: action.payload.token
  };
};

export default {
  updateUser
};
