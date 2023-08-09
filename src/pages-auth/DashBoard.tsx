import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import { Page } from 'framework7-react';

const DashBoard = () => {
  return (
    <Page id="adminDasboad" name="adminDasboad">
      <DashboardWrapper>
        <img src="../Logo.png" style={{ height: '100%', width: '50%'}} />
      </DashboardWrapper>
    </Page>
  );
};

export default DashBoard;
