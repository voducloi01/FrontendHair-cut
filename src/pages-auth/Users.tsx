import { Page } from 'framework7-react';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import UsersWrapper from '@/components/admin/organisms/UsersWrapper/UsersWrapper';

const Users = () => {
  return (
    <Page id="users" name="users-auth">
      <DashboardWrapper>
        <UsersWrapper />
      </DashboardWrapper>
    </Page>
  );
};

export default Users;
