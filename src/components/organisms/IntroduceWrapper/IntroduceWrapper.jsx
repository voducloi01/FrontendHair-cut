import React from 'react';
import { Row, Col } from 'framework7-react';
import './introduce.scss';
import IntroduceItem from '@/components/molecules/IntroduceItem';
import PropTypes from 'prop-types';

const IntroduceWrapper = ({ define_introduce = [] }) => {
  return (
    <Row className="row grid-demo">
      {define_introduce.map((e) => (
        <Col width="100" medium="50" key={e.id}>
          <IntroduceItem img={e.img} title={e.title} content={e.description} />
        </Col>
      ))}
    </Row>
  );
};

IntroduceWrapper.propTypes = {
  define_introduce: PropTypes.array.isRequired
};

export default IntroduceWrapper;
