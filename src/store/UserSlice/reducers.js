const updateUser = (state, action) => {
  return {
    userName: action,
    password: '',
    token: ''
  };
};

export default {
  updateUser
};
