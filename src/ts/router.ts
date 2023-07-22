import { ROUTE_PATH } from '@/constants/constant';
import NotFoundPage from '@/pages/404';
import HomePage from '@/pages/Home';
import { Router } from 'framework7/types';

const routes: Router.RouteParameters[] = [
  { path: ROUTE_PATH.index, component: HomePage },
  // { path: ROUTE_PATH.introduce, component: Introduce },
  // { path: ROUTE_PATH.listprice, component: ListPrice },
  // {
  //   path: ROUTE_PATH.login,
  //   async({ resolve }) {
  //     resolve({ component: Login });
  //   }
  //   //To do update
  //   // redirect: async ({ resolve, to }) => {
  //   //   if (store.getState().user.token) {
  //   //     resolve(ROUTE_PATH.index);
  //   //   } else if (to.path !== ROUTE_PATH.index) {
  //   //     return resolve({ url: '' });
  //   //   }
  //   // }
  // },
  // { path: ROUTE_PATH.register, component: Register },
  // { path: ROUTE_PATH.training, component: Training },
  // {
  //   path: ROUTE_PATH.product,
  //   component: Product
  // },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
