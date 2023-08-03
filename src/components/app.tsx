import routes from '@/ts/router';
import { App, View } from 'framework7-react';
import { Provider } from 'react-redux';
import { Framework7Parameters } from 'framework7/types';
import { store } from '@/store';

const MyApp = () => {
  const params: Framework7Parameters = {
    name: 'Shop-Hair',
    theme: 'auto',
    routes: routes,
  };

  return (
    <Provider store={store}>
      <App {...params}>
        <View
          browserHistoryAnimate={false}
          main
          browserHistorySeparator={''}
          className="hair-shop"
        />
      </App>
    </Provider>
  );
};

export default MyApp;
