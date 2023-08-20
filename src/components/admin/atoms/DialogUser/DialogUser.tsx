import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import React from 'react';

interface DialogUserProps {
  title: string;
  open: boolean;
  onClose: () => void;
  // onChange: (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   value: 'name' | 'email' | 'role',
  // ) => void;
  // onChangeSelect: (e: SelectChangeEvent<number>, value: 'role') => void;
  oncClickSave: () => void;
  children: React.ReactNode;
}

const DialogUser = ({
  open,
  title,
  children,
  onClose,
  oncClickSave,
}: DialogUserProps) => {
  return (
    <Dialog open={open}>
      <DialogTitle textAlign={'center'}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={oncClickSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogUser;
