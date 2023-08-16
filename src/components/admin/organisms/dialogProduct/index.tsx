import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AddCircleOutline, Cancel } from '@mui/icons-material';
import { useState } from 'react';

type PropsCreateProduct = {
  isDialog: boolean;
  handleCancel: () => void;
  handleSubmit: () => void;
};

const DialogCreateProduct = ({
  isDialog,
  handleCancel,
  handleSubmit,
}: PropsCreateProduct) => {
  const { t } = useTranslation();
  const [age, setAge] = useState<string | number>('Age');

  const handleChange = (event: SelectChangeEvent<number | string>) => {
    setAge(event.target.value);
  };
  return (
    <Dialog open={isDialog}>
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '30px',
        }}
      >
        Create Product
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name Product"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <DialogActions>
            <Button onClick={handleCancel}>
              <Cancel sx={{ fontSize: '30px' }} className="mr-1" />
              <span className="fs-14">{t('product.cancel')}</span>
            </Button>
            <Button type="submit" variant="contained" color="success">
              <AddCircleOutline sx={{ fontSize: '30px' }} className="mr-1" />
              <span className="fs-14">{t('product.create')}</span>
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateProduct;
