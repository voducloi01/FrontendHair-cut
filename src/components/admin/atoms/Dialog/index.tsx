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
  onClickSave?: () => void | any;
  children: React.ReactNode;
  maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const DialogWrapper = ({
  open,
  title,
  children,
  onClose,
  onClickSave,
  maxWidth,
}: DialogUserProps) => {
  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open}>
      <DialogTitle textAlign={'center'} fontSize={30}>
        {title}
      </DialogTitle>
      <form onSubmit={onClickSave}>
        <DialogContent>{children}</DialogContent>
        <DialogActions className='pa-4'>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" color='success' type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogWrapper;
