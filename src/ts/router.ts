import { ROUTE_PATH } from '@/constants/constant';
import Login from '@/pages-auth/Login';
import NotFoundPage from '@/pages/404';
import HomePage from '@/pages/Home';
import Introduce from '@/pages/Introduce';
import ListPrice from '@/pages/ListPrice';
import Training from '@/pages/Training';
import Product from '@/pages-auth/Product';
import Schedule from '@/pages-auth/Schedule';
import Users from '@/pages-auth/Users';
import DashBoard from '@/pages-auth/DashBoard';

export interface RouteComponent {
  path?: string;
  element?: React.ComponentType<any>;
  children?: RouteComponent[];
}

const routes: RouteComponent[] = [
  { path: ROUTE_PATH.index, element: HomePage },
  { path: ROUTE_PATH.introduce, element: Introduce },
  { path: ROUTE_PATH.listprice, element: ListPrice },
  { path: ROUTE_PATH.login, element: Login },
  { path: ROUTE_PATH.training, element: Training },
  { path: ROUTE_PATH.dashboard, element: DashBoard },
  { path: ROUTE_PATH.product, element: Product },
  { path: ROUTE_PATH.schedule, element: Schedule },
  { path: ROUTE_PATH.user, element: Users },
  {
    path: '*',
    element: NotFoundPage,
  },
];

export default routes;
