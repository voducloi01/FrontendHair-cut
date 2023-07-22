import React from 'react';
import { Page } from 'framework7-react';
import LoginWrapper from '@/components/organisms/LoginWrapper/LoginWrapper';

const Login = () => {
  return (
    <Page id="login" name="login">
      <LoginWrapper />
    </Page>
  );
};

export default Login;
