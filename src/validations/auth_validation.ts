import { ROLE_USER } from '@/constants/constant';
import * as Yup from 'yup';

// validation create user form validation
export const validationCreateUserSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// validation login form validation
export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const validationEditUserSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  role: Yup.number()
    .required('Role is required')
    .test('is-valid-role', 'Invalid role', (value) => {
      return value === ROLE_USER.admin || value === ROLE_USER.staff;
    }),
});
