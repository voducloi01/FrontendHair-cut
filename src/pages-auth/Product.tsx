import { Page } from 'framework7-react';
import ProductWrapper from '@/components/admin/organisms/ProductWrapper/ProductWrapper';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';

const Product = () => {
  return (
    <Page id="product" name="product-auth">
      <DashboardWrapper>
        <ProductWrapper />
      </DashboardWrapper>
    </Page>
  );
};

export default Product;
