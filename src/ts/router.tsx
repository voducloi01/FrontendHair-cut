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
import DashBoard from '@/pages-auth/Admin';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { PrivateAdmin, PrivateRouteLogin } from '@/private/private_router';

const router: RouteObject[] = [
  { path: ROUTE_PATH.index, element: <HomePage /> },
  { path: ROUTE_PATH.introduce, element: <Introduce /> },
  { path: ROUTE_PATH.listprice, element: <ListPrice /> },
  { path: ROUTE_PATH.training, element: <Training /> },
  {
    path: ROUTE_PATH.login,
    element: (
      <PrivateRouteLogin>
        <Login />
      </PrivateRouteLogin>
    ),
  },
  {
    path: ROUTE_PATH.dashboard,
    element: (
      <PrivateAdmin>
        <DashBoard />
      </PrivateAdmin>
    ),
  },

  {
    path: ROUTE_PATH.product,
    element: (
      <PrivateAdmin>
        <Product />
      </PrivateAdmin>
    ),
  },
  {
    path: ROUTE_PATH.schedule,
    element: (
      <PrivateAdmin>
        <Schedule />
      </PrivateAdmin>
    ),
  },
  {
    path: ROUTE_PATH.user,
    element: (
      <PrivateAdmin>
        <Users />
      </PrivateAdmin>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// myRouter use provider
export const myRouter = createBrowserRouter(router);

// go to next router global
export const goTo = myRouter.navigate;
