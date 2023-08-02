import { DATA_DASHBOARD } from '@/constants/constant';
import { f7 } from 'framework7-react';
import './DashboardWrapper.scss';
import { useState } from 'react';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = (props: DashboardWrapperProps) => {
  const [indexItem, setIndexItem] = useState<number>(0);

  const handleNavigate = (e: string, index: number) => {
    console.log('index click : ', indexItem);
    console.log('index active : ', index);
    setIndexItem(index);
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
            {DATA_DASHBOARD.map((e, index) => {
              return (
                <div
                  key={e.id}
                  className={
                    indexItem === index
                      ? 'admin-wrapper__content__item__focus'
                      : 'admin-wrapper__content__item'
                  }
                  onClick={() => handleNavigate(e.router, index)}
                >
                  <pre>
                    {indexItem} va {index}
                  </pre>

                  <e.icon size={20} />
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
