import ProductWrapper from '@/components/admin/organisms/ProductWrapper/ProductWrapper';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import { useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import { DataProductType } from '@/type';

const Product = () => {
  const [product, setProduct] = useState<DataProductType[]>([]);

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
    <div id="product">
      <DashboardWrapper>
        <ProductWrapper product={product} />
      </DashboardWrapper>
    </div>
  );
};

export default Product;
