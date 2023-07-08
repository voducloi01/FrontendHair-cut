import React from 'react';
import { Page } from 'framework7-react';
import ProductWraper from '../component/organisms/Product';

const Product = () => {
  return (
    <Page id="product" name="product">
      <ProductWraper />
    </Page>
  );
};

export default Product;
