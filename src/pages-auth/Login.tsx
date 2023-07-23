import { Page, f7 } from 'framework7-react';
import LoginWrapper from '@/components/admin/organisms/LoginWrapper/LoginWrapper';
import { useState } from 'react';
import API from '@/services/axiosClient';
import { ROUTE_PATH } from '@/constants/constant';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/store/slices/UserSlice';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  //const [password, setPassWord] = useState('');
  const dispatch = useDispatch();

  // handleChange value
  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string,
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: e.target.value,
    }));
  };

  const handleLoginForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const userData = {
      userName: formData.email,
      password: formData.password,
    };

    try {
      f7.preloader.show();
      const response = await API.apiLogin(userData);
      dispatch(
        updateUser({
          userName: formData.email,
          password: formData.password,
          token: response.data.data?.token,
        }),
      );
      f7.views.main.router.navigate(ROUTE_PATH.product);
    } catch (error) {
      console.log(error);
    } finally {
      f7.preloader.hide();
    }
  };

  return (
    <Page id="login" name="login-auth">
      <LoginWrapper
        email={formData.email}
        password={formData.password}
        onChange={handleChangeValue}
        onClick={handleLoginForm}
      />
    </Page>
  );
};

export default Login;
