import { DATA_DASHBOARD, ROUTE_PATH } from '@/constants/constant';
import { f7 } from 'framework7-react';
import './DashboardWrapper.scss';
import { useEffect, useState } from 'react';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = (props: DashboardWrapperProps) => {
  const [router, setRouter] = useState<string>(ROUTE_PATH.dashboard);

  const handleNavigate = (e: string) => {
    f7.view.main.router.navigate(e, {
      animate: false,
    });
  };

  useEffect(() => {
    setRouter(f7.view.current.router.currentRoute.path);
  });

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
      <div {...props}></div>
    </div>
  );
};

export default DashboardWrapper;
