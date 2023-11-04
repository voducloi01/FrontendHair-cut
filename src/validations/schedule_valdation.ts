import * as Yup from 'yup';

// validation product form validation
export const validationSchedule = Yup.object().shape({
  name: Yup.string().required('Name Product is required !'),
  email: Yup.string().email('Invalid email !').required('Email is required !'),
  phone: Yup.number().required('Phone is required !').positive('Phone is required !'),
  dateSchedule: Yup.date().required('Date Schedule is required !'),
});
