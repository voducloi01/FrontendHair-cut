import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

interface DialogUserProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

const DialogUser = ({ open, onClose, title }: DialogUserProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle textAlign={'center'}>{title}</DialogTitle>
      <DialogContent>
        <TextField required margin="dense" id="name" label="name" fullWidth />
        <TextField
          required
          margin="dense"
          id="email"
          label="Email Address"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          margin="dense"
          id="phone"
          label="Phone"
          type="number"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogUser;
