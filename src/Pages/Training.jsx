import React from "react";
import TrainingWrapper from "../components/organisms/Training/TrainingWrapper";
import Header from '../components/atoms/Header/Header';
import { DATA_HEADER } from '../constants/constant';
import { Page } from 'framework7-react';

const  Training = () =>  {
    return (  <Page id="home" name="home">
    <Header title={DATA_HEADER} />
    <TrainingWrapper />
  </Page>);
}

export default Training;