import { AiOutlineWarning } from 'react-icons/ai';
import { useContext } from 'react';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import ReactDOM from 'react-dom';
import './AlertDialog.scss';

const AlertDialog = () => {
  const alertDialog = useContext(AlertDialogContext);
  return ReactDOM.createPortal(
    alertDialog.isOpen && (
      <div className="alert-dialog">
        <div className="alert-dialog__content">
          <AiOutlineWarning size={24} />
          <div>{alertDialog.message}</div>
        </div>
      </div>
    ),
    document.querySelector('#root')!,
  );
};

export default AlertDialog;
