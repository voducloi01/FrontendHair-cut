import TrainingWrapper from '@/components/organisms/TrainingWrapper/TrainingWrapper';
import Header from '@/components/atoms/Header/Header';
import { DATA_INFORMATION } from '@/constants/constant';

const Training = () => {
  return (
    <div id="training">
      <Header />
      <TrainingWrapper dataTraining={DATA_INFORMATION} />
    </div>
  );
};

export default Training;
