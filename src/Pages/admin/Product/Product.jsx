import React from 'react';
import { Page } from 'framework7-react';
import ProductWrapper from '@/components/admin/organisms/ProductWrapper/ProductWrapper';

const Product = () => {
  return (
    <Page id="product" name="product">
      <ProductWrapper />
    </Page>
  );
};

export default Product;
