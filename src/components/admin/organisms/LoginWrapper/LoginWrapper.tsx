import { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './LoginWrapper.scss';

interface LoginWrapperProps {
  password: string;
  email: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'email' | 'password',
  ) => void;
  onClick: (e: { preventDefault: () => void }) => void;
  onClickRegister: () => void;
}

const LoginWrapper = ({
  onChange,
  onClick,
  onClickRegister,
  password,
  email,
}: LoginWrapperProps) => {
  const [isShowIcon, setIsShowIcon] = useState<boolean>(false);

  // handle Show passWord
  const toggleShowPassWord = () => {
    setIsShowIcon(!isShowIcon);
  };

  return (
    <div className="login-box">
      <div className="login-box__form">
        <div className="login-box__form__title">Login Admin</div>
        <form onSubmit={onClick} className="login-box__form__container">
          <div className="login-box__form__container__input">
            <div className="login-box__form__container__input__user">
              <label>Username</label>
              <input
                required={true}
                type="email"
                name="current-user"
                autoComplete="current-user"
                value={email}
                onChange={(e) => onChange(e, 'email')}
                placeholder="UserName"
              />
            </div>
            <div className="login-box__form__container__input__user">
              <label>Password</label>
              <input
                required={true}
                type={isShowIcon ? 'text' : 'password'}
                value={password}
                name="current-password"
                autoComplete="current-password"
                onChange={(e) => onChange(e, 'password')}
                placeholder="PassWord"
              />
              <div
                className="login-box__form__container__input__user__icon"
                onClick={toggleShowPassWord}
              >
                {!isShowIcon ? (
                  <AiOutlineEye size={25} />
                ) : (
                  <AiOutlineEyeInvisible size={25} />
                )}
              </div>
            </div>
          </div>
          <Button classes="login-box__form__container__button">Login</Button>
          <div
            className="login-box__form__container__register"
            onClick={onClickRegister}
          >
            Register click hear ?
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginWrapper;
