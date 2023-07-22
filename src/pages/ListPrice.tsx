import Header from '@/components/atoms/Header/Header';
import { Page } from 'framework7-react';
import ListPriceWrapper from '@/components/organisms/ListPriceWrapper/ListPriceWrapper';
const ListPrice = () => {
  return (
    <Page id="price" name="price">
      <Header />
      <ListPriceWrapper />
    </Page>
  );
};

export default ListPrice;
