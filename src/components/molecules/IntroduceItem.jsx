import React from 'react';
import './IntroduceItem.scss';
import { Link } from 'framework7-react';
import PropTypes from 'prop-types';
const IntroduceItem = ({ img, title, content }) => {
  return (
    <Link href="https://www.youtube.com/" external target="_blank">
      <div className="wrapper-introduce">
        <img className="item_img" src={img} alt="" />
        <div className="item_title">{title}</div>
        <div className="item_description">{content}</div>
      </div>
    </Link>
  );
};

IntroduceItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};

export default IntroduceItem;
