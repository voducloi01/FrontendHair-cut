import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import { Page } from 'framework7-react';

const DashBoard = () => {
  return (
    <Page id="admin-dashboard" name="admin-dashboard">
      <DashboardWrapper>
        <h1>Dash Board</h1>
      </DashboardWrapper>
    </Page>
  );
};

export default DashBoard;
