import AdminWrapper from '@/components/admin/organisms/AdminWrapper/AdminWrapper';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import { Page } from 'framework7-react';

const Admin = () => {
  return (
    <Page id="adminDasboad" name="adminDasboad">
      <DashboardWrapper>
        <AdminWrapper />
      </DashboardWrapper>
    </Page>
  );
};

export default Admin;
