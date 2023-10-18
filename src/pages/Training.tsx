import { Container } from '@mui/material';
import TrainingWrapper from '@/components/organisms/TrainingWrapper/TrainingWrapper';
import Header from '@/components/atoms/Header/Header';
import { DATA_INFORMATION } from '@/constants/constant';
import Footer from '@/components/atoms/Footer/Footer';

const Training = () => {
  return (
    <Container id="training">
      <Header />
      <TrainingWrapper dataTraining={DATA_INFORMATION} />
      <Footer />
    </Container>
  );
};

export default Training;
