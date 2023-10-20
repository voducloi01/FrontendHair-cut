import { DataTrainingType } from '@/constants/constant';
import './TrainingWrapper.scss';
import ContentCutIcon from '@mui/icons-material/ContentCut';

interface TrainingWrapperProps {
  dataTraining: DataTrainingType[];
}

const TrainingWrapper = ({ dataTraining }: TrainingWrapperProps) => {
  return (
    <div className="information__wrapper my-4 pb-4">
      <h1 className="information__wrapper__title"> THÔNG TIN KHOÁ HỌC</h1>
      <div className="information__wrapper__content">
        <div className="information__wrapper__content__item">
          {dataTraining.map((e) => (
            <div className="information__wrapper__content__item__wrapper" key={e.id}>
              <ContentCutIcon className='mx-3'/>
              <p className="information__wrapper__content__item__wrapper__title">{e.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingWrapper;
