export type ParamsLogin = {
  email: string;
  password: string;
};

export type Users = {
  id: string;
  name: string;
  email: string;
  role: number;
};

export type LoginResponse = {
  userInfo: Users;
  token: string;
  email: string;
  statusCode: number;
  message: string;
};
