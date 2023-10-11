import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { useFormikContext } from 'formik';

export type TypeOption = {
  id: number;
  name: string;
};

type SelectFormProps = {
  label: string;
  name: string;
  options: TypeOption[];
  value: string | number;
};

const SelectField = ({ label, name, options, value }: SelectFormProps) => {
  const { handleChange, errors, touched } = useFormikContext<any>();

  const hasError = Boolean(touched[name] && errors[name]);

  return (
    <FormControl fullWidth variant="outlined" error={hasError} margin='dense'>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        labelId={name}
        id={name}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      {hasError && <FormHelperText>{errors[name] as string}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
