import React from 'react';
import { Col, Row, Icon } from 'framework7-react';
import './Training.scss';
import { DATA_INFORMATION } from '../../../constants/constant';
const TrainingWrapper = () => {
  return (
    <div className="informationWrapper">
      <h1 className="informationTitle"> THÔNG TIN KHOÁ HỌC</h1>
      <div className="wrapperItem">
        <div className="wrapper">
          {DATA_INFORMATION.map((e) => (
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
