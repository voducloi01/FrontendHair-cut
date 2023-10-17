import { Container } from '@mui/material';
import Header from '@/components/atoms/Header/Header';
import IntroduceWrapper from '@/components/organisms/IntroduceWrapper/IntroduceWrapper';
import TitleIntroduce from '@/components/organisms/TitleIntroduce/TitleIntroduce';
import { useContext, useEffect, useState } from 'react';
import { ProductType } from '@/api_type/Product';
import { LoadingContext } from '@/context/LoadingContext';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import API from '@/services/axiosClient';
import _ from 'lodash';
import { CategoryType } from '@/api_type/Category';

const Introduce = () => {
  const [dataProduct, setDataProduct] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);
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
      setDataProduct(data.result);
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
      setCategory(data.result);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  return (
    <Container id="introduce" sx={{ overflowY: 'scroll' }}>
      <Header />
      <TitleIntroduce />
      <IntroduceWrapper
        dataProduct={dataProduct || []}
        category={category || []}
      />
    </Container>
  );
};

export default Introduce;
