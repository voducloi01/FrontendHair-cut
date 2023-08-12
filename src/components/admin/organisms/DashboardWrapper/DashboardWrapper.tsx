import { DATA_DASHBOARD, ROUTE_PATH } from '@/constants/constant';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStatesType } from '@/store';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { updateUser } from '@/store/slices/UserSlice';
import { goTo } from '@/ts/router';
import { useLocation } from 'react-router-dom';
import './DashboardWrapper.scss';
import HederAdmin from '@/components/admin/molecules/HeaderAdmin/HederAdmin';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = (props: DashboardWrapperProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootStatesType) => state.user);
  // hook location
  const location = useLocation();
  // state router
  const [_, setRouter] = useState(ROUTE_PATH.dashboard);

  // handle click
  const handleNavigate = (router: string) => {
    setRouter(router);
    goTo(router);
  };

  const handleLogout = () => {
    dispatch(
      updateUser({
        name: '',
        email: '',
        token: '',
      }),
    );
    goTo(ROUTE_PATH.login);
  };

  return (
    <div className="dash-board" style={{ display: 'flex', height: '100%' }}>
      <HederAdmin />
      <div className="dash-board__container">
        <div className="admin-wrapper">
          <div className="admin-wrapper__title">Admin</div>
          <div className="admin-wrapper__content">
            <div className="admin-wrapper__content__item__text">
              {DATA_DASHBOARD.map((e) => {
                return (
                  <div
                    key={e.id}
                    className={
                      location.pathname === e.router
                        ? 'admin-wrapper__content__item__text__focus'
                        : 'admin-wrapper__content__item__text__unfocus'
                    }
                    onClick={() => handleNavigate(e.router)}
                  >
                    <e.icon
                      color={location.pathname === e.router ? 'violet' : 'gray'}
                      size={20}
                    />
                    <div
                      className={
                        location.pathname === e.router
                          ? 'admin-wrapper__content__item__text__title'
                          : 'admin-wrapper__content__item__text__disable'
                      }
                    >
                      {e.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div {...props} className="dash-board__container__content"></div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
