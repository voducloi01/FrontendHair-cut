import { Icon } from 'framework7-react';
import './TrainingWrapper.scss';
import { DataTrainingType } from '@/constants/constant';

interface TrainingWrapperProps {
  dataTraining: DataTrainingType[];
}

const TrainingWrapper = ({ dataTraining }: TrainingWrapperProps) => {
  return (
    <div className="informationWrapper">
      <h1 className="informationTitle"> THÔNG TIN KHOÁ HỌC</h1>
      <div className="wrapperItem">
        <div className="wrapper">
          {dataTraining.map((e) => (
            <div className="item" key={e.id}>
              <Icon icon={e.icon}></Icon>
              <p className="itemTitle">{e.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingWrapper;
