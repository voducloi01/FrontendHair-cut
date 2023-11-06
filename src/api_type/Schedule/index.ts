export type ParamSchedule = {
  name: string;
  email: string;
  phone: string;
  dateSchedule: Date | null | string;
};

export type TypeSchedule = {
  id: number;
  name: string;
  email: string;
  phone: string;
  dateSchedule: Date;
  action: any;
};

export type ResponseSchedule = {
  result: TypeSchedule[];
  message: string;
};
