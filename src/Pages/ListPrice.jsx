import React from "react";
import Header from '../components/atoms/Header/Header';
import { DATA_HEADER } from '../constants/constant';
import { Page } from 'framework7-react';
import ListPriceWrapper from "../components/organisms/ListPriceWrapper/ListPriceWrapper";
const ListPrice = () =>  {
    return (  <Page id="home" name="home">
    <Header title={DATA_HEADER} />
    <ListPriceWrapper />
  </Page>);
}

export default ListPrice;