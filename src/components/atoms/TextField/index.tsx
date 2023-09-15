import { TextField } from '@mui/material';
import './Textfield.scss';
import React from 'react';

type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  classes?: string;
  error?: boolean;
  helperText?: React.ReactNode;
};

const InputField = ({
  error,
  classes,
  label,
  type,
  placeholder,
  helperText,
}: InputProps) => {
  return (
    <div className={`${classes ? classes : ''} input-wrapper`}>
      <TextField
        error={error}
        type={type}
        label={label}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        helperText={helperText}
      />
    </div>
  );
};

export default InputField;
