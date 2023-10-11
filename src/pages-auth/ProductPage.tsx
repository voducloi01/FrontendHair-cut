import ProductWrapper from '@/components/admin/organisms/ProductWrapper/ProductWrapper';
import { useContext, useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import { LoadingContext } from '@/context/LoadingContext';
import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import _ from 'lodash';
import { CategoryType } from '@/api_type/Category';
import { ProductType } from '@/api_type/Product';

const ProductPage = () => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<[]>([]);

  const preloader = useContext(LoadingContext);
  const alertDialog = useContext(AlertDialogContext);

  useEffect(() => {
    Promise.all([getProduct(), getAllCategory()]);
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

  const getAllCategory = async () => {
    try {
      preloader.show();
      const response = await API.apiGetCategory();
      const { data } = response;
      const customCategory =  data.result.map((e: CategoryType) => { return ({id: e.id , name: e.categoryName})})   
      setCategory(customCategory);
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
          getProduct={getProduct}
          category={category ?? []}
          product={product ?? []}
        />
      </DashboardWrapper>
    </Container>
  );
};

export default ProductPage;
