import Header from '@/components/atoms/Header/Header';
import { Page } from 'framework7-react';
import RegisterWrapper from '@/components/admin/organisms/RegisterWrapper/RegisterWrapper';

const Register = () => {
  return (
    <Page id="register" name="register-auth">
      <Header />
      <RegisterWrapper />
    </Page>
  );
};

export default Register;
