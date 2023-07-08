import React from 'react';
import { Button as F7Button } from 'framework7-react';
import './Button.scss';

const Button = (props) => {
  return <F7Button className={['config-button', props.classes].join(' ')} {...props}></F7Button>;
};

export default Button;
