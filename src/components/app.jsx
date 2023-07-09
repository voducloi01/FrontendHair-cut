import React from 'react';
import routes from '../js/router';
import { App, View } from 'framework7-react';
import { Provider } from 'react-redux';
import { store } from '../store';

const MyApp = () => {
  const params = {
    name: 'Shop-Hair',
    theme: 'auto',
    routes: routes
  };

  return (
    <Provider store={store}>
      <App {...params}>
        <View browserHistory={true} browserHistorySeparator={''} main className="hair-shop" />
      </App>
    </Provider>
  );
};

export default MyApp;
