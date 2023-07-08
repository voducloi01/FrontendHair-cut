import React from 'react';
import Header from '../components/atoms/Header/Header';
import { Page } from 'framework7-react';
import RegisterWrapper from '../components/organisms/RegisterWrapper/RegisterWrapper';

const Register = () => {
  return (
    <Page id="home" name="home">
      <Header />
      <RegisterWrapper />
    </Page>
  );
};

export default Register;
