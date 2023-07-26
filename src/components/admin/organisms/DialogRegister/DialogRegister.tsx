import Button from '@/components/atoms/Button/Button';
import { AiOutlineClose } from 'react-icons/ai';
import './DialogRegister.scss';

interface DialogRegisterProps {
  onClose: () => void;
}

const DialogRegister = ({ onClose }: DialogRegisterProps) => {
  return (
    <div className="dialog-register">
      <div className="dialog-register__container">
        <div className="dialog-register__container__info">
          <div className="dialog-register__container__info__title">
            Register Staff
          </div>
          <div
            className="dialog-register__container__info__close"
            onClick={onClose}
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <form className="dialog-register__container__form">
          <div className="dialog-register__container__form__user">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="dialog-register__container__form__user">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="dialog-register__container__form__user">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="dialog-register__container__form__button">
            <Button classes="dialog-register__container__form__button__item">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogRegister;
