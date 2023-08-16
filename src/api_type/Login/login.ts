export type ParamsLogin = {
  email: string;
  password: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  age: number;
  phone: number;
  role: number;
  action?: undefined;
};

export type UserALl = {
  result: UserType[];
};

export type LoginResponse = {
  userInfo: UserType;
  token: string;
  email: string;
  statusCode: number;
  message: string;
};
