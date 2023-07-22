import { Button as F7Button } from 'framework7-react';
import './Button.scss';

interface ButtonProps {
  classes: string;
}

const Button = (props: ButtonProps) => {
  return (
    <F7Button
      className={['config-button', props.classes].join(' ')}
      {...props}
    ></F7Button>
  );
};

export default Button;
