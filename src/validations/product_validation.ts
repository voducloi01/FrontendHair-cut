import * as Yup from 'yup';

// validation product form validation
export const validationProductSchema = Yup.object().shape({
  productName: Yup.string().required('Name Product is required'),
  price: Yup.number().required('Price is required').positive('Invalid Price'),
  categoryId: Yup.number().required('category is required').positive('Invalid category'),
  image: Yup.mixed().required('You can upload image !'),
});
