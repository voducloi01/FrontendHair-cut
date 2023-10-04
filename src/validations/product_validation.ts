import * as Yup from 'yup';

// validation product form validation
export const validationProductSchema = Yup.object().shape({
  name_product: Yup.string().required('Name Product is required'),
  price: Yup.number().required('Price is required').positive('Invalid Price'),
  category: Yup.number().required('category is required').positive('Invalid category'),
});
