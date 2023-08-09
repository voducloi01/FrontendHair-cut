import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import UsersWrapper from '@/components/admin/organisms/UsersWrapper/UsersWrapper';

const Users = () => {
  return (
    <div id="users">
      <DashboardWrapper>
        <UsersWrapper />
      </DashboardWrapper>
    </div>
  );
};

export default Users;
