import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import UsersWrapper from '@/components/admin/organisms/UsersWrapper/UsersWrapper';

const Users = () => {
  return (
    <Container id="users">
      <DashboardWrapper>
        <UsersWrapper />
      </DashboardWrapper>
    </Container>
  );
};

export default Users;
