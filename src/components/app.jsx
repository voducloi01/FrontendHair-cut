import React from 'react';
import { useEffect } from 'react';
import routes from '../js/router';
import { App, f7, View } from 'framework7-react';
import { Provider } from 'react-redux';
import { store } from '../store';
const MyApp = () => {
  const offline = () => {
    f7.dialog.alert(t('dev-0023'));
  };

  const online = () => {
    f7.dialog.close();
  };

  useEffect(() => {
    // const token = localStorage.getItem('token');
    // if (!token) {
    //   alert('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
    // }
  }, []);

  const params = {
    name: 'Shop-Hair',
    theme: 'auto',
    routes: routes,
    on: {
      offline: offline,
      online: online,
      routeBeforeEnter(routeTo, routeFrom, resolve, reject) {
        const isAuthenticated = !!localStorage.getItem('token');
        const isLoginPage = routeTo.path === '/login';

        if (!isAuthenticated && !isLoginPage) {
          // Token đã bị xóa và người dùng không ở trang đăng nhập
          // Chuyển hướng về trang đăng nhập
          reject();
          App.views.main.router.navigate('/login');
        } else {
          // Token vẫn tồn tại hoặc người dùng ở trang đăng nhập
          // Cho phép truy cập vào route
          resolve();
        }
      }
    },
    dialog: {
      usernamePlaceholder: 'Phone'
    }
  };

  // Thiết lập thời gian chờ 15 phút
  const logoutTimeout = 15 * 60 * 1000; // Đổi 15 phút thành mili giây

  // Hàm xóa token và chuyển hướng đến trang đăng nhập
  const logout = () => {
    localStorage.removeItem('token');
    App.views.main.router.navigate('/login');
  };

  // Thiết lập hành động tự động xóa token sau 15 phút
  const logoutTimer = setTimeout(logout, logoutTimeout);

  // Đặt sự kiện "click" để đặt lại hành động xóa token
  document.addEventListener('click', () => {
    clearTimeout(logoutTimer);
    //logoutTimer = setTimeout(logout, logoutTimeout);
  });

  return (
    <Provider store={store}>
      <App {...params}>
        <View browserHistory={true} browserHistorySeparator={''} main className="hair-shop" />
      </App>
    </Provider>
  );
};

export default MyApp;
