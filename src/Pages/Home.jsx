import React, { useState, useEffect } from 'react';
import { Page } from 'framework7-react';
import Header from '../components/atoms/Header/Header';
import HomeWrapper from '../components/organisms/HomeWrapper/HomeWrapper';
import { DATA_SLIDE } from '../constants/constant';
const HomePage = () => {


  return (
    <Page id="home" name="home">
      <Header  />
      <HomeWrapper slide={DATA_SLIDE} />
    </Page>
  );
};

export default HomePage;
