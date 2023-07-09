import { ROUTE_PATH } from '../constants/constant';
import Login from '../Pages/admin/Login';
import Product from '../Pages/admin/Product';
import HomePage from '../Pages/Home';
import Introduce from '../Pages/Introduce';
import ListPrice from '../Pages/ListPrice';
import Register from '../Pages/Register';
import Training from '../Pages/Training';
import { f7 } from 'framework7-react';

const handleCheckToken = ({ to, resolve }) => {
  const a = localStorage.getItem('token');
  console.log('a', a);
  if (!a) {
    return f7.view.main.router.navigate(ROUTE_PATH.login);
  }
  resolve();
};
const routes = [
  { path: ROUTE_PATH.index, component: HomePage },
  { path: ROUTE_PATH.introduce, component: Introduce },
  { path: ROUTE_PATH.listprice, component: ListPrice },
  { path: ROUTE_PATH.login, component: Login },
  { path: ROUTE_PATH.register, component: Register },
  { path: ROUTE_PATH.training, component: Training },
  {
    path: ROUTE_PATH.product,
    component: Product,
    beforeEnter: handleCheckToken,
    on: {
      pageInit: handleCheckToken
    }
  }
];

export default routes;
