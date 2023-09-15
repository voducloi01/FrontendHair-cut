import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

type CategoryProps = {
  classes: string;
};

const SelectField = ({ classes }: CategoryProps) => {
  const [title, setTitle] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string);
  };
  return (
    <FormControl fullWidth className={classes}>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={title}
        label="Category"
        onChange={handleChange}
      >
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectField;
