import TrainingWrapper from '@/components/organisms/TrainingWrapper/TrainingWrapper';
import Header from '@/components/atoms/Header/Header';
import { Page } from 'framework7-react';
import { DATA_INFORMATION } from '@/constants/constant';

const Training = () => {
  return (
    <Page id="training" name="training">
      <Header />
      <TrainingWrapper dataTraining={DATA_INFORMATION} />
    </Page>
  );
};

export default Training;
