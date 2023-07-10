import { ROUTE_PATH } from '@/constants/constant';
import Login from '@/pages/admin/Login/Login';
import Product from '@/pages/admin/Product/Product';
import HomePage from '@/pages/Home';
import Introduce from '@/pages/Introduce';
import ListPrice from '@/pages/ListPrice';
import Register from '@/pages/Register';
import Training from '@/pages/Training';
import NotFoundPage from '@/pages/404';

// import { store } from '@/store';
// import { f7 } from 'framework7-react';

//get token
// function isAuth({ to, from, resolve, reject, router }) {
//   const token = store.getState().user.token;
//   if (token) {
//     console.log('dung');
//     to({ redirect: ROUTE_PATH.home });

//     // return
//   } else {
//     console.log('sai');
//     resolve({ component: HomePage });
//   }
// }
const routes = [
  { path: ROUTE_PATH.index, component: HomePage },
  { path: ROUTE_PATH.introduce, component: Introduce },
  { path: ROUTE_PATH.listprice, component: ListPrice },
  {
    path: ROUTE_PATH.login,
    async({ resolve }) {
      resolve({ component: Login });
    }
    //To do update
    // redirect: async ({ resolve, to }) => {
    //   if (store.getState().user.token) {
    //     resolve(ROUTE_PATH.index);
    //   } else if (to.path !== ROUTE_PATH.index) {
    //     return resolve({ url: '' });
    //   }
    // }
  },
  { path: ROUTE_PATH.register, component: Register },
  { path: ROUTE_PATH.training, component: Training },
  {
    path: ROUTE_PATH.product,
    component: Product
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];

export default routes;
