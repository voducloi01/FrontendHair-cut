import ProductWrapper from '@/components/admin/organisms/ProductWrapper/ProductWrapper';
import { useContext, useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import {
  ParamProduct,
  ProductType,
} from '@/api_type/Product';
import { LoadingContext } from '@/context/LoadingContext';
import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import _ from 'lodash';
import { useFormik } from 'formik';
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
      name_product: '',
      price: 0,
      category: 0,
    },
    validationSchema: validationProductSchema,
    onSubmit: (values: ParamProduct) => HandleCreateProduct(values),
  });

  const HandleCreateProduct = (values: ParamProduct) => {
    console.log(values);
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
