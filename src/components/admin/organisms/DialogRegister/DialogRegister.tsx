import Button from '@/components/atoms/Button/Button';
import './DialogRegister.scss';
import { DATA_INPUT_REGISTER } from '@/constants/constant';

interface DialogRegisterProps {
  onClose: () => void;
  onRegister: (e: { preventDefault: () => void }) => void;
  onChangeRegister: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: 'name' | 'email' | 'password',
  ) => void;
}

const DialogRegister = ({
  onClose,
  onRegister,
  onChangeRegister,
}: DialogRegisterProps) => {
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
            {/* <AiOutlineClose size={25} /> */}
          </div>
        </div>
        <form
          onSubmit={onRegister}
          className="dialog-register__container__form"
        >
          {DATA_INPUT_REGISTER.map((e) => (
            <div className="dialog-register__container__form__user" key={e.id}>
              <label>{e.name}</label>
              <input
                type={e.type}
                required={e.required}
                onChange={(event) => onChangeRegister(event, e.value)}
              />
            </div>
          ))}
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
