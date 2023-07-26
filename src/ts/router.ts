import { ROUTE_PATH } from '@/constants/constant';
import Login from '@/pages-auth/Login';
import NotFoundPage from '@/pages/404';
import HomePage from '@/pages/Home';
import Introduce from '@/pages/Introduce';
import ListPrice from '@/pages/ListPrice';
import Training from '@/pages/Training';
import { Router } from 'framework7/types';
import Admin from '@/pages-auth/Admin';

const routes: Router.RouteParameters[] = [
  { path: ROUTE_PATH.index, component: HomePage },
  { path: ROUTE_PATH.introduce, component: Introduce },
  { path: ROUTE_PATH.listprice, component: ListPrice },
  { path: ROUTE_PATH.login, component: Login },
  { path: ROUTE_PATH.admin, component: Admin },
  { path: ROUTE_PATH.training, component: Training },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
