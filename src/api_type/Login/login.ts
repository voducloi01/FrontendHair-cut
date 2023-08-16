export type ParamsLogin = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  name: string;
  email: string;
  statusCode: number;
  message: string;
};
