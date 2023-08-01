import { DATA_DASHBOARD } from '@/constants/constant';
import { f7 } from 'framework7-react';
import './DashboardWrapper.scss';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = (props: DashboardWrapperProps) => {
  const handleNavigate = (e: string) => {
    f7.view.main.router.navigate(e, {
      animate: false,
    });
  };
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div className="admin-wrapper">
        <div className="admin-wrapper__title">Admin</div>
        <div className="admin-wrapper__content">
          <div className="admin-wrapper__content__item__text">
            {DATA_DASHBOARD.map((e) => (
              <div
                key={e.id}
                className="admin-wrapper__content__item"
                onClick={() => handleNavigate(e.router)}
              >
                {e.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default DashboardWrapper;
