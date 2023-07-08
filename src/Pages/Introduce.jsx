import React, { useState } from 'react';
import Header from '../components/atoms/Header/Header';
import { Page } from 'framework7-react';
import IntroduceWrapper from '../components/organisms/IntroduceWrapper/IntroduceWrapper';
import { DATA_INTRODUCE } from '../constants/constant';
import TitleIntroduce from '../components/organisms/TitleIntroduce/TitleIntroduce';
import { useSelector, useDispatch } from 'react-redux';
import { countValue } from '../store/CountSlice';

function Introduce() {
  const count = useSelector((state)=> state.count)  ;
  
  const dispatch = useDispatch() ; 
  return (
    <Page id="introduce" name="introduce">
      <Header />
      <TitleIntroduce />
      <IntroduceWrapper define_introduce={DATA_INTRODUCE} />   
    </Page>
  );
}

export default Introduce;
