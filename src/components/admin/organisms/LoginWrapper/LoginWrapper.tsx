import { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import { useTranslation } from 'react-i18next';
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined,
} from '@mui/icons-material';
import './LoginWrapper.scss';

interface LoginWrapperProps {
  password: string;
  email: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'email' | 'password',
  ) => void;
  onClick: (e: { preventDefault: () => void }) => void;
}

const LoginWrapper = ({
  onChange,
  onClick,
  password,
  email,
}: LoginWrapperProps) => {
  const { t } = useTranslation();
  const [isShowIcon, setIsShowIcon] = useState<boolean>(false);

  // handle show and hidden password
  const toggleShowPassWord = () => {
    setIsShowIcon(!isShowIcon);
  };

  return (
    <div className="login-box">
      <div className="login-box__form">
        <div className="login-box__form__title">{t('login.title')}</div>
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
                placeholder="Username"
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
                placeholder="Password"
              />
              <div
                className="login-box__form__container__input__user__icon"
                onClick={toggleShowPassWord}
              >
                {!isShowIcon ? (
                  <RemoveRedEyeOutlined sx={{ fontSize: 25 }} />
                ) : (
                  <VisibilityOffOutlined sx={{ fontSize: 25 }} />
                )}
              </div>
            </div>
          </div>
          <Button classes="login-box__form__container__button">
            {t('login.title')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginWrapper;
