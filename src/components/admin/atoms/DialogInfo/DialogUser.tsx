import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
} from '@mui/material';
import React from 'react';

interface DialogUserProps {
  title: string;
  open: boolean;
  onClose: () => void;
  name: string;
  email: string;
  role: number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: 'name' | 'email' | 'role',
  ) => void;
  onChangeSelect: (e: SelectChangeEvent<number>, value: 'role') => void;
  oncClickSave: () => void;
}

const DialogUser = ({
  open,
  title,
  name,
  email,
  role,
  onChange,
  onChangeSelect,
  onClose,
  oncClickSave,
}: DialogUserProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle textAlign={'center'}>{title}</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ pb: 2 }}
          required
          margin="dense"
          id="name"
          label="name"
          type="tex"
          fullWidth
          value={name}
          onChange={(e) => onChange(e, 'name')}
        />
        <TextField
          sx={{ pb: 2 }}
          required
          margin="dense"
          id="email"
          label="Email Address"
          value={email}
          onChange={(e) => onChange(e, 'email')}
          fullWidth
        />
        <Box sx={{ minWidth: 400 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              onChange={(e) => onChangeSelect(e, 'role')}
              label="Role"
            >
              <MenuItem value={0}>Admin</MenuItem>
              <MenuItem value={1}>Staff</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={oncClickSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogUser;
