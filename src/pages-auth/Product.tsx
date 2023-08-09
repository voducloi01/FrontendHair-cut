import { Page } from 'framework7-react';
import ProductWrapper from '@/components/admin/organisms/ProductWrapper/ProductWrapper';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import { useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import { Product } from '@/Interface';

const Product = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    API.apiGetProduct()
      .then((res) => {
        const { data } = res.data;
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Page id="product" name="product-auth">
      <DashboardWrapper>
        <ProductWrapper product={product} />
      </DashboardWrapper>
    </Page>
  );
};

export default Product;
