import { Page, f7 } from 'framework7-react';
import LoginWrapper from '@/components/admin/organisms/LoginWrapper/LoginWrapper';
import { useState, useContext } from 'react';
import API from '@/services/axiosClient';
import { ROUTE_PATH } from '@/constants/constant';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/store/slices/UserSlice';
import DialogRegister from '@/components/admin/organisms/DialogRegister/DialogRegister';
import { AlertDialogContext } from '@/context/AlertDialogContext';

const Login = () => {
  const [formLogin, setFormLogin] = useState<{
    email: string;
    password: string;
  }>({ email: '', password: '' });
  const [formRegister, setFormRegister] = useState<{
    name: string;
    email: string;
    password: string;
  }>({ name: '', email: '', password: '' });
  const [isShowRegister, setShowRegister] = useState<boolean>(false);
  const dispatch = useDispatch();
  const alertDialog = useContext(AlertDialogContext);

  // handleChange value login
  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string,
  ) => {
    setFormLogin((prevFormLogin) => ({
      ...prevFormLogin,
      [fieldName]: e.target.value,
    }));
  };

  // handleChange value register
  const onChangeRegister = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string,
  ) => {
    setFormRegister((prevFormRegister) => ({
      ...prevFormRegister,
      [fieldName]: e.target.value,
    }));
  };

  //handle login form
  const handleLoginForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      f7.preloader.show();
      const response = await API.apiLogin(formLogin);
      const { token, user } = response.data.data;
      dispatch(
        updateUser({
          email: formLogin.email,
          name: user?.name,
          token: token,
        }),
      );
      f7.views.main.router.navigate(ROUTE_PATH.product);
    } catch (error: any) {
      alertDialog.show(error.response.data.message);
    } finally {
      f7.preloader.hide();
    }
  };

  // handle register form
  const handleRegisterForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      f7.preloader.show();
      await API.apiRegister(formRegister);
      setShowRegister(false);
    } catch (error: any) {
      alertDialog.show(error.response.data.message);
    } finally {
      f7.preloader.hide();
    }
  };

  // Open form register
  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  return (
    <Page id="login" name="login-auth">
      <LoginWrapper
        email={formLogin.email}
        password={formLogin.password}
        onChange={handleChangeValue}
        onClick={handleLoginForm}
        onClickRegister={handleOpenRegister}
      />
      {isShowRegister && (
        <DialogRegister
          onRegister={handleRegisterForm}
          onClose={() => setShowRegister(false)}
          onChangeRegister={onChangeRegister}
        />
      )}
    </Page>
  );
};

export default Login;
