import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import routes from '@/ts/router';

const MyApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((e) => (
            <Route key={e.path} path={e.path} Component={e.element}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default MyApp;
