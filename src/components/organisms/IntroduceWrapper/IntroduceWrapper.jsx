import React from 'react';
import { Row, Col } from 'framework7-react';
import './introduce.scss';
import IntroduceItem from '../../molecules/IntroduceItem';
const IntroduceWrapper = ({ define_introduce }) => {
  return (
    <Row className="row grid-demo">
      {define_introduce.map((e) => (
        <Col width="100" medium="50" key={e.id}>
          <IntroduceItem img={e.img} title={e.title} content={e.decription} />
        </Col>
      ))}
    </Row>
  );
};

export default IntroduceWrapper;
