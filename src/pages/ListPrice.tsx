import { Container, makeStyles } from '@mui/material';
import Header from '@/components/atoms/Header/Header';
import ListPriceWrapper from '@/components/organisms/ListPriceWrapper/ListPriceWrapper';
import Footer from '@/components/atoms/Footer/Footer';
;

const ListPrice = () => {
  return (
    <Container id="price">
      <Header />
      <ListPriceWrapper />
      <Footer />
    </Container>
  );
};

export default ListPrice;
