import { DATA_DASHBOARD, ROUTE_PATH } from '@/constants/constant';
import { f7 } from 'framework7-react';
import './DashboardWrapper.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStatesType } from '@/store';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = (props: DashboardWrapperProps) => {
  const selectedData = useSelector((state: RootStatesType) => state.user);

  const [router, setRouter] = useState<string>(ROUTE_PATH.dashboard);

  const handleNavigate = (e: string) => {
    f7.view.main.router.navigate(e, {
      animate: false,
    });
  };

  useEffect(() => {
    setRouter(f7.view.current.router.currentRoute.path);
  }, []);
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div className="admin-wrapper">
        <div className="admin-wrapper__title">Admin</div>
        <div className="admin-wrapper__content">
          <div className="admin-wrapper__content__item__text">
            {DATA_DASHBOARD.map((e) => {
              return (
                <div
                  key={e.id}
                  className={
                    router === e.router
                      ? 'admin-wrapper__content__item__focus'
                      : 'admin-wrapper__content__item'
                  }
                  onClick={() => handleNavigate(e.router)}
                >
                  <e.icon color="blue" size={20} />
                  {e.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="admin-wrapper__nav">
        <div className="admin-wrapper__nav__item">
          <div className="admin-wrapper__nav__item__user">
            <FaUserCircle className="admin-wrapper__nav__item__user__custom" />
            {selectedData.name}
          </div>
          <div className="admin-wrapper__nav__item__logout">
            <FiLogOut className="admin-wrapper__nav__item__user__custom" />
            {t('dashboard.logout')}
          </div>
        </div>
        <div {...props} style={{ width: '100%' }}></div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
