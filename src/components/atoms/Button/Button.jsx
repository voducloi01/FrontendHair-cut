import React from 'react';
import { Button as F7Button } from 'framework7-react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <F7Button className={['config-button', props.classes].join(' ')} {...props}></F7Button>;
};

Button.propTypes = {
  classes: PropTypes.string
};

export default Button;
