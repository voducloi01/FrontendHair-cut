import { Container } from '@mui/material';
import LoginWrapper from '@/components/admin/organisms/LoginWrapper/LoginWrapper';
import { useState, useContext } from 'react';
import API from '@/services/axiosClient';
import { useDispatch } from 'react-redux';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import { updateUser } from '@/store/slices/UserSlice';
import { goTo } from '@/ts/router';
import { ROUTE_PATH } from '@/constants/constant';
import { LoadingContext } from '@/context/LoadingContext';
import { ParamsLogin } from '@/api_type/Login/login';
import _ from 'lodash';

const LoginPage = () => {
  const dispatch = useDispatch();
  const preloader = useContext(LoadingContext);
  const alertDialog = useContext(AlertDialogContext);
  const [formLogin, setFormLogin] = useState<ParamsLogin>({
    email: '',
    password: '',
  });

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

  //handle login form
  const handleLoginForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      preloader.show();
      const response = await API.apiLogin(formLogin);
      const { token, userInfo } = response.data;

      dispatch(
        updateUser({
          name: userInfo.name,
          email: userInfo.email,
          token: token,
        }),
      );
      goTo(ROUTE_PATH.dashboard);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  return (
    <Container id="login">
      <LoginWrapper
        email={formLogin.email}
        password={formLogin.password}
        onChange={handleChangeValue}
        onClick={handleLoginForm}
      />
    </Container>
  );
};

export default LoginPage;
