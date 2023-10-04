import ProductWrapper from '@/components/admin/organisms/ProductWrapper/ProductWrapper';
import { useContext, useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import { ParamProduct, ProductType } from '@/api_type/Product';
import { LoadingContext } from '@/context/LoadingContext';
import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import _ from 'lodash';
import { FormikHelpers, useFormik } from 'formik';
import { validationProductSchema } from '@/validations/product_validation';
import { CategoryType } from '@/api_type/Category';

const ProductPage = () => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);

  const preloader = useContext(LoadingContext);
  const alertDialog = useContext(AlertDialogContext);

  useEffect(() => {
    Promise.all([getProduct(), getALLCategory()]);
  }, []);

  const getProduct = async () => {
    try {
      preloader.show();
      const response = await API.apiGetProduct();
      const { data } = response;
      setProduct(data.result);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  const getALLCategory = async () => {
    try {
      preloader.show();
      const response = await API.apiGetCategory();
      const { data } = response;
      setCategory(data.result);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  const formik = useFormik({
    initialValues: {
      productName: '',
      price: 0,
      categoryId: 0,
      image: '',
    },
    validationSchema: validationProductSchema,
    onSubmit: (values: ParamProduct, actions: FormikHelpers<ParamProduct>) =>
      HandleCreateProduct(values, actions),
  });

  const HandleCreateProduct = async (
    values: ParamProduct,
    actions: FormikHelpers<ParamProduct>,
  ) => {
    try {
      preloader.show();
      const formData = new FormData();
      formData.append('productName', values.productName);
      formData.append('price', values.price.toString());
      formData.append('categoryId', values.categoryId.toString());
      formData.append('image', values.image);
      await API.apiCreateProduct(formData);
      await getProduct();
      actions.resetForm({
        values: formik.initialValues,
      });
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  return (
    <Container id="product">
      <DashboardWrapper>
        <ProductWrapper
          category={category ?? []}
          onClickSubmit={() => formik.handleSubmit()}
          validationProduct={formik}
          product={product ?? []}
        />
      </DashboardWrapper>
    </Container>
  );
};

export default ProductPage;
